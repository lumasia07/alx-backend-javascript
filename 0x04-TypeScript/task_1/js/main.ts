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
interface Director extends Teacher {
  numberOfReports: number;
}

// Defines an interface for return type-string (Task 3)
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function to print Initial for firstName and full Lastname (Tasj 3)
const PrintTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};
