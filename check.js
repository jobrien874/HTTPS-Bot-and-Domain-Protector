var clients = require("./clients"); // guys we wanna tell about https in hopes of free shit
var sslChecker = require("ssl-checker");
var mailer = require("./mailer");
/* var Twit = require("twit");
var twitterConfig = require("./twitter/config"); */
// const Tweeter = new Twit(twitterConfig.twitterApp);

exports.SecurityChecker = function () {
  var hits = 0;
  let itemsProcessed = 0;
  let list = clients.clientList();

  list.forEach((element) => {
    sslChecker(element.domain, "GET", 443).then((result) => {
      itemsProcessed++;
      if (result.valid === false) {
        let howManySites;
        howManySites = result.validFor.length;
        hits++;
        let https = "https://" + element.domain;
        let message = mailer.messageMaker(https, howManySites);
        if (element.email) {
          mailer.sendEmail(element.email, message); // switch test email to element.email
        } else {
          console.log('usually send a tweet')
          // send a direct message
/*           var params = {event: {type:"message_create", message_create: { target: { recipient_id: element.twitterID }, message_data: { text: message}}}} // switch recipient_id to element.twitterID
          Tweeter.post('direct_messages/events/new', params, function(err, data, response) { console.log(data)}) */
        }
        // send the lads a tweet/email
        console.log("expired!");
      }

      if (itemsProcessed === list.length) {
        console.log("Report Sent! " + hits + " hits!");
        sendReportToMe(hits);
      }
    })
  });

  function sendReportToMe(hits) {
    mailer.sendEmail("jobrien874@gmail.com", "This many hits today! " + hits);
  }
};
