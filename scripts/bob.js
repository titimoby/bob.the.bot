// Description:
// BoB = Bot Operative Behaviour


"use strict";
String.prototype.equals = function(x) { return x == this; }
let tokenize = cmd => {
  let tokenizedCmd = cmd.split(" ").filter(item => item !== "");
  tokenizedCmd.first = () => tokenizedCmd[0];
  tokenizedCmd.second = () => tokenizedCmd[1];
  tokenizedCmd.third = () => tokenizedCmd[2];
  tokenizedCmd.fourth = () => tokenizedCmd[3];
  tokenizedCmd.fifth = () => tokenizedCmd[4];
  tokenizedCmd.sixth = () => tokenizedCmd[5];
  return tokenizedCmd;
}

module.exports =  (robot) =>  {

  robot.hear(/bob/, (res) => {
    let cmd = res.envelope.message.text;
    let tokenizedCmd = tokenize(cmd);

    try {


      if (tokenizedCmd.first().equals("bob") && tokenizedCmd.length == 1) {
        res.send("What? 😜");
      }
      if (tokenizedCmd.length == 2) {
        if (tokenizedCmd.second().equals("helpme")) {
          res.send("Help your self! 😝");
        }
      }


    } catch(err) {
      console.log(err)
      res.send("Huston? We've got a problem :scream:");
    }

  });

};
