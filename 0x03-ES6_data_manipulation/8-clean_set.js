export default function cleanSet(aset, startString) {
  const newArr = [];
  if (startString === undefined || startString.length === 0) {
    return newArr;
  }
  for (const item of aset) {
    if (item.startsWith(startString)) {
      newArr.push(item.slice(startString.length));
    }
  }
  return newArr.join('-');
}
