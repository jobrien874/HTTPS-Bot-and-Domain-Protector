var clients = require("../clients"); // guys we wanna tell about https in hopes of free shit
var sslChecker = require("ssl-checker");
var domain = require("domain-expiry");

exports.SecurityChecker = function () {
  let itemsProcessed = 0;
  let list = clients.clientList();

  list.forEach((element) => {
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
    }).catch(error => {
      console.log(error)
    })
  });
};
