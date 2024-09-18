import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

process.env.DB_FILE = process.argv[2] || './database.csv';

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
