var clients = require("../clients"); // guys we wanna tell about https in hopes of free shit
var sslChecker = require("ssl-checker");
var domain = require("domain-expiry");
const GoDaddy = require('godaddy-api');
var godaddy = GoDaddy(process.env.GO_API_PROD_KEY, process.env.GO_API_PROD_SECRET);
var jsonFormer = require("../godaddy/godaddy");

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

      let json = JSON.stringify(jsonFormer.DomainJsonFormer(query.domain))
      console.log(json)
      if(price < 20) {
        console.log('yes')
        let query2 = {
          "body": json
        }

        // buy it and let me know its a hit
        godaddy.domains.validate(query2).then(function(res){
          console.log(res)
        });
      }else {
        console.log('no')
      }
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
