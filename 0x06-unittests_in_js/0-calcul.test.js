const assert = require('assert');
const calculateNumber = require('./0-calcul')


describe('calculateNumber', () => {
  it('should return 4 when rounding 1.4 and 2.5', () => {
    assert.strictEqual(calculateNumber(1.4, 2.5), 4);
  });

  it('should return 3 when rounding 1.4 and 2.4', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('should return 1 when rounding -1.4 and 2.4', () => {
    assert.strictEqual(calculateNumber(-1.4, 2.4), 1);
  });

  it('should return -3 when rounding -1.4 and -2.4', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.4), -3);
  });

  it('should return 5 when rounding 1.6 and 2.6', () => {
    assert.strictEqual(calculateNumber(1.6, 2.6), 5);
  });

  it('should return 1 when rounding -1.6 and 2.6', () => {
    assert.strictEqual(calculateNumber(-1.6, 2.6), 1);
  });

  it('should return -5 when rounding -1.6 and -2.6', () => {
    assert.strictEqual(calculateNumber(-1.6, -2.6), -5);
  });

  it('should return 2 when rounding -1.4 and 2.5', () => {
    assert.strictEqual(calculateNumber(-1.4, 2.5), 2);
  });

  it('should return -3 when rounding -1.4 and -2.5', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.5), -3);
  });
});