const { Events } = require("discord.js");

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		const { client } = interaction;

		if (!interaction.isButton()) return;

		const command = client.buttonCommands.get(interaction.customId);

		if (!command) {
			return await require("../messages/defaultButtonError").execute(interaction);
		}

		try {
			return await command.execute(interaction);
		} catch (err) {
			console.error(err);
			await interaction.reply({
				content: "Opala, nekaj je šlo narobe!",
				ephemeral: true,
			});
		}
	},
};
