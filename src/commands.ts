import { ApplicationCommandOptionType } from "discord.js";
import { pingCommand, exampleCommand } from "./commands/default";
import type { SlashCommand } from "./types/command";

export const slashCommands: SlashCommand[] = [
    {
        name: "ping",
        description: "Check if the bot is online and get latency info",
        execute: pingCommand,
    },
    {
        name: "example",
        description: "See examples of different embed types",
        options: [
            {
                name: "type",
                description: "The type of embed to show",
                type: ApplicationCommandOptionType.String,
                required: false,
                choices: [
                    { name: "Success", value: "success" },
                    { name: "Fail/Error", value: "fail" },
                    { name: "Warning", value: "warn" },
                    { name: "Info", value: "info" },
                ],
            },
        ],
        execute: exampleCommand,
    },
];
