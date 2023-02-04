export default function cleanSet(aset, startString) {
    const newset = ''
  if (startString === '' || !isinstance(startString, String)) {
    return newset
  }
  for (const item of aset) {
    if (item.startsWith(startString)) {
        newset += item.slice(startString.length)
    }
  }
  return newset
}
