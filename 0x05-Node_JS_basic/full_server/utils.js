const { readFile } = require('fs');

function readDatabase(dbPath) {
  const stuCourse = {};
  return new Promise((resolve, reject) => {
    readFile(dbPath, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const db = data.toString().split('\n');
        // console.log(db)
        for (let i = 1; i < db.length; i += 1) {
          if (db[i]) {
            const row = db[i].split(',');
            // console.log(row)
            if (Object.keys(stuCourse).includes(row[3])) {
              stuCourse[row[3]].push(row[0]);
            } else {
              stuCourse[row[3]] = new Array(row[0]);
            }
          }
        }
        resolve(stuCourse);
      }
    });
  });
}

module.exports = readDatabase;
