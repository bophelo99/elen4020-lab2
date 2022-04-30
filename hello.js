'use strict'
const account = {
  Balance: 0,
  TotalDeposit: 0,
  TotalWithdrawal: 0,
  deposit: function (amount) {
    this.Balance += amount
    this.TotalDeposit += amount
  },
  withdraw: function (amount) {
    if (this.Balance > amount) {
      this.Balance -= amount
      this.TotalWithdrawal += amount
    } else { console.log(`insufficient available Balance R ${this.Balance}`) }
  },
  getsummary: function () {
    return console.log(`This account has a balance of R ${this.Balance}. There have been deposits totalling R ${this.TotalDeposit} and withdrawals totalling R ${this.TotalWithdrawal}.`)
  }
}
account.deposit(200)
account.withdraw(50)
account.withdraw(50)
account.deposit(100)
account.getsummary()
