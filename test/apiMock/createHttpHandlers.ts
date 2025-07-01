import { http, HttpResponse } from 'msw';
import { HttpStatus } from 'api/client';
import type { ApiErrorResponse } from 'api/client';
import type { AxiosError } from 'axios';
import type { JsonBodyType } from 'msw';

export const createGetHandler =
  <T extends JsonBodyType>(fn: string | ((json: T) => string)) =>
  (json: T, error?: Partial<AxiosError<ApiErrorResponse>['response']>, status: number = HttpStatus.OK) =>
    http.get(typeof fn === 'function' ? fn(json) : fn, () =>
      HttpResponse.json(error?.data ?? json, { status: error?.status ?? status })
    );

export const createPutHandler =
  <T extends JsonBodyType = undefined>(
    fn: string | ((json: T) => string),
    responseFn: (json: T) => T | undefined = () => undefined
  ) =>
  (json: T, error?: Partial<AxiosError<ApiErrorResponse>['response']>, status: number = HttpStatus.OK) =>
    http.put(typeof fn === 'function' ? fn(json) : fn, () =>
      HttpResponse.json(error?.data ?? responseFn(json), { status: error?.status ?? status })
    );

export const createPostHandler =
  <T extends JsonBodyType, R extends JsonBodyType = T>(
    fn: string | ((json: T) => string),
    responseFn?: (json: T) => R
  ) =>
  (json: T, error?: Partial<AxiosError<ApiErrorResponse>['response']>, status: number = HttpStatus.OK) =>
    http.post(typeof fn === 'function' ? fn(json) : fn, () =>
      HttpResponse.json(error?.data ?? responseFn?.(json) ?? json, { status: error?.status ?? status })
    );

export const createDeleteHandler =
  <T extends JsonBodyType = undefined>(fn: string | ((json: T) => string)) =>
  (json: T, error?: Partial<AxiosError<ApiErrorResponse>['response']>, status: number = HttpStatus.OK) =>
    http.delete(typeof fn === 'function' ? fn(json) : fn, () => HttpResponse.json(error?.data ?? json, { status }));
