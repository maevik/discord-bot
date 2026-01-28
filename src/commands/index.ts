import type { SlashCommand } from "@/types/command";

import { pingCommand, todoCommand } from "@/commands/default";
import { bugReportCommand, userReportCommand } from "@/commands/report";

const commands: SlashCommand[] = [
    {
        name: "ping",
        description: "Check if the bot is online and get latency info",
        execute: pingCommand,
    },
    {
        name: "ban",
        description: "Ban specific user inside a discord server",
        execute: todoCommand,
    },
    {
        name: "report-user",
        description: "Submit a specific user report inside a discord server to mod's",
        execute: userReportCommand,
    },
    {
        name: "report-bug",
        description: "Submit a specific bug report for the product's",
        execute: bugReportCommand,
    },
];

export default commands;