"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PingCommand = {
    name: "ping",
    description: "Get the FoxAPI ping",
    options: [],
    async execute({ client, interaction }) {
        client.send(interaction, `:ping_pong: Pong! ${client.ws.ping}ms`);
        console.log(interaction.id);
    },
};
exports.default = PingCommand;
