# random.js

## 特性
- 随机返回传入数据中的其中一项
- 支持数组，对象，Map，Set

## 在线demo
<!-- https://codesandbox.io/s/musk-clone-x137mv -->

## 安装

```js
yarn add -D random.js
```

## 使用

### 基本使用
```js
import { random } from 'random.js'

random([2, 3, 4, 5, 6, 7]); // => 随机返回
random({ foo: { hello: "你好" }, bar: false, baz: 3 }); // => 随机返回
random(
  new Map([
    ["foo", 1],
    ["bar", 2],
    ["baz", 3],
  ])
); // => 随机返回
random(new Set([3, 4, 9, 10, 2, 1])); // => 随机返回
```


