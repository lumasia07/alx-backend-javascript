const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi with stub', function() {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(function() {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with "SUM", 100, and 20 and log correct message', function() {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});
