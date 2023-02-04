export default function hasValuesFromArray(aset, Arr) {
  for (value of Arr)
    if (!aset.has(value))
      return false;
}
