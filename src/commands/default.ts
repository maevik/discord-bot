import { Response } from "../util/response";
import type { ChatInputCommandInteraction } from "discord.js";

export async function pingCommand(interaction: ChatInputCommandInteraction): Promise<void> {
    const response = new Response(interaction);

    await response.sendSuccess({
        title: "Pong!",
        description: "Bot is online & responsive",
        fields: [{ name: "Latency", value: `${interaction.client.ws.ping}ms`, inline: true }]
    });
}

// export async function exampleCommand(interaction: ChatInputCommandInteraction): Promise<void> {
//     const response = new Response(interaction);

//     const type = interaction.options.getString("type")?.toLowerCase() || "info";

//     switch (type) {
//         case "success":
//             await response.sendSuccess({
//                 title: "Success Example",
//                 description: "This is what a success message looks like!",
//                 fields: [
//                     { name: "Color", value: "Green", inline: true },
//                     { name: "Icon", value: "✅", inline: true },
//                 ],
//             });
//             break;

//         case "fail":
//             await response.sendError({
//                 title: "Fail Example",
//                 description: "This is what an error message looks like!",
//                 fields: [
//                     { name: "Color", value: "Red", inline: true },
//                     { name: "Icon", value: "❌", inline: true },
//                 ],
//             });
//             break;

//         case "warn":
//             await response.sendWarn({
//                 title: "Warning Example",
//                 description: "This is what a warning message looks like!",
//                 fields: [
//                     { name: "Color", value: "Yellow/Amber", inline: true },
//                     { name: "Icon", value: "⚠️", inline: true },
//                 ],
//             });
//             break;

//         case "info":
//         default:
//             await response.sendInfo({
//                 title: "Info Example",
//                 description: "This is what an info message looks like!",
//                 fields: [
//                     { name: "Color", value: "Blue", inline: true },
//                     { name: "Icon", value: "ℹ️", inline: true },
//                 ],
//             });
//             break;
//     }
// }
