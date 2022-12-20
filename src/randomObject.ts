import { Random } from "./type";

class RandomObject extends Object {
  data: Record<string, any>;
  constructor(data) {
    super();
    this.data = data;
  }
  random(): Random {
    const len = Object.keys(this.data).length - 1;
    const idx = Math.round(Math.random() * len);
    return Object.values(this.data)[idx];
  }
}

export default RandomObject;
