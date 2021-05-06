import { Guild, MessageEmbed } from 'discord.js'
import { ICommand } from 'my-module'
import { CONFIG } from '../config'

const PingCommand: ICommand = {
    name: 'ping',
    description: 'Get the FoxAPI and client ping from your shard',
    options: [],
    async execute({ client, interaction }) {
        return client.send(interaction, `My ping is: **${client.ws.ping}**ms`)
    }
}

export default PingCommand