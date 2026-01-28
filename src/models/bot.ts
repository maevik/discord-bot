import { Client, Events, GatewayIntentBits, REST, Routes } from "discord.js";
import { Logger } from "@/utils/logger";
import commands from "@/commands/index";

export class Bot {
    constructor(private botToken: string, private clientId: string) { }

    async start(): Promise<void> {
        Logger.info("Discord Bot Initializing");
        const client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
            ],
        });

        this.registerEventListeners(client);

        try {
            await client.login(this.botToken);
            await this.registerSlashCommands();
        } catch (error) {
            Logger.error(error);
        }
    }

    private async onReady(): Promise<void> {
        Logger.info("Discord Bot Initialized");
    }

    private async onJoin(): Promise<void> {
        // implementation needed
    }

    private async onLeave(): Promise<void> {
        // implementation needed
    }

    private async onMessage(): Promise<void> {
        // implementation needed
    }

    private async onInteract(interaction: any): Promise<void> {
        if (!interaction.isChatInputCommand()) return;

        const command = commands.find(cmd => cmd.name === interaction.commandName);
        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            Logger.error(error);

            try {
                const errorMsg = { content: "❌ An error occurred while executing this command.", ephemeral: true };
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp(errorMsg);
                } else {
                    await interaction.reply(errorMsg);
                }
            } catch (replyError) {
                Logger.error(replyError);
            }
        }
    }

    private async registerSlashCommands(): Promise<void> {
        const rest = new REST({ version: "10" }).setToken(this.botToken);

        try {
            await rest.put(Routes.applicationCommands(this.clientId), { body: commands });
        } catch (error) {
            Logger.error(error);
        }
    }

    private registerEventListeners(client: Client): void {
        client.on(Events.ClientReady, () => this.onReady());
        client.on(Events.GuildCreate, () => this.onJoin());
        client.on(Events.GuildDelete, () => this.onLeave());
        client.on(Events.MessageCreate, () => this.onMessage());
        client.on(Events.InteractionCreate, (interaction) => this.onInteract(interaction));
    }
}
