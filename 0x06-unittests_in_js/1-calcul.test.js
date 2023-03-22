const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumer()", function() {
    it('testing sum two floats', function() {
        const val = calculateNumber('SUM', 1.0, 3.4);
        assert.strictEqual(val, 4);
    });
    it('testing divide two floats', function() {
        const val = calculateNumber('DIVIDE', 1.0, 4.1);
        assert.strictEqual(val, 0.25);
    });
    it('testing substract two float', function() {
        const val = calculateNumber('SUBTRACT', 1.6, 3.1);
        assert.strictEqual(val, -1);
    });
    it('dividing by 0', function() {
        const val = calculateNumber('DIVIDE', 1.0, 0);
        assert.strictEqual(val, 'Error');
    });
    it('testing DIVIDE -ve numbers', function() {
        const val = calculateNumber('DIVIDE', -4.4, -2.1);
        assert.strictEqual(val, 2.0);
    });
});
