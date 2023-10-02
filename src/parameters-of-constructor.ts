export type ParametersOfConstructor<T extends new (...args: any) => any> =
  T extends new (...args: infer Args) => any
  ? Args
  : never
