import type { ChatInputCommandInteraction, ModalActionRowComponent, ModalActionRowComponentBuilder} from "discord.js";
import { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";
import { Response } from "@/utils/response";

async function userReportCommand(interaction: ChatInputCommandInteraction): Promise<void> {    
    const target = new TextInputBuilder({ 
        custom_id: "target_input",
        label: "User ID or Tag",
        style: TextInputStyle.Short,
        placeholder: "e.g. @User",
        required: true,
    });

    const reason = new TextInputBuilder({
        custom_id: "reason_input",
        label: "What is the reson?",
        style: TextInputStyle.Paragraph,
        placeholder: "Detailed Explaination of what @User does...",
        required: true,
    });

    const row1 = new ActionRowBuilder<ModalActionRowComponentBuilder>({ 
        components: [target],
    });

    const row2 = new ActionRowBuilder<ModalActionRowComponentBuilder>({ 
        components: [reason],
    });

    const modal = new ModalBuilder({ 
        custom_id: "user_report_modal", 
        title: "Submit a User Report",
        components: [row1, row2],
    });

    const response = new Response(interaction);
    await response.showModal(modal);
}

async function bugReportCommand(interaction: ChatInputCommandInteraction): Promise<void> {
    const feature = new TextInputBuilder({
        custom_id: "feature_input",
        label: "Affected Feature/System",
        style: TextInputStyle.Short,
        placeholder: "e.g. Play button not working...",
        required: true,
    })

    const step = new TextInputBuilder({
        custom_id: "step_input",
        label: "How can we reproduce this?",
        style: TextInputStyle.Paragraph,
        placeholder: "1. Open application\n 2. Click play...",
        required: true,
    })

    const row1 = new ActionRowBuilder<ModalActionRowComponentBuilder>({ 
        components: [feature],
    });

    const row2 = new ActionRowBuilder<ModalActionRowComponentBuilder>({ 
        components: [step],
    });

    const modal = new ModalBuilder({
        custom_id: "bug_report_modal",
        title: "Submit a Bug Report",
        components: [row1, row2],
    })
    
    const response = new Response(interaction);
    await response.showModal(modal);
}

export { userReportCommand, bugReportCommand }