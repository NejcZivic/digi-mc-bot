const TicTacToe = require("../../../games/tictac.js");

module.exports = {
	id: "accept-tic",
	async execute(interaction) {
		const player1 = interaction.user;
        if (player1 !== interaction.message.mentions.users.first()) return interaction.reply({ content: "Izziv ni zate!", ephemeral: true });
		const player2 = interaction.client.users.cache.find(m => m.username === interaction.message.content.split("**")[1].split("**")[0]);

		const game = new TicTacToe([" ", " ", " ", " ", " ", " ", " ", " ", " "]);

		const board = game.getBoardMessage();

		await interaction.update({
			content: `Na vrsti je **${player1.username} (X)**\n\nIgra **${player1.username} (X)** proti **${player2.username} (O)**!`,
			components: [board[0], board[1], board[2]]
		});
	},
};