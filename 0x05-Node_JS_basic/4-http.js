const http = require('http');

const port = 1245;

// Creates an HTTP server
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
