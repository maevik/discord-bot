import type { ChatInputCommandInteraction } from "discord.js";

import { Response } from "@/utils/response";

export async function reportCommand(interaction: ChatInputCommandInteraction): Promise<void> {
    const response = new Response(interaction);

    // await response.sendSuccess({

    // })
} 