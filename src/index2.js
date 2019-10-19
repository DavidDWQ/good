var geolib = require('./geolib')
var bankAccount = require('./account')

console.log(geolib.calcVolumeOfCube)
console.log(bankAccount)
bankAccount.moneyIn(1000)
console.log(bankAccount)
bankAccount.moneyOut(500)
console.log(bankAccount)