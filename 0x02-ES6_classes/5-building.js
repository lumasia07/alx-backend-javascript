export default class Building {
  constructor(sqft) {
    this._sqft = Building._validateNumber(sqft, 'Sqft');
  }

  static _validateNumber(val, attr) {
    if (typeof val !== 'number') {
      throw new TypeError(`${attr} must be a number`);
    }
    return val;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    this._sqft = Building._validateNumber(val, 'Sqft');
  }

  evacuationWarningMessage() {
    console.log(this._sqft);
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
