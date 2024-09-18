const { readDatabase } = require('../utils');

class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }

  static getAllStudents(request, response) {
    readDatabase(process.env.DB_FILE)
      .then((students) => {
        let output = 'This is the list of our students\n';
        const sortedFields = Object.keys(students).sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );

        for (const field of sortedFields) {
          const count = students[field].length;
          const names = students[field].join(', ');
          output += `Number of students in ${field}: ${count}. List: ${names}\n`;
        }

        response.status(200).send(output.trim());
      })
      .catch((error) => {
        console.error(error);
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    return readDatabase(process.env.DB_FILE)
      .then((students) => {
        if (!students[major]) {
          return response.status(200).send('List: ');
        }

        const names = students[major].join(', ');
        return response.status(200).send(`List: ${names}`);
      })
      .catch((error) => {
        console.error(error);
        return response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = AppController;
