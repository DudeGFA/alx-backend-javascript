export default function hasValuesFromArray(aset, Arr) {
  for (const value of Arr)
    if (!aset.has(value)) {
      return false;
    }
    return true;
}
