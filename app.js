var http = require  ('http');
var balance = require ('./accountBalance.js');

http.createServer(function(request, response){
  response.writeHead(200);
  console.log(balance);
  response.write(balance.balanceText + balance.balanceAmount() + "\n");
  response.end();
}).listen(8000);
