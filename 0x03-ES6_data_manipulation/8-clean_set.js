export default function cleanSet(aset, startString) {
    const newset = new Set()
    aset.forEach((item) => item.startsWith(startString) && newset.add(item));
}
