"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slash_create_1 = require("slash-create");
class PingCommand extends slash_create_1.SlashCommand {
    constructor(creator) {
        super(creator, {
            // options
            name: "ping",
            description: "Get our API ping and reply with pong!",
            guildIDs: ["820397193310634004"]
        });
        // slash-create requires this
        this.filePath = __filename;
    }
    async run(ctx) {
        ctx.send(`My \`ping\` is **10**ms`);
    }
}
exports.default = PingCommand;
