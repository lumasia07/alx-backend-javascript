// Interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creation of two students

const StudentOne: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "Jozi"
}

const studentTwo: Student = {
    firstName: "Jane",
    lastName: "Marie",
    age: 22,
    location: "LA"
}

// Array containing the two students

const studentList: Student[] = [StudentOne, studentTwo];

// Render object in a table using Vanilla JS

const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td')
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement('td')
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);

console.log(table);
console.log(tableBody);