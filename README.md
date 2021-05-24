# FoxMod

FoxMod is a open-source Discord moderation bot built on the Interaction System and Discord Slash Commands. This project was built and is maintained by `loom4kwasfat#6020`. Credit to [Barbarbar38](https://github.com/barbarbar338) for the frame of the project <3

### Contribute

This project is open-source. Feel free to grab some piece of code for educationnal purpose. If you want to contribute to the bot open a pull request and we will review it as soon as possible.

### Hosting Yourself

##### Requirements

* Node 14 or greated
* TypeScript installed. *Use npm install to install everything*
* Git **optionnal** to pull request or clone using *Batch*

If you want to host an instance or a copy of FoxMod, you can copy this repo using `gh repo clone Loom4k/foxmod` and the GitHub CLI or using git and `https://github.com/Loom4k/foxmod.git`. You can also download the ZIP file available in the Download Code button.

Make sure you run `npm init -y` after installing Node if you didn't already. Rename `.env.example` to `.env` and fill in the token after **TOKEN=**. You can then run the bot with `node dist/index.js`. In order to make changes to the source file, edit in the `index.ts` file. Have fun!

### Deleting / Updating and Adding Commands

##### Adding a Command

In order to add a command, add a `.ts` file in the `src/commands` folder. You can then use the same frame as the ping command and edit name, description as well as options if you want to add some. to send a reply use `client.send(interaction, content)`.

##### Updating a command

Simply edit the code in the `.ts` file of your command, save and re-run your code. This should update the command instantly. If it doesn't, make sure you changed `.env.example` to `.env` and added your own token, dev guild ID and everything else.

##### Deleting a command

Deleting a slash-command can be a little more tricky. You can do it in the code itself by making an API request or use an external tool such  as [Postman](postman.co) or Insomnia. Then send a DELETE request to `discord.com/api/v8/applications/YOUR_CLIENT_ID/commands/COMMAND_ID` and add `/guilds/GUILD_ID` if it's a guild command. This should delete the command. You might need to wait for next cache update of Discord API.
