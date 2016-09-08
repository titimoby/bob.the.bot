// Description:
// BoB = Bot Operative Behaviour
"use strict";

const fetch = require('node-fetch');

let getData = ({path}) => {
  let _response = {}
  return fetch(path, {
    method: 'GET'  })
  .then(response => {
    return response.json();
  })
  .then(jsonData => {
    return jsonData;
  })
}



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
      if (tokenizedCmd.length == 3) {
        if (tokenizedCmd.second().equals("restos")) {
          // do something more functional
          try {
            let town = tokenizedCmd.third();
            getData({path:`https://raw.githubusercontent.com/k33g/bob.the.bot.data/master/restos.json`}).then(data => {
              res.send(data[town].map(resto => {
                return `${resto.name} (${resto.type}): ${resto.url}\n`
              }).join(""));

            }).catch(err => {
              //console.log(err);
              //throw new Error(err.message);
              res.send("Huston? We've got a problem 😱");
            })
          } catch(err) {
            //throw new Error(err.message);
            res.send("Huston? We've got a problem 😱");
          }
        }
      }

    } catch(err) {
      //console.log(err)
      res.send("Huston? We've got a problem 😱");
    }

  });

};
