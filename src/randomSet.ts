import { Random } from "./type";

class RandomSet extends Set {
  data: Set<any>;
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

export default RandomSet;
