[中文简体](./README-zh.md)

# random-pro.js

## Feature
- Randomly return one of the incoming data
- Support Array, Object, Map, Set

## Online demo
https://codesandbox.io/s/random-pro-js-5hsk94?file=/src/demo.js

## Install

```js
yarn add -D random-pro.js
```

## Usage

```js
import { random } from 'random-pro.js'

random([2, 3, 4, 5, 6, 7]); // => random return
random({ foo: { hello: "你好" }, bar: false, baz: 3 }); // => random return
random(
  new Map([
    ["foo", 1],
    ["bar", 2],
    [
      "baz",
      {
        nest: {
          foo: 1,
          bar: [3, 2, 4, 1],
        },
      },
    ],
  ])
); // => random return
random(new Set([3, 4, 9, 10, 2, 1])); // => random return
```


