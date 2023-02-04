export default function cleanSet(aset, startString) {
    const newset = new Set()
    aset.foreach((item) => item.startsWith(startString) && newset.add(item));
}
