const { EmbedBuilder, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("help")
		.setDescription(
			"Vse komande so razdeljene v kategorije. Klikni na gumb, da vidiš komande v kategoriji."
		),
	folder: "misc",
	example: "/help",
	async execute(interaction) {
		// Extendable za več kategorij

		const commands = interaction.client.slashCommands.filter(command => command.folder == "games");

		// Naredimo embed v katerega napišemo vse komande

        const embed = new EmbedBuilder()
            .setTitle("Pomoč")
            .addFields(
                commands.map(command => {
                    return {
                        name: command.data.name,
                        value: `${command.data.description}\n\nPrimer: \`${command.example}\``
                    }
                })
            )
            .setColor("Random")
            .setTimestamp();


		// Pošljemo message
		
		await interaction.reply({ embeds: [embed] });
	},
};