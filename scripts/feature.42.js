"use strict";

module.exports =  (robot) =>  {

  robot.hear(/bob/, (res) => {
    let cmd = res.envelope.message.text;
    let tokenizedCmd = tokenize(cmd);

    try {
      if (tokenizedCmd.length == 2) { // first is bob
        if (tokenizedCmd.second().equals("42")) {
          res.send("https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker.27s_Guide_to_the_Galaxy")
        }
      }
    } catch(err) {
      console.log(err)
      res.send("Huston? We've got a problem 😱");
    }

  });

}
