type Entry<T extends {}> = T extends readonly [unknown, ...unknown[]]
  ? TupleEntry<T>
  : T extends readonly (infer U)[]
    ? [`${number}`, U]
    : ObjectEntry<T>;

type ObjectEntry<T extends {}> = T extends object
  ? { [K in keyof T]: [K, Required<T>[K]] }[keyof T] extends infer E
    ? E extends [infer K, infer V]
      ? K extends number | string
        ? [`${K}`, V]
        : never
      : never
    : never
  : never;

type TupleEntry<T extends readonly unknown[], I extends unknown[] = [], R = never> = T extends readonly [
  infer Head,
  ...infer Tail,
]
  ? TupleEntry<Tail, [...I, unknown], R | [`${I['length']}`, Head]>
  : R;

export const entries = <T extends object>(obj: T) => Object.entries(obj) as unknown as Entry<T>[];
