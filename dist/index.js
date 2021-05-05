"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = require("dotenv");
const slash_create_1 = require("slash-create");
const path_1 = require("path");
dotenv_1.config();
const client = new discord_js_1.Client();
client.once('ready', () => {
    console.log('boom yes');
    new slash_create_1.SlashCreator({
        applicationID: client.user.id,
        token: process.env.TOKEN,
    }).withServer(new slash_create_1.GatewayServer(handler => client.ws.on('INTERACTION_CREATE', handler))).registerCommandsIn(path_1.join(__dirname, "commands")).syncCommands();
});
client.login(process.env.TOKEN);
