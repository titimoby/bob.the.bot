"use strict";

const stools = require('./tools/stools.js');

const show = stools.show
const Maybe = stools.Maybe;
const Validation = stools.Validation;

module.exports =  (robot) =>  {
  console.log("🐨", "feature.yelp", "loaded")

  let yelpConsumerKey = Maybe.fromNullable(process.env.yelp_consumer_key);
  let yelpConsumerSecret = Maybe.fromNullable(process.env.yelp_consumer_secret);
  let yelpToken = Maybe.fromNullable(process.env.yelp_token);
  let yelpTokenSecret = Maybe.fromNullable(process.env.yelp_token_secret);

  let validateYelpConsumerKey = (maybe) => {
    return maybe.isSome()
      ? Validation.Success(maybe.value)
      : Validation.Fail(["😠 no yelp consumer key"])
  }

  let validateYelpConsumerSecret = (maybe) => {
    return maybe.isSome()
      ? Validation.Success(maybe.value)
      : Validation.Fail(["😡 no yelp consumer secret"])
  }

  let validateYelpToken = (maybe) => {
    return maybe.isSome()
      ? Validation.Success(maybe.value)
      : Validation.Fail(["☹️ no yelp token"])
  }

  let validateYelpTokenSecret = (maybe) => {
    return maybe.isSome()
      ? Validation.Success(maybe.value)
      : monet.Validation.Fail(["😩 no yelp token secret"])
  }

  let yelpValidation = Validation.of(
    yelpConsumerKey =>
      yelpConsumerSecret =>
        yelpToken =>
          yelpTokenSecret => {
            return {yelpConsumerKey, yelpConsumerSecret, yelpToken, yelpTokenSecret}
          }
  )

  yelpValidation
    .ap(validateYelpConsumerKey(yelpConsumerKey))
    .ap(validateYelpConsumerSecret(yelpConsumerSecret))
    .ap(validateYelpToken(yelpToken))
    .ap(validateYelpTokenSecret(yelpTokenSecret))
    .cata(
      failures => {
        console.log("--- 💔 failures ---")
        console.log(failures.join("\n"))
        console.log("------------------")
      },
      success => {
        console.log("👏", success)
      });


};
