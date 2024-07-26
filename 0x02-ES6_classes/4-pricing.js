import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = Pricing._validateNumber(amount, 'Amount');
    this._currency = Pricing._validateCurrency(currency, 'Currency');
  }

  static _validateNumber(val, attr) {
    if (typeof val !== 'number') {
      throw new TypeError(`${attr} must be a number`);
    }
    return val;
  }

  static _validateCurrency(val, attr) {
    if (!(val instanceof Currency)) {
      throw new TypeError(`${attr} must be an instance of Currency`);
    }
    return val;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    this._amount = Pricing._validateNumber(val, 'Amount');
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    this._currency = Pricing._validateCurrency(val, 'Currency');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
