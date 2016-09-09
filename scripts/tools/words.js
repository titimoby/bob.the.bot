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

module.exports = {
  tokenize: tokenize
}
