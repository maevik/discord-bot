import type { ChatInputApplicationCommandData, ChatInputCommandInteraction, Message } from "discord.js";

export interface SlashCommand extends ChatInputApplicationCommandData {
    execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}
