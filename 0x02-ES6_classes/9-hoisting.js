export class HolbertonClass {
  constructor(year, location) {
    this._year = HolbertonClass._validateNumber(year, 'Year');
    this._location = HolbertonClass._validateString(location, 'Location');
  }

  static _validateNumber(val, attr) {
    if (typeof val !== 'number') {
      throw new TypeError(`${attr} must be a number`);
    }
    return val;
  }

  static _validateString(val, attr) {
    if (typeof val !== 'string') {
      throw new TypeError(`${attr} must be a string`);
    }
    return val;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = StudentHolberton._validateString(firstName, 'First Name');
    this._lastName = StudentHolberton._validateString(lastName, 'Last Name');
    this._holbertonClass = StudentHolberton._validateHolbertonClass(holbertonClass, 'Holberton Class');
  }

  static _validateString(val, attr) {
    if (typeof val !== 'string') {
      throw new TypeError(`${attr} must be a string`);
    }
    return val;
  }

  static _validateHolbertonClass(val, attr) {
    if (!(val instanceof HolbertonClass)) {
      throw new TypeError(`${attr} must be an instance of HolbertonClass`);
    }
    return val;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export const listOfStudents = [student1, student2, student3, student4, student5];
