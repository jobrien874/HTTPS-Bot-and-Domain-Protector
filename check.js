var clients = require("./clients"); // guys we wanna tell about https in hopes of free shit
var sslChecker = require("ssl-checker");
var mailer = require("./mailer");
/* var Twit = require("twit");
var twitterConfig = require("./twitter/config"); */
// const Tweeter = new Twit(twitterConfig.twitterApp);

exports.SecurityChecker = function () {
  console.log("ScroungerBot V2.0 Initialising ...");
  var hits = 0;
  let itemsProcessed = 0;
  let list = clients.clientList();
  let reportMessage = "Report Sent! " + hits + " hits!";

  list.forEach((element) => {
    sslChecker(element.domain, "GET", 443).then((result) => {
      itemsProcessed++;
      let endResult;
      if (result.valid === false) {
        if (result.daysRemaining <= 0) {
          let howManySites;
          howManySites = result.validFor.length;
          hits++;
          let https = "https://" + element.domain;
          let message = mailer.messageMaker(https, howManySites);
          if (element.email) {
            mailer.sendEmail(element.email, message); // switch test email to element.email
          } else {
            console.log("usually send a tweet or no email");
            // send a direct message
            /*           var params = {event: {type:"message_create", message_create: { target: { recipient_id: element.twitterID }, message_data: { text: message}}}} // switch recipient_id to element.twitterID
          Tweeter.post('direct_messages/events/new', params, function(err, data, response) { console.log(data)}) */
          }
          // send the lads a tweet/email
          endResult = "HTTPS Expired";
        } else {
          console.log("False Negative Result " + element.domain);
        }
      } else {
        endResult = "HTTPS Not Expired";
      }

      let logMessage =
        "\n" +
        "ScroungerBot V2.0 - HTTPS Processed for " +
        itemsProcessed +
        " Site is " +
        element.name +
        " Result:" +
        endResult +
        "\n";

      reportMessage += logMessage;

      console.log(logMessage);

      if (itemsProcessed === list.length) {
        console.log("This many hits today! " + hits);
        sendReportToMe(reportMessage);
      }
    });
  });

  function sendReportToMe(reportMessage) {
    mailer.sendEmail(
      process.env.EMAIL_ADDRESS3,
      reportMessage
    );
  }
};
