"use strict";
const tokenize = require('./tools/words.js').tokenize;

module.exports =  (robot) =>  {
  console.log("💘", "feature.joe.dassin", "loaded")

  // start the command with bob
  robot.hear(/bob/, (res) => {
    let cmd = res.envelope.message.text;
    let tokenizedCmd = tokenize(cmd);

    try {
      // bob joe dassin
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

};
