import { SupportTypes } from "./type";
import RandomArray from "./randomArray";
import RandomObject from "./randomObject";
import RandomMap from "./randomMap";
import RandomSet from "./randomSet";

const checkType = (value) => {
  return Object.prototype.toString.call(value);
};

export const random = (value: SupportTypes<any, any>): any => {
  const type = checkType(value);
  switch (type) {
    case "[object Array]": {
      const superArray = new RandomArray(value)
      return superArray.random();
    }
    case "[object Object]": {
      const superObject = new RandomObject(value)
      return superObject.random();
    }
    case "[object Map]": {
      const superMap = new RandomMap(value)
      return superMap.random();
    }
    case "[object Set]": {
      const superSet = new RandomSet(value)
      return superSet.random();
    }
  }
};
