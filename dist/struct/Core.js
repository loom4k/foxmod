"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
const discord_js_1 = require("discord.js");
const config_1 = require("../config");
const fs_1 = require("fs");
const path_1 = require("path");
const pogger = __importStar(require("pogger"));
const makeAPIRequest_1 = require("../utils/makeAPIRequest");
class Core extends discord_js_1.Client {
    constructor() {
        super({
            presence: {
                activity: {
                    name: random(config_1.CONFIG.PRESENCE.activity.name),
                    type: random(config_1.CONFIG.PRESENCE.activity.type),
                },
                status: random(config_1.CONFIG.PRESENCE.status),
                afk: config_1.CONFIG.PRESENCE.afk,
                shardID: config_1.CONFIG.PRESENCE.shardID,
            },
        });
        this.config = config_1.CONFIG;
        this.commands = new discord_js_1.Collection();
    }
    async createAPIMessage(interaction, content, options = {}) {
        if (!(content instanceof discord_js_1.APIMessage))
            content = discord_js_1.APIMessage.create(this.channels.resolve(interaction.channel_id), content, options);
        const data = content.resolveData();
        return data;
    }
    async send(interaction, content, options) {
        const { data } = await this.createAPIMessage(interaction, content, options);
        const body = {
            type: 4,
            data,
        };
        const res = await makeAPIRequest_1.makeAPIRequest(`/interactions/${interaction.id}/${interaction.token}/callback`, "POST", body);
        return res;
    }
    async commandHandler() {
        const files = fs_1.readdirSync(path_1.resolve(__dirname, "..", "commands"));
        for (const file of files) {
            const command = (await Promise.resolve().then(() => __importStar(require(path_1.resolve(__dirname, "..", "commands", file))))).default;
            const body = {
                name: command.name,
                description: command.description,
                options: command.options,
            };
            await makeAPIRequest_1.makeAPIRequest(`/applications/${config_1.CONFIG.CLIENT_ID}/commands`, "POST", body);
            this.commands.set(command.name, command);
            pogger.success(`Command loaded: ${command.name}`);
        }
    }
    async eventHandler() {
        const files = fs_1.readdirSync(path_1.resolve(__dirname, "..", "events"));
        for (const file of files) {
            const event = (await Promise.resolve().then(() => __importStar(require(path_1.resolve(__dirname, "..", "events", file))))).default;
            this.on(event.name, (...args) => event.execute(this, ...args));
            pogger.success(`Event loaded: ${event.name}`);
        }
    }
    async connect() {
        pogger.info("Loading files...");
        await this.eventHandler();
        await this.commandHandler();
        pogger.info("Connecting to Discord API");
        return await this.login(config_1.CONFIG.TOKEN);
    }
}
exports.Core = Core;
function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}
