import type { Message, TextChannel, APIEmbed } from "discord.js";
import { EmbedBuilder } from "discord.js";
import { Logger } from "./logger";

export class PrefixResponse {
    constructor(private context: Message) { }

    async sendEmbed(embed: EmbedBuilder | APIEmbed) {
        try {
            await (this.context.channel as TextChannel).send({ embeds: [embed] });
        } catch (error) {
            Logger.error(error);
        }
    }

    async replyEmbed(embed: EmbedBuilder | APIEmbed) {
        try {
            await this.context.reply({ embeds: [embed] });
        } catch (error) {
            Logger.error(error);
        }
    }

    async editEmbed(embed: EmbedBuilder | APIEmbed) {
        try {
            await this.context.edit({ embeds: [embed] });
        } catch (error) {
            Logger.error(error);
        }
    }

    async deleteEmbed() {
        try {
            await this.context.edit({ embeds: [] });
        } catch (error) {
            Logger.error(error);
        }
    }
}