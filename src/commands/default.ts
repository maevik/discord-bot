import type { ChatInputCommandInteraction } from "discord.js";

import { SlashResponse } from "../util/slash-response";
import { 
    createSuccessEmbed,
    createFailEmbed,
    createWarnEmbed,
    createInfoEmbed,
} from "../util/embed";

export async function pingCommand(interaction: ChatInputCommandInteraction): Promise<void> {
    const response = new SlashResponse(interaction);

    await response.reply(createSuccessEmbed({
        title: "Pong!",
        description: "Bot is online and responsive.",
        fields: [
            { name: "Latency", value: `${interaction.client.ws.ping}ms`, inline: true }
        ],
    }));
}

export async function exampleCommand(interaction: ChatInputCommandInteraction): Promise<void> {
    const response = new SlashResponse(interaction);
    
    const type = interaction.options.getString("type") || "info";

    const embeds = {
        success: createSuccessEmbed({
            title: "Success Example",
            description: "This is what a success message looks like!",
            fields: [
                { name: "Color", value: "Green", inline: true },
                { name: "Icon", value: "✅", inline: true },
            ],
        }),
        fail: createFailEmbed({
            title: "Fail Example",
            description: "This is what an error message looks like!",
            fields: [
                { name: "Color", value: "Red", inline: true },
                { name: "Icon", value: "❌", inline: true },
            ],
        }),
        warn: createWarnEmbed({
            title: "Warning Example",
            description: "This is what a warning message looks like!",
            fields: [
                { name: "Color", value: "Yellow/Amber", inline: true },
                { name: "Icon", value: "⚠️", inline: true },
            ],
        }),
        info: createInfoEmbed({
            title: "Info Example",
            description: "This is what an info message looks like!",
            fields: [
                { name: "Color", value: "Blue", inline: true },
                { name: "Icon", value: "ℹ️", inline: true },
            ],
        }),
    } as const;

    await response.reply(embeds[type as keyof typeof embeds] || embeds.info);
}
