export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
      return [];
  }
  const newArray = arr.map((obj) => obj.id);
  return newArray;
}
