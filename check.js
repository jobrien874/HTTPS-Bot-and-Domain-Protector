var clients = require('./clients'); // guys we wanna tell about https in hopes of free shit
var sslChecker = require("ssl-checker")
var mailer = require('./mailer');
var Twit = require('twit')

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
        //mailer.sendEmail('jobrien874@gmail.com', message) // switch test email to element.email
        } else {
          // send a tweet
          var T = new Twit({
            consumer_key:         '...',
            consumer_secret:      '...',
            access_token:         '...',
            access_token_secret:  '...',
            timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
            strictSSL:            true,     // optional - requires SSL certificates to be valid.
          })

          T.post('statuses/update', { status: 'My First Tweet :)' }, function(err, data, response) {
            console.log(data)
          })
        }
        // send the lads a tweet/email
        console.log('expired!')
      }
    }
    );
  });
}