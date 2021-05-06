"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
const dotenv_1 = require("dotenv");
dotenv_1.config();
const CLIENT_ID = process.env.CLIENT_ID;
exports.CONFIG = {
    TOKEN: process.env.TOKEN,
    PORT: parseInt(process.env.PORT),
    CLIENT_ID,
    SLASH_INVITE: `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&scope=applications.commands`,
    DEFAULT_INVITE: `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&scope=bot&permissions=268725328`,
    PRESENCE: {
        activity: {
            name: [
                "STATUS 1",
                "STATUS 2",
            ],
            type: ["WATCHING", "LISTENING", "COMPETING"],
        },
        status: ["idle", "online", "dnd"],
        afk: false,
        shardID: 0,
    },
    DEFAULT_RANK_COLOR: "ffffff",
    API_URL: "https://discord.com/api/v8",
    SUPPORT_SERVER: "https://discord.gg/cdyxFd2d6h",
};
