"use strict";
const tokenize = require('./tools/words.js').tokenize;

module.exports =  (robot) =>  {
  console.log("💘", "feature.joe.dassin", "loaded")

  // start the command with bob
  robot.hear(/bob/, (res) => {
    let cmd = res.envelope.message.text;
    let tokenizedCmd = tokenize(cmd);

    try {
      // bob joe
      if (tokenizedCmd.length == 3) { // first is bob
        if (tokenizedCmd.second().equals("joe") && tokenizedCmd.third().equals("dassin")) {
          let song = [
              "A toi, à la façon que tu as d’être belle\n"
            , "A la façon que tu as d’être à moi\n"
            , "A tes mots tendres un peu artificiels quelquefois,\n"
            , "A toi, à la petite fille que tu étais\n"
            , "A celle que tu es encore souvent\n"
            , "A ton passé, à tes secrets,\n"
            , "A tes anciens princes charmants\n"
          ].join("");

          res.send(song);
        }
      }

    } catch(err) {
      console.log(err)
      res.send("Huston? We've got a problem 😱");
    }

  });
  // an other Joe
  robot.hear(/hey joe/, (res) => {
    let song = [
        "Hey Joe\n"
      , "Where you going with that money in your hand?\n"
      , "I say: Hey Joe\n"
      , "Where you going with that money in your hand?\n"
      , "Well I'm going to see my woman\n"
      , "You know I heard,\n"
      , "She done messed around with some other man\n"
      , "I heard she did\n"
      , "You know I'm going downtown\n"
      , "Gonna buy me a Blue Steel 44\n"
      , "You know I'm going downtown\n"
      , "Gonna buy me a Blue Steel 44\n"
      , "I'm gonna catch up with that girl\n"
      , "She won't be messing around\n"
      , "On me no more.\n"
    ].join("");
    res.send(song);
  })

};
