import { Response } from "@/utils/response";

import type { ChatInputCommandInteraction } from "discord.js";

async function banUserCommand(interaction: ChatInputCommandInteraction): Promise<void> {
    const target = interaction.options.getUser("user", true);
    const reason = interaction.options.getString("reason") || "No reason provided";
    
    const response = new Response(interaction);

    await response.defer(false);

    try {
        await interaction.guild?.members.ban(target, { reason });

        await response.sendSuccess({
            title: "User Ban Success",
            description: `**${target.tag}** has been banned.`,
            fields: [{ name: "Reason", value: reason, inline: false, }]
        });
    } catch (error) {
        await response.sendError({
            title: "User Ban Failed",
            description: "Couldn't ban this user. Check role hierarchy."
        });
    }
}

export { banUserCommand }