import { render as rtlRender } from '@testing-library/react';
import { merge } from 'utils/merge';
import type { RenderOptions } from '@testing-library/react';
import type { DeepPartial } from 'types/DeepPartial';

export function render(ui: React.ReactElement, renderOptions: RenderOptions = {}) {
  return rtlRender(ui, renderOptions);
}

export const makeEntity =
  <E extends Record<string, E[keyof E]>>(makeDefault: () => E) =>
  (extended?: DeepPartial<E>): E =>
    merge(makeDefault(), extended ?? {});
