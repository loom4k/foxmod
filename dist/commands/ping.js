"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PingCommand = {
    name: "ping",
    description: "Shows the bot's ping.",
    options: [],
    async execute({ client, interaction }) {
        return client.send(interaction, `:ping_pong: Pong! ${client.ws.ping}ms`);
    },
};
exports.default = PingCommand;
