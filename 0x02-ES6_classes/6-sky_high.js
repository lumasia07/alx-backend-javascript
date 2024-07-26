import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = SkyHighBuilding._validateNumber(floors, 'Floors');
  }

  static _validateNumber(val, attr) {
    if (typeof val !== 'number') {
      throw new TypeError(`${attr} must be a number`);
    }
    return val;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
