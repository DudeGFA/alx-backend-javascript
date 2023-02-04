export default function cleanSet(aset, startString) {
    let newArr = new Array
  if (startString === undefined || startString.length === 0) {
    return newset
  }
  for (const item of aset) {
    if (item.startsWith(startString)) {
        newArr.push(item.slice(startString.length))
    }
  }
  return newset.join("-")
}
