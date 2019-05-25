var figlet = require('figlet');
var chalk = require('chalk')
var module = require('./command')
var clear = require('clear');
clear();

console.log(figlet.textSync('My Calculator ', {
    font: 'Basic',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));

console.log(module.operation());
