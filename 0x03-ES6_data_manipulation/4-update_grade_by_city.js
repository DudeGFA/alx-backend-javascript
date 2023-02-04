export default function updateStudentGradeByCity(StuList, city, newGrades) {
    let filteredArr = StuList.filter((obj) => obj.location === city);
    filteredArr.map((stu) => stu.grade = newGrades.filter((Grade) => Grade.studentId === stu.id).grade);
    return filteredArr
}
