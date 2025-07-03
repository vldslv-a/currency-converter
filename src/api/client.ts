import axios, { isCancel } from 'axios';
import type { AxiosError, AxiosResponse } from 'axios';

export type ApiErrorResponse = {
  message?: string;
  error?: string;
};

const DEFAULT_ERROR_MESSAGE = 'Unknown error';

class ResponseError extends Error {
  constructor(
    public status: number,
    public fields: { message: string }[],
    message: string
  ) {
    super(message);
    this.name = 'ResponseError';
  }
}

export const HttpStatus = {
  OK: 200,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(
  <T>(response: AxiosResponse<T>): AxiosResponse<T> | T =>
    response.config.responseType === 'blob' ? response : response.data,
  async (error: AxiosError<ApiErrorResponse>) => {
    if (error.response?.status !== undefined) {
      if (error.response.data instanceof Blob) {
        const blobError = JSON.parse(await error.response.data.text()) as ApiErrorResponse;
        const message = blobError.message ?? blobError.error ?? DEFAULT_ERROR_MESSAGE;
        throw new ResponseError(error.response.status, [{ message }], message);
      } else {
        const message = error.response.data.message ?? error.response.data.error ?? DEFAULT_ERROR_MESSAGE;
        throw new ResponseError(error.response.status, [{ message }], message);
      }
    }

    if (isCancel(error)) {
      throw new ResponseError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        [{ message: 'Request cancelled' }],
        'Request cancelled'
      );
    }

    throw new ResponseError(
      HttpStatus.INTERNAL_SERVER_ERROR,
      [{ message: DEFAULT_ERROR_MESSAGE }],
      DEFAULT_ERROR_MESSAGE
    );
  }
);
