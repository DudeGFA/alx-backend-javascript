const express = require('express');

const app = express();
const port = 1245;

const { readFile } = require('fs');

function countStudents(dbPath) {
  const stuCourse = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(dbPath, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        let result = '';
        const db = data.toString().split('\n');
        // console.log(db)
        for (let i = 1; i < db.length; i += 1) {
          if (db[i]) {
            length += 1;
            const row = db[i].split(',');
            // console.log(row)
            if (Object.keys(stuCourse).includes(row[3])) {
              stuCourse[row[3]].push(row[0]);
            } else {
              stuCourse[row[3]] = new Array(row[0]);
            }
          }
        }
        result += `Number of students: ${length.toString()}\n`;
        for (const key in stuCourse) {
          // console.log(key)
          // console.log(stuCourse[key].length)
          if (key) {
            result += `Number of students in ${key}: ${stuCourse[key].length}. List: ${stuCourse[key].join(', ')}\n`;
          }
        }
        resolve(result);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((output) => {
    res.send(['This is the list of our students', output].join('\n'));
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {
});

module.exports = app;
