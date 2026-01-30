import type { ApplicationCommandOptionData, ChatInputApplicationCommandData, ChatInputCommandInteraction, PermissionResolvable } from "discord.js";

export interface SlashCommand extends ChatInputApplicationCommandData {
    name: string;
    description: string;
    defaultMemberPermissions?: PermissionResolvable;
    options?: ApplicationCommandOptionData[];
    execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}
