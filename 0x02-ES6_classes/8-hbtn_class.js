export default class HolbertonClass {
  constructor(size, location) {
    if (typeof location !== 'string') {
      throw TypeError('location must be string');
    }
    if (typeof size !== 'number') {
      throw TypeError('size must be number');
    }
    this._location = location;
    this._size = size;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
