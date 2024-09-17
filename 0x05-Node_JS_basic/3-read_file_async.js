const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        const students = lines.slice(1);

        console.log(`Number of students: ${students.length}`);

        const fieldCounts = {};

        students.forEach((student) => {
          const [firstName, , , field] = student.split(',');
          if (!fieldCounts[field]) {
            fieldCounts[field] = { count: 0, names: [] };
          }
          fieldCounts[field].count += 1;
          fieldCounts[field].names.push(firstName);
        });

        for (const [field, data] of Object.entries(fieldCounts)) {
          console.log(`Number of students in ${field}: ${data.count}. List: ${data.names.join(', ')}`);
        }

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
