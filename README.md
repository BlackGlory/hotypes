# hotypes
Higer order types for TypeScript in the real world.

## Motivation

> [TypeScripts type system is Turing-complete.](https://github.com/microsoft/TypeScript/issues/14833)

This means that if you don't follow the real-world use cases to create high-order types,
you will create a lot of useless new macros.

> Some people, when confronted with a type problem, think "I know, I'll use advanced types." Now they have two type problems.

This means that higher-order types are difficult,
so we should not further complicate or mystify them.

## Install

```sh
npm install --save hotypes
# or
yarn add hotypes
```

## API

It is highly recommended to read test cases to make sure you understand what types exactly do.

- ConstructorReturnType
- Constructor
- Dictionary
- Equals
- ExcludeKeysByType
- ExcludeKeysExtendType
- NonNullable
- FunctionKeys
- Getter
- Head
- KeysByType
- KeysExtendType
- Last
- MapPropsToNonNullable
- MapNullablePropsToOptionalProps
- MapPropsByType
- MapPropsExtendType
- NonEmptyArray
- NonNullableKeys
- Nullable
- PartialKeys
- PickNonNever
- RequiredKeys
- Tail
- UnpackedArrayLike
- UnpackedArray
- UnpackedPromiseLike
- UnpackedPromise
- WithDefault
