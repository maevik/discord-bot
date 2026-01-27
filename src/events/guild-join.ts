import type { Guild } from "discord.js";
import type { EventHandler } from "../../template/src/events";

export class GuildJoin implements EventHandler {
    constructor() {}

    public async process(guild: Guild): Promise<void> {
        let owner = await guild.fetchOwner();

        if (owner) {
            
        }
    }
}