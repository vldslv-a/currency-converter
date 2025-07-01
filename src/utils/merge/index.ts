import { entries } from '../entries';
import type { DeepPartial } from 'types/DeepPartial';

const mergeArrays = <T>(arr1: T[], arr2: T[], mergeFn: (a: T, b: DeepPartial<T>) => T): T[] => {
  const result: T[] = [];

  for (let index = 0; index < Math.max(arr1.length, arr2.length); index = index + 1) {
    const item1 = arr1[index];
    const item2 = arr2[index];

    if (item2 == null) {
      continue;
    }

    result[index] = !Array.isArray(item1) && typeof item1 === 'object' && item1 ? mergeFn(item1, item2) : item2;
  }

  return result;
};

export const merge = <T extends Record<string, T[keyof T]>>(
  obj: T,
  ...source: (DeepPartial<T> | null | undefined)[]
): T => {
  const result = typeof obj === 'object' ? { ...obj } : obj;

  source.forEach((item) => {
    if (item) {
      entries(item).forEach(([key, value]) => {
        if (Array.isArray(result[key]) && Array.isArray(value)) {
          const currentValue = result[key] as unknown as unknown[];

          Object.assign(result, { [key]: mergeArrays(currentValue, value, merge) });
        } else if (Boolean(value) && typeof value === 'object' && Boolean(result[key])) {
          const currentValue = result[key] as unknown as DeepPartial<T>;

          Object.assign(result, { [key]: merge(currentValue, value) });
        } else {
          Object.assign(result, { [key]: value });
        }
      });
    }
  });

  return result;
};
