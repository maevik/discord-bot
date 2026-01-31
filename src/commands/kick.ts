import { Response } from "@/utils/response";
import type { ChatInputCommandInteraction } from "discord.js";

async function kickUserCommand(interaction: ChatInputCommandInteraction): Promise<void> {
    const target = interaction.options.getUser("user", true);
    const reason = interaction.options.getString("reason") || "No reason provided";

    const response = new Response(interaction);
    
    await response.defer(false);

    try {
        await interaction.guild?.members.kick(target, reason);

        await response.sendSuccess({
            title: "User Kick Success",
            description: `**${target.tag}** has been kicked.`,
            fields: [{ name: "Reason", value: reason, inline: false, }]
        });
    } catch (error) {
        await response.sendError({
            title: "User Kick Failed",
            description: "Couldn't kick this user. Check role hierarchy."
        });
    }
}

export { kickUserCommand }