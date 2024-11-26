class Wallet {
  #Balance;
  constructor(Intialbalance = 0) {
    this.#Balance = Intialbalance;
  }
  checkBalance() {
    console.log(`Your current balance is: $${this.#Balance}`);
    return this.#Balance;
  }
  Addmoney(amount) {
    if (amount > 0) {
      return (this.#Balance += amount);
    }
  }
  SubMoney(amount) {
    if (amount > 0 && amount <= this.#Balance) {
      return (this.#Balance -= amount);
    }
  }
}

export const Account = new Wallet();
