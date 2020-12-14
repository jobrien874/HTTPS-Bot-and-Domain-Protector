var clients = require("../clients"); // guys we wanna tell about https in hopes of free shit
var sslChecker = require("ssl-checker");
var domain = require("domain-expiry");
const GoDaddy = require('godaddy-api');
var godaddy = GoDaddy(process.env.GO_API_PROD_KEY, process.env.GO_API_PROD_SECRET);

exports.SecurityChecker = function () {
/*   let itemsProcessed = 0;
  let list = clients.clientList(); */
  let query = {
    "domain": 'joshobrien.eu',
    "checkType": 'FAST',
    "forTransfer": false
  }

  godaddy.domains.available(query).then(function(res){
    console.log('ScroungerBot V2.0 Running the Domain Expiry Check....');
    console.log(res.body);
    let power = Math.pow(10, 6)
    let price = res.body.price / power;
    console.log(price);
    let result = res.body;
    if(result.available) {
      console.log('Available!');

      if(price < 20) {
        console.log('yes')
      }else {
        console.log('no')
      }
 /*      let query2 = {
        "xShopperId": '328453142'
      }
      // buy it and let me know its a hit
      godaddy.domains.purchase(query2).then(function(res){
        console.log(res.body)
      }); */

      let query3 = {
        "tld": 'com'
      }

      godaddy.domains.schema(query3).then(function(result){
        console.log('check')
        console.log(result.body)
      });
    } else {
      let query2 = {
        "xShopperId": '328453142',
        "body": "body"
      }

      let query3 = {
        "tld": 'joshobrien.org'
      }
      console.log(godaddy.domains.schema(query3));
      godaddy.domains.schema(query3).then(function(res){
        console.log(res)
      });

/*       console.log(godaddy.domains.purchase(query2));
      godaddy.domains.purchase(query2).then(function(res){
        console.log(res)
      }); */
      // let me know its not available and not a hit
    }
  })

/*   list.forEach((element) => {
    sslChecker(element.domain, "GET", 443).then((result) => {
//      console.log(result)
    });

    domain.getExpiry(element.domain)
    .then(p => {
      console.log(p)
      let a = new Date(p)
      let b = new Date()
      if(+b >= +a){
        console.log('yes') // if expired
      }
    })
  }); */
};
