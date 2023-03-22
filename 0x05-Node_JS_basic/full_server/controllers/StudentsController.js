const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString()).then((students) => {
      const result = ['This is the list of our students'];
      const keys = Object.keys(students).sort();
      for (const key in keys) {
      // console.log(key)
      // console.log(stuCourse[key].length)
        if (key) {
          result.push(`Number of students in ${key}: ${students[key].length}. List: ${students[key].join(', ')}\n`);
        }
      }
      response.status(200).send(result.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;
    readDatabase(process.argv[2].toString()).then((students) => {
      if (!(field in students)) {
        response.status(500).send('Major parameter must be CS or SME');
      } else {
        response.status(200).send(`List: ${students[field].join(', ')}`);
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
