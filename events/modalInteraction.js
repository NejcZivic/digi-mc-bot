/**
 * @file Modal Interaction Handler
 * @author Naman Vrati
 * @since 3.2.0
 * @version 3.3.2
 */

const { Events } = require("discord.js");

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		const { client } = interaction;

		if (!interaction.isModalSubmit()) return;

		const command = client.modalCommands.get(interaction.customId);

		if (!command) {
			return await require("../messages/defaultModalError").execute(interaction);
		}

		try {
			await command.execute(interaction);
		} catch (err) {
			console.error(err);
			await interaction.reply({
				content: "Opala, nekaj je šlo narobe!",
				ephemeral: true,
			});
		}
	},
};
