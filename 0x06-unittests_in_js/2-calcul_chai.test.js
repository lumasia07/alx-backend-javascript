const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return 6 when rounding 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 when rounding 1.4 and 4.4', () => {
      expect(calculateNumber('SUM', 1.4, 4.4)).to.equal(5);
    });

    it('should return 7 when rounding 1.6 and 4.6', () => {
      expect(calculateNumber('SUM', 1.6, 4.6)).to.equal(7);
    });

    it('should return 7 when rounding 1.5 and 4.5', () => {
      expect(calculateNumber('SUM', 1.5, 4.5)).to.equal(7);
    });

    it('should return 4 when rounding -1.4 and 4.5', () => {
      expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(4);
    });

    it('should return -3 when rounding 1.4 and -4.5', () => {
      expect(calculateNumber('SUM', 1.4, -4.5)).to.equal(-3);
    });

    it('should return -5 when rounding -1.4 and -4.5', () => {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
    });

    it('should return 3 when rounding -1.4 and 4.4', () => {
      expect(calculateNumber('SUM', -1.4, 4.4)).to.equal(3);
    });

    it('should return -3 when rounding 1.4 and -4.4', () => {
      expect(calculateNumber('SUM', 1.4, -4.4)).to.equal(-3);
    });

    it('should return -5 when rounding -1.4 and -4.4', () => {
      expect(calculateNumber('SUM', -1.4, -4.4)).to.equal(-5);
    });

    it('should return 3 when rounding -1.6 and 4.6', () => {
      expect(calculateNumber('SUM', -1.6, 4.6)).to.equal(3);
    });

    it('should return -3 when rounding 1.6 and -4.6', () => {
      expect(calculateNumber('SUM', 1.6, -4.6)).to.equal(-3);
    });

    it('should return -7 when rounding -1.6 and -4.6', () => {
      expect(calculateNumber('SUM', -1.6, -4.6)).to.equal(-7);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return -4 when rounding 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return -3 when rounding 1.4 and 4.4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.4)).to.equal(-3);
    });

    it('should return -3 when rounding 1.6 and 4.6', () => {
      expect(calculateNumber('SUBTRACT', 1.6, 4.6)).to.equal(-3);
    });

    it('should return -3 when rounding 1.5 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 4.5)).to.equal(-3);
    });

    it('should return -6 when rounding -1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
    });

    it('should return 5 when rounding 1.4 and -4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, -4.5)).to.equal(5);
    });

    it('should return 3 when rounding -1.4 and -4.5', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });

    it('should return -5 when rounding -1.4 and 4.4', () => {
      expect(calculateNumber('SUBTRACT', -1.4, 4.4)).to.equal(-5);
    });

    it('should return 5 when rounding 1.4 and -4.4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, -4.4)).to.equal(5);
    });

    it('should return 3 when rounding -1.4 and -4.4', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -4.4)).to.equal(3);
    });

    it('should return -7 when rounding -1.6 and 4.6', () => {
      expect(calculateNumber('SUBTRACT', -1.6, 4.6)).to.equal(-7);
    });

    it('should return 7 when rounding 1.6 and -4.6', () => {
      expect(calculateNumber('SUBTRACT', 1.6, -4.6)).to.equal(7);
    });

    it('should return 3 when rounding -1.6 and -4.6', () => {
      expect(calculateNumber('SUBTRACT', -1.6, -4.6)).to.equal(3);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return "Error" when rounding 1.4 and 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return "Error" when rounding 1.6 and 0', () => {
      expect(calculateNumber('DIVIDE', 1.6, 0)).to.equal('Error');
    });

    it('should return "Error" when rounding -1.4 and 0', () => {
      expect(calculateNumber('DIVIDE', -1.4, 0)).to.equal('Error');
    });

    it('should return "Error" when rounding -1.6 and 0', () => {
      expect(calculateNumber('DIVIDE', -1.6, 0)).to.equal('Error');
    });

    it('should return 0.2 when rounding 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return -0.2 when rounding -1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2);
    });

    it('should return -0.25 when rounding 1.4 and -4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, -4.5)).to.equal(-0.25);
    });

    it('should return 0.25 when rounding -1.4 and -4.5', () => {
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25);
    });

    it('should return -0.25 when rounding -1.4 and 4.4', () => {
      expect(calculateNumber('DIVIDE', -1.4, 4.4)).to.equal(-0.25);
    });

    it('should return -0.25 when rounding 1.4 and -4.4', () => {
      expect(calculateNumber('DIVIDE', 1.4, -4.4)).to.equal(-0.25);
    });

    it('should return 0.4 when rounding -1.6 and -4.6', () => {
      expect(calculateNumber('DIVIDE', -1.6, -4.6)).to.equal(0.4);
    });

    it('should return -0.4 when rounding 1.6 and -4.6', () => {
      expect(calculateNumber('DIVIDE', 1.6, -4.6)).to.equal(-0.4);
    });

    it('should return -0.4 when rounding -1.6 and 4.6', () => {
      expect(calculateNumber('DIVIDE', -1.6, 4.6)).to.equal(-0.4);
    });
  });
});
