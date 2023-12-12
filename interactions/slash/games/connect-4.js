const { SlashCommandBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("connect-4")
        .setDescription("Izzovi nekoga v igro štiri v vrsto!")
        .addUserOption((option) =>
            option
                .setName("igralec")
                .setDescription("Izberi igralca, ki ga želiš izzvati.")
                .setRequired(true)
        ),
    folder: "games",
    example: "/connect-4 @nekdo",
    async execute(interaction) {
        // Dobimo oba igralca

        const player1 = interaction.user;
        const player2 = interaction.options.getUser("igralec");

        // Preverimo, če je igralec 1 enak igralcu 2

        if (player1.id === player2.id) {
            return await interaction.reply({
                content: "Ne moreš igrati proti samemu sebi!",
                ephemeral: true,
            });
        }

        // Naredimo gumb za sprejetje izziva

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("accept-4")
                    .setLabel("Sprejmi")
                    .setStyle(ButtonStyle.Success)
                    .setEmoji("✅")
            );

        // Pošljemo message

        await interaction.reply({
            content: `${player2}, **${player1.username}** te je izzval v igro štiri v vrsto!\nAli sprejmeš izziv?`,
            components: [row]
        });
    }
}