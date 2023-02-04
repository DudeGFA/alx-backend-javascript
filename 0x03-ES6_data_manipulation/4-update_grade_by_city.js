export default function updateStudentGradeByCity(StuList, city, newGrades) {
  if (!Array.isArray(StuList) || !Array.isArray(newGrades)) {
    return []
  }

  let filteredArr = StuList.filter((obj) => obj.location === city);
  filteredArr.map((stu) =>
    {student = newGrades.find((Grade) => Grade.studentId === stu.id);
    student != undefined ? stu.grade  = student.grade: stu.grade = 'N/A'
    return stu;
});
  return filteredArr
}
