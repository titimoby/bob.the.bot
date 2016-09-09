require('shelljs/global');

try {
  if (exec('./bin/hubot --adapter slack').code !== 0) {
    echo('Error: hubot failed');
    exit(1);
  }

} catch(err) {
  console.error("😱:", err);
}
