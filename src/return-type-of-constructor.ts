/**
 * @deprecated Please use the built-in utility type `InstanceType`.
 */
export type ReturnTypeOfConstructor<T extends new (...args: any) => any> =
  InstanceType<T>
