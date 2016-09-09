"use strict";

const getData = require('./http.js').getData;
//const getData = require('./tools/http.js').getData;


// Get rooms id: https://slack.com/api/channels.list?token=HUBOT_SLACK_TOKEN
let fetchSlackRoom = ({roomName}) => {
  return getData({path:`https://slack.com/api/channels.list?token=${process.env.HUBOT_SLACK_TOKEN}`})
    .then(data => {
      return data.channels.find(room => room.name == roomName);
    })
    .catch(err => {
      return err
    })
}

module.exports = {
  fetchSlackRoom: fetchSlackRoom
}
