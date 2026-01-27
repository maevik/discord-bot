import { EmbedBuilder } from "discord.js";
import embedColor from "../config/embed-colors.json";
import type { EmbedTemplateOptions } from "../types/embed";

function buildEmbed(color: string, icon: string, options: EmbedTemplateOptions): EmbedBuilder {
    const embed = new EmbedBuilder()
        .setColor(Number(color))
        .setTitle(`${icon} ${options.title}`);

    if (options.description) embed.setDescription(options.description);
    if (options.fields?.length) embed.addFields(options.fields);
    if (options.footer) embed.setFooter({ text: options.footer });
    if (options.timestamp != false) embed.setTimestamp();

    return embed;
}

export const createSuccessEmbed = (options: EmbedTemplateOptions) =>
    buildEmbed(embedColor.SUCCESS, "✅", options);

export const createFailEmbed = (options: EmbedTemplateOptions) =>
    buildEmbed(embedColor.FAIL, "❌", options);

export const createWarnEmbed = (options: EmbedTemplateOptions) =>
    buildEmbed(embedColor.WARN, "⚠️", options);

export const createInfoEmbed = (options: EmbedTemplateOptions) =>
    buildEmbed(embedColor.INFO, "ℹ️", options);
