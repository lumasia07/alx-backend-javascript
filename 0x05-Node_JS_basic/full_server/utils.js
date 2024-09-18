const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const result = {};

    for (const line of lines) {
      const [firstname, field] = line.split(',');
      if (!result[field]) {
        result[field] = [];
      }
      result[field].push(firstname);
    }

    return result;
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = {
  readDatabase,
};
