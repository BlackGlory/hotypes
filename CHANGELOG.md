# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.4.8](https://github.com/BlackGlory/hotypes/compare/v0.4.7...v0.4.8) (2022-08-31)


### Features

* add `NonCallable` ([1e6ffe1](https://github.com/BlackGlory/hotypes/commit/1e6ffe195cd246f2a8e69ba0fa173e001b7bbb73))

### [0.4.7](https://github.com/BlackGlory/hotypes/compare/v0.4.6...v0.4.7) (2022-08-24)


### Features

* add `MixinAll` ([4ad9342](https://github.com/BlackGlory/hotypes/commit/4ad934220f5c5270f3af1cc8f04418c983ed3177))

### [0.4.6](https://github.com/BlackGlory/hotypes/compare/v0.4.5...v0.4.6) (2022-08-18)


### Features

* add `MapProps` ([a47ddbf](https://github.com/BlackGlory/hotypes/commit/a47ddbf8c6551622df2199cec297fae2b22c4258))

### [0.4.5](https://github.com/BlackGlory/hotypes/compare/v0.4.4...v0.4.5) (2022-08-01)

### [0.4.4](https://github.com/BlackGlory/hotypes/compare/v0.4.3...v0.4.4) (2022-03-20)

### [0.4.3](https://github.com/BlackGlory/hotypes/compare/v0.4.2...v0.4.3) (2021-11-18)


### Features

* improve KeysExtendType ([89bfbcd](https://github.com/BlackGlory/hotypes/commit/89bfbcdaec3208271e7d7114d1f954fdf49ef3f1))

### [0.4.2](https://github.com/BlackGlory/hotypes/compare/v0.4.1...v0.4.2) (2021-08-10)


### Features

* add Mixin ([324a979](https://github.com/BlackGlory/hotypes/commit/324a979004a08cd1cd31756faf0e775d48994346))

### [0.4.1](https://github.com/BlackGlory/hotypes/compare/v0.4.0...v0.4.1) (2021-08-10)


### Features

* add MapPropsByKey, ReplacePropsByKey ([9ae1466](https://github.com/BlackGlory/hotypes/commit/9ae1466ddf9342754390cf2bb862cf126ff552f0))

## [0.4.0](https://github.com/BlackGlory/hotypes/compare/v0.3.3...v0.4.0) (2021-07-03)


### ⚠ BREAKING CHANGES

* move a batch of types to justypes

### Features

* move a batch of types to justypes ([c1e5c68](https://github.com/BlackGlory/hotypes/commit/c1e5c688cc092ed2edc9123c5aa86a14bb5e4249))

### [0.3.3](https://github.com/BlackGlory/hotypes/compare/v0.3.2...v0.3.3) (2021-06-25)


### Features

* add OmitPropsByType, OmitPropsExtendType ([2fa95f5](https://github.com/BlackGlory/hotypes/commit/2fa95f577fa87d5f7f8222fbcb31a8d4352dcfdf))

### [0.3.2](https://github.com/BlackGlory/hotypes/compare/v0.3.1...v0.3.2) (2021-06-22)


### Features

* add MapNullablePropsToOptionalNullable ([0d052a1](https://github.com/BlackGlory/hotypes/commit/0d052a1a5d0ca00e192fdd816db86b01f2745988))

### [0.3.1](https://github.com/BlackGlory/hotypes/compare/v0.3.0...v0.3.1) (2021-06-22)

## [0.3.0](https://github.com/BlackGlory/hotypes/compare/v0.2.3...v0.3.0) (2021-06-22)


### ⚠ BREAKING CHANGES

* rename MapPropsExtendTypeToOptional to MapPropsByKeyToOptional

* rename MapPropsExtendTypeToOptional to MapPropsByKeyToOptional ([f08998c](https://github.com/BlackGlory/hotypes/commit/f08998ccaf3300b5f5b30999b8a48ad0ffeef75f))

### [0.2.3](https://github.com/BlackGlory/hotypes/compare/v0.2.2...v0.2.3) (2021-06-20)


### Features

* add ReplacePropsByType ([adaa1ad](https://github.com/BlackGlory/hotypes/commit/adaa1addee71bf2c22103b2eb7733d3b55b9fbb3))
* add ReplaceType ([34ce004](https://github.com/BlackGlory/hotypes/commit/34ce004da7c91572bdea4457abad7b6a590879c0))

### [0.2.2](https://github.com/BlackGlory/hotypes/compare/v0.2.1...v0.2.2) (2021-05-22)


### Bug Fixes

* script ([aad2e72](https://github.com/BlackGlory/hotypes/commit/aad2e72df701ac1860800a15af1d3a72c4627d8c))

### [0.2.1](https://github.com/BlackGlory/hotypes/compare/v0.2.0...v0.2.1) (2021-05-16)


### Features

* add UnpackedAsyncIterable, UnpackedIterable ([5c6da42](https://github.com/BlackGlory/hotypes/commit/5c6da42daeaf2bea85430828122872b8180036e0))

## [0.2.0](https://github.com/BlackGlory/hotypes/compare/v0.1.9...v0.2.0) (2021-05-07)


### ⚠ BREAKING CHANGES

* rename RequiredKeys => MapPropsByKeyToNonOptional
* rename MapNullablePropsToOptionalProps => MapNullablePropsToOptional
* rename MapPropsExtendTypeToPartial => MapPropsExtendTypeToOptional
* rename PartialKeys => MapPropsExtendTypeToPartial
* rename ConstructorReturnType => ReturnTypeOfConstructor
* rename ExcludeKeysExtendType => KeysExcludeExtendType
* rename ExcludeKeysByType => KeysExcludeByType
* rename GetKeysExtendType => KeysExtendType
* rename GetKeysByType => KeysByType
* rename GetFunctionKeys => FunctionKeys
* rename MapProps => MapPropsExtendType
* rename MapPropsStrict => MapPropsByType
* rename MapNullablePropsToNonNullableProps =>  MapPropsToNonNullable
* rename Keys => GetKeysExtendType
* rename FunctionKeys => GetFunctionKeys
* rename ExcludeNullable => NonNullable
* rename ExcludeKeys => ExcludeKeysExtendType
* rename ExcludeKeysStrict => ExcludeKeysByType
* rename KeysStrict => GetKeysByType

### Bug Fixes

* filenames ([b594e15](https://github.com/BlackGlory/hotypes/commit/b594e159094a0558749b41dc5737a2bd6652a9c6))
* type MapNullablePropsToOptional ([fffdbd8](https://github.com/BlackGlory/hotypes/commit/fffdbd8e52191a5bc9943a09c74fa18f6cca67ce))
* type OptinalKeys ([9c36904](https://github.com/BlackGlory/hotypes/commit/9c36904fe1226386f5a5e7b9a5bed7c75eecb685))


* rename ConstructorReturnType => ReturnTypeOfConstructor ([00336b1](https://github.com/BlackGlory/hotypes/commit/00336b1dcd433a7933940060ae01f2428f47ea53))
* rename ExcludeKeys => ExcludeKeysExtendType ([2e1bb5f](https://github.com/BlackGlory/hotypes/commit/2e1bb5f5464dd113161d191e5372ade393e337b3))
* rename ExcludeKeysByType => KeysExcludeByType ([94fb347](https://github.com/BlackGlory/hotypes/commit/94fb347617ebd5aead336df3682399447ab68ca1))
* rename ExcludeKeysExtendType => KeysExcludeExtendType ([3ece321](https://github.com/BlackGlory/hotypes/commit/3ece32156a506ee4fe35d5c862d7021f89627339))
* rename ExcludeKeysStrict => ExcludeKeysByType ([4a34407](https://github.com/BlackGlory/hotypes/commit/4a3440759c7ffff9939d207fe30a54f5cf19c2ac))
* rename ExcludeNullable => NonNullable ([cfb3b7c](https://github.com/BlackGlory/hotypes/commit/cfb3b7cd7817539dc9280c98b4db04c5dacf86f9))
* rename FunctionKeys => GetFunctionKeys ([4798f98](https://github.com/BlackGlory/hotypes/commit/4798f9849a87f06e0002fe2b74ca128f3d7d6504))
* rename GetFunctionKeys => FunctionKeys ([eedca79](https://github.com/BlackGlory/hotypes/commit/eedca798fff2997d83a4cfd0610c5707f883ea87))
* rename GetKeysByType => KeysByType ([a4d37eb](https://github.com/BlackGlory/hotypes/commit/a4d37eb6f45447954dbe217db9ef487051cf1c57))
* rename GetKeysExtendType => KeysExtendType ([41e277e](https://github.com/BlackGlory/hotypes/commit/41e277eb0b2d740dff0cc84195f1be93c0ff9631))
* rename Keys => GetKeysExtendType ([f7c93ee](https://github.com/BlackGlory/hotypes/commit/f7c93eeafec7efa60f8922692b75934e69662c95))
* rename KeysStrict => GetKeysByType ([6101a08](https://github.com/BlackGlory/hotypes/commit/6101a08a17abb253f2ebaae4cf54712fdf04a627))
* rename MapNullablePropsToNonNullableProps =>  MapPropsToNonNullable ([e371106](https://github.com/BlackGlory/hotypes/commit/e371106ef2f9927516950a3d07d8fabcb2252da1))
* rename MapNullablePropsToOptionalProps => MapNullablePropsToOptional ([5658780](https://github.com/BlackGlory/hotypes/commit/5658780084d08c16ff466095f65500efc13f0150))
* rename MapProps => MapPropsExtendType ([b55a062](https://github.com/BlackGlory/hotypes/commit/b55a062682df5fd555af1fb636a4e86717206105))
* rename MapPropsExtendTypeToPartial => MapPropsExtendTypeToOptional ([c1aa1c1](https://github.com/BlackGlory/hotypes/commit/c1aa1c1223a3ddef924b57c165b977d7bf3a85e1))
* rename MapPropsStrict => MapPropsByType ([c38c31b](https://github.com/BlackGlory/hotypes/commit/c38c31ba7230c67fa57c36be0d89accdf4e7555d))
* rename PartialKeys => MapPropsExtendTypeToPartial ([7b66e82](https://github.com/BlackGlory/hotypes/commit/7b66e8252bd98b01b28ac04f849112c01f13796f))
* rename RequiredKeys => MapPropsByKeyToNonOptional ([9098cf8](https://github.com/BlackGlory/hotypes/commit/9098cf89fb0687d90c4aae59ca86f33b02f6c86d))

### [0.1.9](https://github.com/BlackGlory/hotypes/compare/v0.1.8...v0.1.9) (2021-04-25)


### Features

* add RequiredKeys ([f838f43](https://github.com/BlackGlory/hotypes/commit/f838f43c918ff2a36dcad7b378f2862bab253ca8))

### [0.1.8](https://github.com/BlackGlory/hotypes/compare/v0.1.7...v0.1.8) (2021-04-25)


### Features

* improve PartialKeys ([7c727c5](https://github.com/BlackGlory/hotypes/commit/7c727c550ca7210f28c8be95367a5f2eb5006084))

### [0.1.7](https://github.com/BlackGlory/hotypes/compare/v0.1.6...v0.1.7) (2021-04-25)


### Features

* improve PartialKeys ([ef60fd2](https://github.com/BlackGlory/hotypes/commit/ef60fd2dbaf87a564b28dc5d101918fbb58364d9))

### [0.1.6](https://github.com/BlackGlory/hotypes/compare/v0.1.5...v0.1.6) (2021-04-25)


### Features

* add PartialKeys ([a8deda3](https://github.com/BlackGlory/hotypes/commit/a8deda36bb58fc14ee1cb4f5e1ae90962005ec71))

### [0.1.5](https://github.com/BlackGlory/hotypes/compare/v0.1.4...v0.1.5) (2021-04-20)


### Features

* add Dictionary ([da93343](https://github.com/BlackGlory/hotypes/commit/da9334331ad13848e18e789356838f0ff602b807))

### [0.1.4](https://github.com/BlackGlory/hotypes/compare/v0.1.3...v0.1.4) (2021-03-17)


### Bug Fixes

* fix FunctionKeys ([ecb2c84](https://github.com/BlackGlory/hotypes/commit/ecb2c842b733176b055090bc4a75fddacf2c833f))

### [0.1.3](https://github.com/BlackGlory/hotypes/compare/v0.1.2...v0.1.3) (2021-03-17)


### Features

* add WithDefault ([af164a3](https://github.com/BlackGlory/hotypes/commit/af164a36155ad4d1b28d8877447b8656b8837e40))

### [0.1.2](https://github.com/BlackGlory/hotypes/compare/v0.1.1...v0.1.2) (2021-03-17)


### Bug Fixes

* entry ([a1bd948](https://github.com/BlackGlory/hotypes/commit/a1bd9487205e509b0c7edd7cd000d3b8aabdc159))

### [0.1.1](https://github.com/BlackGlory/hotypes/compare/v0.1.0...v0.1.1) (2021-03-17)


### Bug Fixes

* build ([bc62f15](https://github.com/BlackGlory/hotypes/commit/bc62f1555bfdf7e50b055f2efaaf00cdcf320ba9))

## 0.1.0 (2021-03-17)


### ⚠ BREAKING CHANGES

* remove Json

### Features

* add Last ([4407fb1](https://github.com/BlackGlory/hotypes/commit/4407fb129271419730cb433f2b41770c5b023191))
* add Tail ([757820d](https://github.com/BlackGlory/hotypes/commit/757820d3ec161b6b3f03c4524679344cb0086422))
* init ([197af85](https://github.com/BlackGlory/hotypes/commit/197af85eb8872af8cab36607695c5694e0921216))
* move Json to justypes ([7f408b5](https://github.com/BlackGlory/hotypes/commit/7f408b5766d588c7d7cb57c2d392df4c8831bd69))
* rename First to Head ([dee1531](https://github.com/BlackGlory/hotypes/commit/dee1531036734b39bc4d897a7fcbb46d8d91c3a2))
