# localStorage-node
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/vigzmv/localStorage-node/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/polyfill-localstorage-node.svg?style=flat)](https://www.npmjs.com/package/polyfill-localstorage-node)

in memory localStorage polyfill for node.js utilizing ES6 proxies.

## Installation

```sh
npm i polyfill-localstorage-node -D
```

## Tests

```sh
npm run test
```

## Usage

```js
require('polyfill-localstorage-node')

// or

import 'polyfill-localstorage-node'
global.localStorage // now has your in memory localStorage
```

For API doc, refer to MDN.

Direct assignment works, thanks to ES6 proxies

```js
localStorage.c = 1
```
