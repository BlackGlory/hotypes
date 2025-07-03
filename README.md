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
- Head
- Last
- Tail
- Flatten
- FlattenDeep
- FunctionKeys
- NonNullableKeys
- NullableKeys
- OptionalKeys
- KeysByType
- KeysByExactType
- KeysExcludeByType
- KeysExcludeByExactType
- MapAllProps
- MapPropsByKey
- MapPropsByType
- MapPropsByExactType
- MapNullablePropsToOptionalNullable
- MapNullablePropsToOptional
- MapPropsToRequiredByKey
- MapPropsToOptionalByKey
- MapPropsToNonNullable
- Mixin
- MixinAll
- PickNonNever
- Pop
- PropByPath
- OmitPropsByType
- OmitPropsByExactType
- Replace
- ReplacePropsByKey
- ReplacePropsByType
- WithDefault
- NonCallable
- ReturnTypeOfConstructor
- ParametersOfConstructor
- UnpackedArray
- UnpackedArrayLike
- UnpackedIterable
- UnpackedAsyncIterable
- UnpackedPromise
- UnpackedPromiseLike
- ToType
- Prettify

*The `Unpacked` prefix comes from [this official article](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types)*
