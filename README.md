# hotypes
Higher-order types for TypeScript in the real world.

## Motivation
> [TypeScripts type system is Turing-complete.](https://github.com/microsoft/TypeScript/issues/14833)

If you don't follow the real-world use cases to create higher-order types,
you will create a lot of useless new macros.

> Some people, when confronted with a type problem, think "I know, I'll use advanced types." Now they have two type problems.

Higher-order types are difficult,
so we should not further complicate or mystify them.

## The difference with [justypes]
hotypes are more like verbs or operators.

[justypes]: https://www.npmjs.com/package/justypes

## Install
```sh
npm install --save hotypes
# or
yarn add hotypes
```

## API
It is highly recommended to read test cases to make sure you understand what types exactly do.

- Equals
- FunctionKeys
- Head
- KeysByType
- KeysByExactType
- KeysExcludeByType
- KeysExcludeByExactType
- Last
- MapAllProps
- MapPropsByKey
- MapPropsByType
- MapPropsByExactType
- MapNullablePropsToOptionalNullable
- MapNullablePropsToOptional
- MapPropsToNonOptionalByKey
- MapPropsToOptionalByKey
- MapPropsToNonNullable
- Mixin
- MixinAll
- NonNullableKeys
- NullableKeys
- OmitPropsByType
- OmitPropsByExactType
- OptionalKeys
- PickNonNever
- Replace
- ReplacePropsByKey
- ReplacePropsByType
- ReturnTypeOfConstructor
- Tail
- WithDefault
- NonCallable
