export default class Airport {
  constructor(name, code) {
    this._name = Airport._validateString(name, 'Name');
    this._code = Airport._validateString(code, 'Code');
  }

  static _validateString(val, attr) {
    if (typeof val !== 'string') {
      throw new TypeError(`${attr} must be a string`);
    }
    return val;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
