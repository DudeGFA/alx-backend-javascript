const http = require('http');

const { readFile } = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

function countStudents(dbPath) {
  const stuCourse = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(dbPath, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
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
        console.log(`Number of students: ${length.toString()}`);
        for (const key in stuCourse) {
          // console.log(key)
          // console.log(stuCourse[key].length)
          if (key) {
            console.log(`Number of students in ${key}: ${stuCourse[key].length}. List: ${stuCourse[key].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
}

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      response.end(output.slice(0, -1));
    }).catch(() => {
      response.statusCode = 404;
      response.end('Cannot load the database');
    });
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;
