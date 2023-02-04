export default function createInt8TypedArray(length, position, value) {
    if (position < 0 || position >= length) {
        throw Error('Position outside range')
    }
    const ArrBuffer = new ArrayBuffer(length);
    const int8view = new Int8Array(ArrBuffer, 0, length);
    int8view.set(value, position);
    return new DataView(int8view);
}
