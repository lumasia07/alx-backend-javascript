const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;

    case '/students':
      res.write('This is the list of our students\n');
      countStudents(process.argv[2])
        .then((output) => {
          res.end(output);
        })
        .catch((error) => {
          res.end(error.message);
        });
      break;

    default:
      res.end('Not found');
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
