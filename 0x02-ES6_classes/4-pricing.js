import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw TypeError('amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw TypeError('currency must be a valid Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amt, conversionRate) {
    return amt * conversionRate;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmt) {
    if (typeof newAmt !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = newAmt;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCur) {
    if (!(newCur instanceof Currency)) {
      throw TypeError('Currency must be a valid currency');
    }
    this._currency = newCur;
  }
}
