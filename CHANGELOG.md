## [2.0.0](https://github.com/flex-development/is-builtin/compare/1.0.1...2.0.0) (2023-01-29)


### ⚠ BREAKING CHANGES

* replace default export with named export

### :package: Build

* **nvm:** require `node>=14.21.2` ([1df5292](https://github.com/flex-development/is-builtin/commit/1df5292475972cdade22f894012af7f0fe28d704))


### :robot: Continuous Integration

* [[@dependabot](https://github.com/dependabot)] fix npm package-ecosystem x yarn integration ([8b784c5](https://github.com/flex-development/is-builtin/commit/8b784c5a66ec70ee57c9d820d3629fadf5c7a441))
* **deps:** Bump actions/add-to-project from 0.3.0 to 0.4.0 ([#10](https://github.com/flex-development/is-builtin/issues/10)) ([4808c79](https://github.com/flex-development/is-builtin/commit/4808c79a581a5cc8b987bd0612ee2ed20fee71d9))
* **deps:** Bump actions/checkout from 3.1.0 to 3.2.0 ([#13](https://github.com/flex-development/is-builtin/issues/13)) ([40383cb](https://github.com/flex-development/is-builtin/commit/40383cb2184e89dc6dfae3fe70d5c0c5bc031f64))
* **deps:** Bump actions/checkout from 3.2.0 to 3.3.0 ([#15](https://github.com/flex-development/is-builtin/issues/15)) ([41e350d](https://github.com/flex-development/is-builtin/commit/41e350d75642a8e2cf1e3e0a51bd5eb1b3d96b92))
* **deps:** bump actions/github-script from 6.3.1 to 6.3.3 ([#7](https://github.com/flex-development/is-builtin/issues/7)) ([57f0924](https://github.com/flex-development/is-builtin/commit/57f09241134a953709f925809e81875657874e4c))
* **deps:** Bump actions/github-script from 6.3.3 to 6.4.0 ([#17](https://github.com/flex-development/is-builtin/issues/17)) ([0822617](https://github.com/flex-development/is-builtin/commit/082261732896849be69069e4a0418fcabbc327e6))
* **deps:** bump actions/setup-node from 3.5.0 to 3.5.1 ([#6](https://github.com/flex-development/is-builtin/issues/6)) ([fba86c2](https://github.com/flex-development/is-builtin/commit/fba86c291e5126c05eeafa11d519259b4e327942))
* **deps:** Bump actions/setup-node from 3.5.1 to 3.6.0 ([#14](https://github.com/flex-development/is-builtin/issues/14)) ([4c6f667](https://github.com/flex-development/is-builtin/commit/4c6f667f7d7fb787ae5db33638243c94857a0acf))
* **deps:** Bump crazy-max/ghaction-import-gpg from 5.1.0 to 5.2.0 ([#8](https://github.com/flex-development/is-builtin/issues/8)) ([86e65de](https://github.com/flex-development/is-builtin/commit/86e65dea223881c9f066a9c28727183c796aa791))
* **deps:** Bump dependabot/fetch-metadata from 1.3.4 to 1.3.6 ([#16](https://github.com/flex-development/is-builtin/issues/16)) ([2787568](https://github.com/flex-development/is-builtin/commit/2787568d4ada8b7d978a3ffb2dc1243af02c3525))
* **deps:** bump dessant/lock-threads from 3.0.0 to 4.0.0 ([bd3aa5b](https://github.com/flex-development/is-builtin/commit/bd3aa5b345085579fbea5cdf629f03b6435c6859)), closes [#12](https://github.com/flex-development/is-builtin/issues/12)
* **deps:** Bump flex-development/dist-tag-action from 1.1.1 to 1.1.2 ([#11](https://github.com/flex-development/is-builtin/issues/11)) ([d3d7888](https://github.com/flex-development/is-builtin/commit/d3d7888848e810fa41389538015e21b4c8052f58))
* **deps:** bump hmarr/debug-action from 2.0.1 to 2.1.0 ([#5](https://github.com/flex-development/is-builtin/issues/5)) ([6a2284b](https://github.com/flex-development/is-builtin/commit/6a2284b6d6d22d7843b0849fe5661592be7bfb66))
* **deps:** bump octokit/graphql-action from 2.2.22 to 2.2.23 ([#4](https://github.com/flex-development/is-builtin/issues/4)) ([299d4d2](https://github.com/flex-development/is-builtin/commit/299d4d23342e2d314333164b9c1b393af1178605))
* **workflows:** [`add-to-project`] add items from repo admin account ([8dff1df](https://github.com/flex-development/is-builtin/commit/8dff1dfe6b324c99635fe7c7883396b9eb73eab1))
* **workflows:** [`add-to-project`] run workflow when pr is synchronized ([d984add](https://github.com/flex-development/is-builtin/commit/d984add90cf9ab7ea441af701d0428f0fed098f2))
* **workflows:** [`approve-pr`] refactor approval step conditional ([c2f89b6](https://github.com/flex-development/is-builtin/commit/c2f89b604ad36cf1d1758694df2ee0e48d2c8b8a))
* **workflows:** [`ci`] split ci job into multiple jobs ([6816a7d](https://github.com/flex-development/is-builtin/commit/6816a7df8e15550bcef8d7f66d123fa8af9a9b01))
* **workflows:** [`dependabot-auto`] sign lockfile fix commit ([1cc4353](https://github.com/flex-development/is-builtin/commit/1cc4353a9fde91b6507407e9acdf15f45bad3517))
* **workflows:** [`integrity`] update `pull_request` event activity types ([19d1d88](https://github.com/flex-development/is-builtin/commit/19d1d880ca2dbe36e7396dc2ef05506abf8d9112))
* **workflows:** [`release`] publish releases from repo admin account ([3668003](https://github.com/flex-development/is-builtin/commit/3668003112cc81ec6be1fd67c542cc45948326ef))
* **workflows:** add `typescript-canary` ([9647930](https://github.com/flex-development/is-builtin/commit/9647930aa60c73d83bb114fb8aa28de0c50177b0))
* **workflows:** use environment files ([cecbdc4](https://github.com/flex-development/is-builtin/commit/cecbdc48a4ffe567847d27516ce4a445c39ed900))


### :pencil: Documentation

* add "contributor covenant code of conduct" ([b133760](https://github.com/flex-development/is-builtin/commit/b133760e61d633c184f71a374d9cddd3604692be))
* add usage example with `URL` instance ([e7f5a05](https://github.com/flex-development/is-builtin/commit/e7f5a05ec18cc64a6399c9524d99694291ec9e24))
* api ([5f7573c](https://github.com/flex-development/is-builtin/commit/5f7573c43bb409f19981ab503e809c6f4da41ad6))


### :sparkles: Features

* **internal:** `BUILTIN_MODULES` ([667d9ab](https://github.com/flex-development/is-builtin/commit/667d9ab1aa2f463009a8eacd3c793f61ffc72a14))
* **ponyfill:** [`isBuiltin`] allow `URL` instances ([6f078fa](https://github.com/flex-development/is-builtin/commit/6f078fa0e7241e22517965bd9417a8a50565d3aa))


### :bug: Fixes

* **install:** [git] make `postinstall` script work with git install ([593ae86](https://github.com/flex-development/is-builtin/commit/593ae86c4c6c29b5edd650a6a32d2c9f9cbcf0e1))


### :house_with_garden: Housekeeping

* update project architecture ([8849a0f](https://github.com/flex-development/is-builtin/commit/8849a0f1382390524aac51c26e006571fad98457))
* **github:** add "package manager" dropdown to bug report template ([3d4b650](https://github.com/flex-development/is-builtin/commit/3d4b650c282da4a4929ada16f44b73f6cb13caae))
* **github:** add "typescript version" input to bug report template ([7cd2bab](https://github.com/flex-development/is-builtin/commit/7cd2bab1ca85a6d50128339ec64cd26ee2da3ca4))
* **github:** add commit scope `install` ([e90107e](https://github.com/flex-development/is-builtin/commit/e90107eab7e2a23e882d7fe44933a8bf8d3345d1))
* **github:** add commit scope `internal` ([f10c4f6](https://github.com/flex-development/is-builtin/commit/f10c4f64af60b7ff5f1fac7b503c430ff87d7324))
* **github:** add commit scope `nvm` ([fe8577e](https://github.com/flex-development/is-builtin/commit/fe8577e289675a3d624ab358452acd5bc1b30d1a))
* **github:** add label `scope:builtins` ([310841a](https://github.com/flex-development/is-builtin/commit/310841ae2906eb361f170ad518b4a61b98860d63))
* **github:** add label `scope:install` ([f87e552](https://github.com/flex-development/is-builtin/commit/f87e5527ae1a3a2abbc91463b001fd697f2e23b8))
* **github:** add label `status:triaged` ([ac37bdc](https://github.com/flex-development/is-builtin/commit/ac37bdcc73feb993a9f23d3f6a2a9b3041cfccea))
* **github:** configure sponsor button ([3dec504](https://github.com/flex-development/is-builtin/commit/3dec5043715779b015379a068e9b68af536573e5))
* **github:** remove "tests" section from pull request template ([f9ca6d2](https://github.com/flex-development/is-builtin/commit/f9ca6d214aeeff4ae0baef36ccf1c46490846769))
* **tests:** codecov integration ([3ea1ba9](https://github.com/flex-development/is-builtin/commit/3ea1ba9b8c1ed6ed32400cda1431f8db013086d7))


### :zap: Refactors

* replace default export with named export ([d3c1843](https://github.com/flex-development/is-builtin/commit/d3c1843b9ff6aa970f99796b4da2ec58fa99a1bb))
* **ponyfill:** [`isBuiltin`] use `BUILTIN_MODULES` ([e2aa8fb](https://github.com/flex-development/is-builtin/commit/e2aa8fb5dadbcafbea8920481231b1d47f31ee63))

## [1.0.1](https://github.com/flex-development/is-builtin/compare/1.0.0...1.0.1) (2022-10-08)


### :package: Build

* cleanup build target settings ([3098a0c](https://github.com/flex-development/is-builtin/commit/3098a0c9b942e333c5f7e60b60d60675cebd6bc2))
* distribute source maps ([37d5864](https://github.com/flex-development/is-builtin/commit/37d58646e4fd4b5d78cc6d8c729a091f571431b1))


### :bug: Fixes

* **ts:** `Cannot find module '@flex-development/is-builtin' or its corresponding type declarations` ([a5b4f9c](https://github.com/flex-development/is-builtin/commit/a5b4f9c0ca0c5b137a5d7b78fe72c06585ca5d64))

## 1.0.0 (2022-10-08)


### :robot: Continuous Integration

* add [@dependabot](https://github.com/dependabot) config ([9150e11](https://github.com/flex-development/is-builtin/commit/9150e11102c81537eeb3f6ee0b4339301207ddc9))


### :sparkles: Features

* **ponyfill:** `isBuiltin` ([9b95594](https://github.com/flex-development/is-builtin/commit/9b95594a96b377ec6f883ce31cc082e29c5731c4))


### :house_with_garden: Housekeeping

* **github:** replace commit scope `builtin` with `ponyfill` ([50f7a55](https://github.com/flex-development/is-builtin/commit/50f7a559e4ed405139cb4372fdc7c34ec52aaa49))
* **github:** replace label `scope:builtin` with `scope:ponyfill` ([0ccc28a](https://github.com/flex-development/is-builtin/commit/0ccc28ad24ebdcf44fcb7c56a0dc968ee94b0900))

