var account = {
    userId: 510107200402060134,
    cardId: 123456789,
    moneyLimit: 20000,
    balance: 0,
    canMasterCard: true,
    canVisa: true,
    canUnionPay: true,
    moneyIn: function (amount) {
        var presentCurrent = this.balance + amount
        console.log('Your New Balance  ' + presentCurrent)
        this.balance = presentCurrent
        return presentCurrent
    },
    moneyOut: function (amount) {
        if (amount > this.balance) {
            console.log('Not enough money!!!')
        } else {
            var newBalance = this.balance - amount
            console.log('You have spent  ' + amount)
            this.balance = newBalance
            return newBalance
        }

    }








}



//console.log(account)
//account.moneyIn(10000000)
//account.moneyOut(2000)
//console.log(account)

module.exports = account