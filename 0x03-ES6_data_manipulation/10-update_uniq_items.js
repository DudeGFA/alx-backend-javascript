export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) {
    throw Error('Cannot process')
  }
  for (const key in items.keys()) {
    if (items.get(key) === 1) {
      items.set(key, 100);
    }
  }
  return items;
}
