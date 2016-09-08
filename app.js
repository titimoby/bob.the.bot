var exec = require('child_process').exec;
var cmd = './bin/hubot --adapter slack';

exec(cmd, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
