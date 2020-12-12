const twitterApp = {
    consumer_key:         process.env.TWITTER_API,
    consumer_secret:      process.env.TWITTER_SECRET_KEY,
    access_token:         process.env.TWITTER_USER_ACCESS,
    access_token_secret:  process.env.TWITTER_USER_SECRET,
    timeout_ms:           60*1000
  }


  module.exports = {
    twitterApp,
    userName: process.env.TWITTER_USERNAME
  }