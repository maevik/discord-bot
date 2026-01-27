import type { APIEmbedField } from "discord.js";

export interface EmbedTemplateOptions {
    title: string;
    description: string;
    fields?: APIEmbedField[];
    footer?: string;
    timestamp?: boolean;
}