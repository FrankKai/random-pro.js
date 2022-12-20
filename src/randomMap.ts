import { Random } from "./type";

class RandomMap extends Map {
  data: Map<any, any>;
  constructor(data) {
    super();
    this.data = data;
  }
  random(): Random {
    const len = this.data.size - 1;
    const idx = Math.round(Math.random() * len);
    return [...this.data.values()][idx];
  }
}

export default RandomMap;
