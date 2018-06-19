"use strict";
var greet = require('./1-module.exports')

var a = new greet.counter()
var b = new greet.counter()

a.count()
a.count()
a.count()
a.count()
a.reset()
console.log('----')
b.count()
b.count()
b.count()
b.count()
b.reset()
