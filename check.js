var clients = require('./clients'); // guys we wanna tell about https in hopes of free shit
var sslChecker = require("ssl-checker")
var mailer = require('./mailer');
var Twit = require('twit')
var twitterConfig = require('./twitter/config');
console.log(twitterConfig.twitterApp)
const Tweeter = new Twit(twitterConfig.twitterApp)

exports.SecurityChecker = function() {
   let hits = 0
  let list = clients.clientList()

   list.forEach(element => {
    console.log(element)
    sslChecker(element.domain, 'GET', 443).then(result => {
      if(result.valid === true) {
        console.log(result)
        let howManySites
        howManySites = result.validFor.length
        hits++
        let https = 'https://' + element.domain
        let message = mailer.messageMaker(https, howManySites)
        console.log(message)
        if(element.email) {
          mailer.sendEmail('jobrien874@gmail.com', message) // switch test email to element.email
        } else {
          // send a direct message
          var params = {event: {type:"message_create", message_create: { target: { recipient_id: "961910653194850304" }, message_data: { text: message}}}} // switch recipient_id to element.twitterID
          Tweeter.post('direct_messages/events/new', params, function(err, data, response) { console.log(data)})
        }
        // send the lads a tweet/email
        console.log('expired!')
      }
    }
    );
  });

  console.log('This many hits today! ' + hits)
}