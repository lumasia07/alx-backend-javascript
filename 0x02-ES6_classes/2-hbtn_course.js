export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse._validateString(name, 'Name');
    this._length = HolbertonCourse._validateNumber(length, 'Length');
    this._students = HolbertonCourse._validateArray(students, 'Students');
  }

  static _validateString(val, attr) {
    if (typeof val !== 'string') {
      throw new TypeError(`${attr} must be a string`);
    }
    return val;
  }

  static _validateNumber(val, attr) {
    if (typeof val !== 'number') {
      throw new TypeError(`${attr} must be a number`);
    }
    return val;
  }

  static _validateArray(val, attr) {
    if (!Array.isArray(val) || !val.every((x) => typeof x === 'string')) {
      throw new TypeError(`${attr} must be an array of strings`);
    }
    return val;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = HolbertonCourse._validateString(val, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(val) {
    this._length = HolbertonCourse._validateNumber(val, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(val) {
    this._students = HolbertonCourse._validateArray(val, 'Students');
  }
}
