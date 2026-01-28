import type { ChatInputCommandInteraction } from "discord.js";

import { Response } from "@/utils/response";
import { Logger } from "template/src/services";

async function pingCommand(interaction: ChatInputCommandInteraction): Promise<void> {
    const response = new Response(interaction);

    await response.sendSuccess({
        title: "Pong!",
        description: "Bot is online & responsive",
        fields: [{ name: "Latency", value: `${interaction.client.ws.ping}ms`, inline: true }]
    });
}

async function todoCommand(interaction: ChatInputCommandInteraction): Promise<void> {
    const response = new Response(interaction);
    
    Logger.warn("(todoCommand) Implementation Needed");
    await response.sendWarn({
        title: "Unimplemented Command",
        description: "This command is yet to be implemented in the bot",
    });
}

export { pingCommand, todoCommand }