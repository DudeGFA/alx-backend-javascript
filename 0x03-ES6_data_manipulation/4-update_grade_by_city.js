export default function updateStudentGradeByCity(StuList, city, newGrades) {
  if (!Array.isArray(StuList) || !Array.isArray(newGrades)) {
    return [];
  }

  const filteredArr = StuList.filter((obj) => obj.location === city);
  const NewArray = filteredArr.map((stu) => {
    const student = newGrades.find((Grade) => Grade.studentId === stu.id);
    return { ...stu, grade: student ? student.grade : 'N/A' };
  });
  return NewArray;
}
