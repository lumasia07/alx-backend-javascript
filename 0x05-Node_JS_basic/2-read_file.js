const fs = require('fs');

function countStudents(path) {
  try {
    // Reads the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Splits data into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Removes the header line
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    // stores students by field
    const fieldCounts = {};

    students.forEach((student) => {
      const [firstName, , , field] = student.split(',');
      if (!fieldCounts[field]) {
        fieldCounts[field] = { count: 0, names: [] };
      }
      fieldCounts[field].count += 1;
      fieldCounts[field].names.push(firstName);
    });

    // Logs the number of students in each field
    for (const [field, data] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${data.count}. List: ${data.names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
