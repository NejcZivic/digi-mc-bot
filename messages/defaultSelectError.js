module.exports = {
	async execute(interaction) {
		await interaction.reply({
			content: "Opala, nekaj je šlo narobe!",
			ephemeral: true,
		});
		return;
	},
};
