"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PingCommand = {
    name: 'ping',
    description: 'Get the FoxAPI and client ping from your shard',
    options: [],
    async execute({ client, interaction }) {
        return client.send(interaction, `My ping is: **${client.ws.ping}**ms`);
    }
};
exports.default = PingCommand;
