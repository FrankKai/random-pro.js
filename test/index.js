const r = require("../dist/cjs");

console.log(r.random([2, 3, 4, 5, 6, 7]));
console.log(r.random({ foo: { hello: "你好" }, bar: false, baz: 3 }));
console.log(
  r.random(
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
  )
);
console.log(r.random(new Set([3, 4, 9, 10, 2, 1])));
