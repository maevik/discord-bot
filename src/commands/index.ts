import { ApplicationCommandOptionType, PermissionFlagsBits } from "discord.js";
import { pingCommand, todoCommand } from "@/commands/default";
import { bugReportCommand, userReportCommand } from "@/commands/report";
import { banUserCommand } from "@/commands/ban";

import type { SlashCommand } from "@/types/command";

const commands: SlashCommand[] = [
    {
        name: "ping",
        description: "Check if the bot is online and get latency info",
        defaultMemberPermissions: PermissionFlagsBits.Administrator,
        execute: pingCommand,
    },
    {
        name: "ban-user",
        description: "Ban specific user inside a discord server",
        defaultMemberPermissions: PermissionFlagsBits.Administrator,
        options: [
            {
                name: "user",
                description: "The user you want to ban",
                type: ApplicationCommandOptionType.User,
                required: true,
            },
            {
                name: "reason",
                description: "The reason for the ban",
                type: ApplicationCommandOptionType.String,
                required: false,
            },
        ],
        execute: banUserCommand,
    },
    {
        name: "ban-player",
        description: "Ban specific player inside a game server",
        defaultMemberPermissions: PermissionFlagsBits.Administrator,
        execute: todoCommand,
    },
    {
        name: "report-user",
        description: "Submit a specific user report inside a discord server to mod's",
        defaultMemberPermissions: PermissionFlagsBits.Administrator,
        execute: userReportCommand,
    },
    {
        name: "report-bug",
        description: "Submit a specific bug report for the product's",
        defaultMemberPermissions: PermissionFlagsBits.Administrator,
        execute: bugReportCommand,
    },
];

export default commands;