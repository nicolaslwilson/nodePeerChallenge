var randomNumber = require('./random.js');
var dollarString = require('./dollarString.js');

function balanceAmount () {
  return dollarString(randomNumber(100, 100000));
}

module.exports.balanceAmount = balanceAmount;
module.exports.balanceText = "Account balance: \n";
