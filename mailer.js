var nodemailer = require('nodemailer');

  exports.sendEmail = function(email, message) {
      console.log(process.env.EMAIL_ADDRESS)
    var transporter = nodemailer.createTransport({
        service: process.env.EMAIL_NAME,
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.EMAIL_PASS,
        }
      });

      var mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: email,
        subject: 'HTTPS Issue',
        text: message
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

exports.messageMaker = function(domain, numberOfSites) {
    let messageList
    if(numberOfSites){
    messageList = [
        {
            "message": `Hey guys I am a web dev just giving you a heads up it looks like your HTTPS certificate is expired :) ${domain} looks like theirs ${numberOfSites} of your sites that need that sorting there, Kind Regards, Josh`
        },
        {
            "message": `Hi my names Josh I am a web dev, just letting you know it looks like your HTTPS certificate has expired :) ${domain} looks like theirs ${numberOfSites} of your sites that are effected there, Regards, Josh`
        },
        {
            "message": `Hey I am a web dev, just letting you guys know that it looks like your HTTPS certificate has expired, this is a bit of security breach so I'd just make to sure that as soon as you can. ${domain} looks like theirs ${numberOfSites} of your sites that are effected there, Kind Regards, Josh`
        },
        {
            "message": `Hi my names Josh I am a web dev, just letting you know it looks like your HTTPS certificate has expired :) ${domain} looks like theirs ${numberOfSites} of your sites that need that sorting there, Regards, Josh`
        }
    ]
    } else {
    messageList = [
            {
                "message": `Hey guys I am a web dev just giving you a heads up it looks like your HTTPS certificate is expired :) ${domain} Kind Regards, Josh`
            },
            {
                "message": `Hi my names Josh I am a web dev, just letting you know it looks like your HTTPS certificate has expired :) ${domain}, Regards, Josh`
            },
            {
                "message": `Hey I am a web dev, just letting you guys know that it looks like your HTTPS certificate has expired, this is a bit of security breach so I'd just make to sure that you sort it as soon as you can. ${domain} Kind Regards, Josh`
            },
            {
                "message": `Hi my names Josh I am a web dev, just letting you know it looks like your HTTPS certificate has expired :) ${domain} Regards, Josh`
            }
        ]
    }
    let randomMessage = Math.floor(Math.random() * 3)
    return messageList[randomMessage].message
}