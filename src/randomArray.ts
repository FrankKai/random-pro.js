import { Random } from "./type";

class RandomArray extends Array {
  data: Array<any>;
  constructor(data) {
    super();
    this.data = data;
  }
  random(): Random {
    const len = this.data.length - 1;
    const idx = Math.round(Math.random() * len);
    return this.data[idx];
  }
}

export default RandomArray;
