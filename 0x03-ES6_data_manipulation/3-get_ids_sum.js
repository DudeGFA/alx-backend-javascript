export default function getStudentIdsSum (arr) {
    arr.reduce((accumulator, obj) => obj.id + accumulator, 0,);
}