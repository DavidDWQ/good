var calcArea = require('./squareFunction')
var addFunction = require('./addFunction')
var number = require('./number')
var stats = require('simple-statistics')
var _ = require('lodash')

console.log(calcArea(number))
console.log(addFunction(16,33))


var numbers = [1,2,4,7,9,11,45]
var string = 'hello, my name is David.'


console.log(stats.max(numbers))
console.log(stats.min(numbers))
console.log(stats.median(numbers))
console.log(stats.product(numbers))
console.log(_.reverse(numbers))
console.log(_.escape(string))
console.log(_.camelCase(string))
console.log(_.kebabCase(string))