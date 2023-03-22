function calculateNumber(a, b) {
    const round_a = Math.round(a);
    const round_b = Math.round(b);
    const c = round_a + round_b;
    return c;
}

module.exports = calculateNumber;
