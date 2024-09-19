const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return 6 when rounding 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 when rounding 1.4 and 4.4', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.4), 5);
    });

    it('should return 7 when rounding 1.6 and 4.6', () => {
        assert.strictEqual(calculateNumber('SUM', 1.6, 4.6), 7);
    });

    it('should return 7 when rounding 1.5 and 4.5', () => {
        assert.strictEqual(calculateNumber('SUM', 1.5, 4.5), 7);
    });

    it('should return 4 when rounding -1.4 and 4.5', () => {
        assert.strictEqual(calculateNumber('SUM', -1.4, 4.5), 4);
    });

    it('should return -3 when rounding 1.4 and -4.5', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, -4.5), -3);
    });

    it('should return -5 when rounding -1.4 and -4.5', () => {
        assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -5);
    });

    it('should return 3 when rounding -1.4 and 4.4', () => {
        assert.strictEqual(calculateNumber('SUM', -1.4, 4.4), 3);
    });

    it('should return -3 when rounding 1.4 and -4.4', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, -4.4), -3);
    });

    it('should return -5 when rounding -1.4 and -4.4', () => {
        assert.strictEqual(calculateNumber('SUM', -1.4, -4.4), -5);
    });

    it('should return 3 when rounding -1.6 and 4.6', () => {
        assert.strictEqual(calculateNumber('SUM', -1.6, 4.6), 3);
    });

    it('should return -3 when rounding 1.6 and -4.6', () => {
        assert.strictEqual(calculateNumber('SUM', 1.6, -4.6), -3);
    });

    it('should return -7 when rounding -1.6 and -4.6', () => {
        assert.strictEqual(calculateNumber('SUM', -1.6, -4.6), -7);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return -4 when rounding 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return -3 when rounding 1.4 and 4.4', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.4), -3);
    });

    it('should return -3 when rounding 1.6 and 4.6', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.6, 4.6), -3);
    });

    it('should return -3 when rounding 1.5 and 4.5', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 4.5), -3);
    });

    it('should return -6 when rounding -1.4 and 4.5', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 4.5), -6);
    });

    it('should return 5 when rounding 1.4 and -4.5', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, -4.5), 5);
    });

    it('should return 3 when rounding -1.4 and -4.5', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
    });

    it('should return -5 when rounding -1.4 and 4.4', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 4.4), -5);
    });

    it('should return 5 when rounding 1.4 and -4.4', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, -4.4), 5);
    });

    it('should return 3 when rounding -1.4 and -4.4', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.4), 3);
    });

    it('should return 3 when rounding -1.6 and 4.6', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -1.6, 4.6), -7);
    });

    it('should return 7 when rounding 1.6 and -4.6', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.6, -4.6), 7);
    });

    it('should return 3 when rounding -1.6 and -4.6', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -1.6, -4.6), 3);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return "Error" when rounding 1.4 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return "Error" when rounding 1.6 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.6, 0), 'Error');
    });

    it('should return "Error" when rounding -1.4 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, 0), 'Error');
    });

    it('should return "Error" when rounding -1.6 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.6, 0), 'Error');
    });

    it('should return 0.2 when rounding 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return -0.2 when rounding -1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, 4.5), -0.2);
    });

    it('should return -0.25 when rounding 1.4 and -4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, -4.5), -0.25);
    });

    it('should return 0.25 when rounding -1.4 and -4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
    });

    it('should return -0.25 when rounding -1.4 and 4.4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, 4.4), -0.25);
    });

    it('should return -0.25 when rounding 1.4 and -4.4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, -4.4), -0.25);
    });

    it('should return 0.4 when rounding -1.6 and -4.6', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.6, -4.6), 0.4);
    });

    it('should return -0.4 when rounding 1.6 and -4.6', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.6, -4.6), -0.4);
    });

    it('should return -0.4 when rounding -1.6 and 4.6', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.6, 4.6), -0.4);
    });
  });
})