# hotypes
Higher-order types for TypeScript in the real world.

`hotypes` contains these types:
- A new type is a modified type from another type.
- A new type is an operator or a function.
- A new type is an internal type extractor.

## Install
```sh
npm install --save hotypes
# or
yarn add hotypes
```

## API
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
- Tail
- WithDefault
- NonCallable
- ReturnTypeOfConstructor
- UnpackedArray
- UnpackedArrayLike
- UnpackedIterable
- UnpackedAsyncIterable
- UnpackedPromise
- UnpackedPromiseLike

*The naming convention of `Unpacked` comes from [this official article].*

[this official article]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types
