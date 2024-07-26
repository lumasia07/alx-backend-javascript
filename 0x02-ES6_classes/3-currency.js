export default class Currency {
  constructor(code, name) {
    this._code = Currency._validateString(code, 'Code');
    this._name = Currency._validateString(name, 'Name');
  }

  static _validateString(val, attr) {
    if (typeof val !== 'string') {
      throw new TypeError(`${attr} must be a string`);
    }
    return val;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    this._code = Currency._validateString(val, 'Code');
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
