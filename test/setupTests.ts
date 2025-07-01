// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from './apiMock/server';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

global.console.error = jest.fn().mockImplementation((error: string) => Promise.reject(new Error(error)));

global.console.warn = jest.fn().mockImplementation((error: string) => Promise.reject(new Error(error)));
