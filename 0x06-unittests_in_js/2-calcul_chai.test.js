const expect = require("chai").expect;
const { it, describe } = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumer()", function() {
    it('testing sum two floats', function() {
        const val = calculateNumber('SUM', 1.0, 3.4);
        expect(val).to.equal(4);
    });
    it('testing divide two floats', function() {
        const val = calculateNumber('DIVIDE', 1.0, 4.1);
        expect(val).to.equal(0.25);
    });
    it('testing substract two float', function() {
        const val = calculateNumber('SUBTRACT', 1.6, 3.1);
        expect(val).to.equal(-1);
    });
    it('dividing by 0', function() {
        const val = calculateNumber('DIVIDE', 1.0, 0);
        expect(val).to.equal('Error');
    });
    it('testing DIVIDE -ve numbers', function() {
        const val = calculateNumber('DIVIDE', -4.4, -2.1);
        expect(val).to.equal(2.0);
    });
});
