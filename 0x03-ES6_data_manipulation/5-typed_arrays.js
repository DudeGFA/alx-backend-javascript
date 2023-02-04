export default function createInt8TypedArray(length, position, value) {
    if (position < 0 || position >= length) {
        throw Error('Position outside range')
    }
    const ArrBuffer = new ArrayBuffer(length);
    const int8view = new Int8Array(ArrBuffer);
    int8view.set(value, position)
    return int8view
}
