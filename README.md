# bob.the.bot
bob.the.bot

## Run BoB

- for tests in Terminal: `./bin/hubot`


## Connect to Slack

https://api.slack.com/bot-users
creating a new bot user
choose the team
-  type username
- Click on "Add bot integration" (then copy the token)
- Add an icon
- Click on "Save Integration"

Then in Slack, invite bob as a team member in a room

Run BoB to test with Slack: `HUBOT_SLACK_TOKEN=<token> ./bin/hubot --adapter slack
`
## Bob commands

- `bob helpme`
- `bob help`
- `bob restos <town>`
  - if you want to add some restaurants, this is here https://github.com/k33g/bob.the.bot.data/blob/master/restos.json
