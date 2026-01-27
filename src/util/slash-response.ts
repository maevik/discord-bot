import type { ChatInputCommandInteraction, InteractionReplyOptions, EmbedBuilder } from "discord.js";
import { Logger } from "./logger";

export class SlashResponse {
    constructor(private interaction: ChatInputCommandInteraction) { }

    public async reply(embed: EmbedBuilder, ephemeral = false): Promise<void> {
        try {
            await this.interaction.reply({ embeds: [embed], ephemeral });
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
}
