import { ActivityType, PresenceStatusData } from "discord.js";
import { config } from "dotenv";

config();

const CLIENT_ID = process.env.CLIENT_ID as string;

export const CONFIG = {
	TOKEN: process.env.TOKEN as string,
	PORT: parseInt(process.env.PORT as string),
	CLIENT_ID,
	SLASH_INVITE: `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&scope=applications.commands`,
	DEFAULT_INVITE: `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&scope=bot&permissions=268725328`,
	PRESENCE: {
		activity: {
			name: [
				"baby foxes",
				"devs sweating",
			],
			type: ["WATCHING"] as ActivityType[],
		},
		status: ["dnd"] as PresenceStatusData[],
		afk: false,
		shardID: 0,
	},
	API_URL: "https://discord.com/api/v8",
	SUPPORT_SERVER: "https://discord.gg/cdyxFd2d6h",
};