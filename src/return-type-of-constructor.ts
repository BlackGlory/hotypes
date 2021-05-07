export type ReturnTypeOfConstructor<T extends new (...args: any) => any> =
  T extends new (...args: any) => infer R
  ? R
  : any
