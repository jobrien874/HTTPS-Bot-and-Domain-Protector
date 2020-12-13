var clients = require("../clients"); // guys we wanna tell about https in hopes of free shit
var sslChecker = require("ssl-checker");

exports.SecurityChecker = function () {
  let itemsProcessed = 0;
  let list = clients.clientList();

  list.forEach((element) => {
    sslChecker(element.domain, "GET", 443).then((result) => {
      console.log(result)
    });
  });
};
