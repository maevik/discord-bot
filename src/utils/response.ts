import type { ColorResolvable, InteractionReplyOptions, ModalBuilder } from "discord.js";
import type { EmbedTemplateOptions } from "@/types/embed";

import { ChatInputCommandInteraction, EmbedBuilder } from "discord.js";
import { Logger } from "@/utils/logger";

import embedColor from "@/configs/embed-colors.json";

export class Response {
    constructor(private interaction: ChatInputCommandInteraction) { }

    public async reply(embed: EmbedBuilder, ephemeral = false): Promise<void> {
        try {
            if (this.interaction.deferred || this.interaction.replied) {
                await this.interaction.editReply({ embeds: [embed] });
            } else {
                await this.interaction.reply({ embeds: [embed], ephemeral });
            }
        } catch (error) {
            Logger.error(error);
        }
    }

    public async replyWithOptions(options: InteractionReplyOptions): Promise<void> {
        try {
            await this.interaction.reply(options);
        } catch (error) {
            Logger.error(error);
        }
    }

    public async edit(embed: EmbedBuilder): Promise<void> {
        try {
            await this.interaction.editReply({ embeds: [embed] });
        } catch (error) {
            Logger.error(error);
        }
    }

    public async defer(ephemeral = false): Promise<void> {
        try {
            await this.interaction.deferReply({ ephemeral });
        } catch (error) {
            Logger.error(error);
        }
    }

    public async followUp(embed: EmbedBuilder, ephemeral = false): Promise<void> {
        try {
            await this.interaction.followUp({ embeds: [embed], ephemeral });
        } catch (error) {
            Logger.error(error);
        }
    }

    public async deleteReply(): Promise<void> {
        try {
            await this.interaction.deleteReply();
        } catch (error) {
            Logger.error(error);
        }
    }

    public async showModal(modal: ModalBuilder): Promise<void> {
        try {
            // modal CANNOT be shown if interaction is already deferred or replied to.
            if (this.interaction.deferred || this.interaction.replied) return;
            await this.interaction.showModal(modal);
        } catch (error) {
            Logger.error(error);
        }
    }

    public async sendInfo(options: EmbedTemplateOptions, ephemeral = false): Promise<void> {
        const embed = this.createEmbed(embedColor.INFO, "ℹ️", options);
        await this.reply(embed, ephemeral);
    }

    public async sendSuccess(options: EmbedTemplateOptions, ephemeral = false): Promise<void> {
        const embed = this.createEmbed(embedColor.SUCCESS, "✅", options);
        await this.reply(embed, ephemeral);
    }

    public async sendWarn(options: EmbedTemplateOptions, ephemeral = false): Promise<void> {
        const embed = this.createEmbed(embedColor.WARN, "⚠️", options);
        await this.reply(embed, ephemeral);
    }

    public async sendError(options: EmbedTemplateOptions, ephemeral = false): Promise<void> {
        const embed = this.createEmbed(embedColor.FAIL, "❌", options);
        await this.reply(embed, ephemeral);
    }

    private createEmbed(color: string | number, icon: string, options: EmbedTemplateOptions): EmbedBuilder {
        const embed = new EmbedBuilder()
            .setColor(Number(color) as ColorResolvable)
            .setTitle(`${icon} ${options.title}`);

        if (options.description) {
            embed.setDescription(options.description);
        }

        if (options.fields?.length) {
            embed.addFields(options.fields);
        }

        if (options.footer) {
            embed.setFooter({ text: options.footer });
        }

        if (options.timestamp !== false) {
            embed.setTimestamp();
        }

        return embed;
    }
}