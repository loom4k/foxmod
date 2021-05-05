import { Client, Collection } from 'discord.js'
import { config } from 'dotenv'
import { GatewayServer, SlashCreator } from 'slash-create'
import { join } from 'path'

config()
const client = new Client()

client.once('ready', () => {
    console.log('boom yes')
    
    new SlashCreator({
        applicationID: client.user!.id,
        token: process.env.TOKEN,
    }).withServer(
        new GatewayServer(
            handler => client.ws.on('INTERACTION_CREATE' as any, handler)
        )
    ).registerCommandsIn(
        join(__dirname, "commands")
    ).syncCommands()
})

client.login(process.env.TOKEN)
