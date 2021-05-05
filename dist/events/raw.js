"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RawEvent = {
    name: "raw",
    execute: async (client, pack) => {
        if (pack.t !== "INTERACTION_CREATE")
            return;
        const command = client.commands.get(pack.d.data.name);
        if (!command)
            return;
        command.execute({
            client,
            interaction: pack.d,
            args: pack.d.data.options,
        });
    },
};
exports.default = RawEvent;
