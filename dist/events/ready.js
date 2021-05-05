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
const pogger = __importStar(require("pogger"));
const config_1 = require("../config");
const ReadyEvent = {
    name: "ready",
    execute: async (client) => {
        setInterval(async () => {
            await client.user?.setPresence({
                activity: {
                    name: random(config_1.CONFIG.PRESENCE.activity.name),
                    type: random(config_1.CONFIG.PRESENCE.activity.type),
                },
                status: random(config_1.CONFIG.PRESENCE.status),
                afk: config_1.CONFIG.PRESENCE.afk,
                shardID: config_1.CONFIG.PRESENCE.shardID,
            });
        }, 15000);
        pogger.success(`Logged in as ${client.user?.tag}!`);
    },
};
function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}
exports.default = ReadyEvent;
