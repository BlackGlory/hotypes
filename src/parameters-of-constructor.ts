/**
 * @deprecated Please use the built-in utility type `ConstructorParameters`.
 */
export type ParametersOfConstructor<T extends new (...args: any) => any> =
  ConstructorParameters<T>
