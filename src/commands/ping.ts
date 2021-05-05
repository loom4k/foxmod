import { SlashCommand, SlashCreator, CommandContext } from 'slash-create'

export default class PingCommand extends SlashCommand {

    constructor(creator: SlashCreator) {
      super(creator, {
        // options
        name: "ping", // command name
        description: "Get our API ping and reply with pong!",
        guildIDs: ["820397193310634004"]
      });
      // slash-create requires this
      this.filePath = __filename;
    }
  
    async run(ctx: CommandContext) {
      ctx.send('Pong!', { ephemeral: true })
    }
}