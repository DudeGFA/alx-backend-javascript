export default function getStudentIdsSum(arr) {
  return arr.reduce((accumulator, obj) => obj.id + accumulator, 0);
}
