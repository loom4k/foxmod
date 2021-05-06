import { Guild, MessageEmbed } from "discord.js";
import { ICommand } from "my-module";
import { CONFIG } from "../config";

const InfoCommand: ICommand = {
	name: "info",
	description: "Gives information about FoxMod.",
	options: [],
	async execute({ client, interaction }) {
		const member = (client.guilds.cache.get(
			interaction.guild_id,
		) as Guild).member(interaction.member.user.id.toString());
		const embed = new MessageEmbed()
			.setColor(member ? member.displayHexColor : "GREEN")
			.setAuthor(
				"Thank you for choosing FoxMod",
				client.user?.displayAvatarURL(),
				CONFIG.SLASH_INVITE,
			)
			.setFooter("Made with <3 by Loom4k")
			.addField("1 - Add Commands", `[Click!](${CONFIG.SLASH_INVITE})`)
			.addField("2 - Invite Bot", `[Click!](${CONFIG.DEFAULT_INVITE})`)
			.addField(
				"3 - Support Server",
				`[Click!](${CONFIG.SUPPORT_SERVER})`,
			)
			.setDescription(
				"FoxMod is the most powerful moderation bot using Slash Commands you can find on Discord. It's built with the new Discord API integration and more applications are coming everyday. Enjoy and share with your friends!",
			)
			.setImage("https://i.imgur.com/Jpk71Uc.gif");
		return client.send(
			interaction,
			"✨ The only Slash-Commands moderation bot you need! ✨",
			embed,
		);
	},
};

export default InfoCommand;