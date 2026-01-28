import type { SlashCommand } from "@/types/command";

import { pingCommand, todoCommand } from "@/commands/default";

const commands: SlashCommand[] = [
    {
        name: "ping",
        description: "Check if the bot is online and get latency info",
        execute: pingCommand,
    },
    {
        name: "report",
        description: "Report specific user inside a discord server to mod's",
        execute: todoCommand,
    }
];

export default commands;