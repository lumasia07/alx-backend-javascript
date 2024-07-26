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

  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
