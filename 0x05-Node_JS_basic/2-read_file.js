const fs = require('fs');

function countStudents(dbPath) {
  const stuCourse = {};
  let length = 0;
  try {
    const data = fs.readFileSync(dbPath, 'utf-8');
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
