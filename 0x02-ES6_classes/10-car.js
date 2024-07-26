export default class Car {
  constructor(brand, motor, color) {
    this._brand = Car._validateString(brand, 'Brand');
    this._motor = Car._validateString(motor, 'Motor');
    this._color = Car._validateString(color, 'Color');
  }

  static _validateString(val, attr) {
    if (typeof val !== 'string') {
      throw new TypeError(`${attr} must be a string`);
    }
    return val;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const clonedCar = Object.create(Object.getPrototypeOf(this));
    Object.getOwnPropertyNames(this).forEach(prop => {
      clonedCar[prop] = this[prop];
    });
    return clonedCar;
  }
}