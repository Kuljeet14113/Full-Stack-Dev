const util = require('util')

let description ="My name is %s and age is %d"
result=util.format(description,"Kuljeet",20)
console.log(result);
