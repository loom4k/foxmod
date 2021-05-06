import { ICommand } from "my-module";

const PingCommand: ICommand = {
	name: "ping",
	description: "Get the FoxAPI ping",
	options: [],
	async execute({ client, interaction }) {
		client.send(
			interaction,
			`:ping_pong: Pong! ${client.ws.ping}ms`,
		);

        console.log(interaction.id)
	},
};

export default PingCommand;