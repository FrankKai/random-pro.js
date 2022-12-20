[English](./README.md)

# random-pro.js
## 特性
- 随机返回传入数据中的其中一项
- 支持数组，对象，Map，Set

## 在线demo
https://codesandbox.io/s/random-pro-js-5hsk94?file=/src/demo.js

## 安装

```js
yarn add -D random-pro.js
```

## 使用

```js
import { random } from 'random-pro.js'

random([2, 3, 4, 5, 6, 7]); // => 随机返回
random({ foo: { hello: "你好" }, bar: false, baz: 3 }); // => 随机返回
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
); // => 随机返回
random(new Set([3, 4, 9, 10, 2, 1])); // => 随机返回
```


