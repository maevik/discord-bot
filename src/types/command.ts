import type { ChatInputApplicationCommandData, ChatInputCommandInteraction, Message } from "discord.js";

export interface PrefixCommand {
    name: string;
    description: string;
    execute: (message: Message, args: string[]) => Promise<void>;
}

export interface SlashCommand extends ChatInputApplicationCommandData {
    execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}
