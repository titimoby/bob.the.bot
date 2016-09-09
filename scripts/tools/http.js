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

module.exports = {
  getData: getData
}
