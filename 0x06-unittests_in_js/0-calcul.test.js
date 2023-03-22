const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumer()", function() {
    it('testing two ints as args', function() {
        const val = calculateNumber(1, 3);
        assert.strictEqual(val, 4);
    });
    it('testing an int and a float as args', function() {
        const val = calculateNumber(1, 3.1);
        assert.strictEqual(val, 4);
    });
    it('testing two float as args', function() {
        const val = calculateNumber(1.6, 3.1);
        assert.strictEqual(val, 5);
    });
    it('testing 0 as and arg', function() {
        const val = calculateNumber(0, 3.6);
        assert.strictEqual(val, 4);
    });
    it('testing -ve float as an arg', function() {
        const val = calculateNumber(1.4, -3.1);
        assert.strictEqual(val, -2);
    });
});