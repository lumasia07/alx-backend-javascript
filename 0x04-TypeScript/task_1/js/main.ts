// Defines an interface for object Teacher (Task 1)
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;

};

// Defines an interface for class Director that extends Object Teacher (Task 2)
export interface Director extends Teacher {
  numberOfReports: number;
}

// Defines an interface for return type-string (Task 3)
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function to print Initial for firstName and full Lastname (Task 3)
export const PrintTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Defines a class Student (Task 4)
// Constructur description interface
export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Class decscription interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementing the class
export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

