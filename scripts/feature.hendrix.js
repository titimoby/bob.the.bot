"use strict";
const tokenize = require('./tools/words.js').tokenize;

module.exports =  (robot) =>  {
  console.log("🎸", "feature.hendrix", "loaded")

  // start the command with bob
  robot.hear(/bob/, (res) => {
    let cmd = res.envelope.message.text;
    let tokenizedCmd = tokenize(cmd);

// follow bob standards and use a big dirty try catch 😈
try {
    // gimme Hey Joe
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

    // Gimme Foxy Lady
    robot.hear(/foxy lady/, (res) => {
      let song = [
        "Foxy\n",
        "Foxy\n"
        "You know you're a cute little heartbreaker",
        "Foxy\n",
        "You know you're a sweet little lovemaker",
        "Foxy\n",
        "\n",
        "I wanna take you home",
        "I won't do you no harm, no",
        "You've got to be all mine, all mine",
        "Ooh, foxy lady"
      ].join("");
      res.send(song);
    })
} catch(err) {
  console.log(err)
  res.send("Huston? We've got a problem 😱");
}

};
