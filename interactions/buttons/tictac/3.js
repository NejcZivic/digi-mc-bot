const TicTacToe = require("../../../games/tictac.js");

module.exports = {
	id: "3-tic",
    execute(interaction) {
        if (interaction.message.content.split("**")[1].split(" (")[0] !== interaction.user.username) return interaction.reply({ content: "Nisi na vrsti!", ephemeral: true });

        const symbol = interaction.message.content.split("**")[1].split(" (")[1].split(")")[0];

        const game = interaction.message.components;
        
        const board = [];

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const label = game[i].components[j].label;
                if (label !== "X" && label !== "O") board.push(" ");
                else board.push(label);
            }
        }

        const currentBoard = new TicTacToe(board);

        const newerBoard = currentBoard.getBoard();

        newerBoard[2] = symbol;

        const newBoard = new TicTacToe(newerBoard);

        const newBoardMessage = newBoard.getBoardMessage();

        const winner = newBoard.getWinner();

        if (winner === "tie") return interaction.update({
            content: `**Izenačeno!**\n\nIgra **${interaction.message.content.split("**")[3].split(" (")[0]} (X)** proti **${interaction.message.content.split("**")[5].split(" (")[0]} (O)**!`,
            components: [newBoardMessage[0], newBoardMessage[1], newBoardMessage[2]]
        });

        if (winner) return interaction.update({
            content: `**${winner[4] === "X" ? interaction.message.content.split("**")[3].split(" (")[0] : interaction.message.content.split("**")[5].split(" (")[0]} (${winner[3]}) je zmagal!**\n\nIgra **${interaction.message.content.split("**")[3].split(" (")[0]} (X)** proti **${interaction.message.content.split("**")[5].split(" (")[0]} (O)**!`,
            components: [winner[0], winner[1], winner[2]]
        });

        interaction.update({
            content: `Na vrsti je **${symbol === "X" ? interaction.message.content.split("**")[5].split(" (")[0] : interaction.message.content.split("**")[3].split(" (")[0]} (${symbol === "X" ? "O" : "X"})**\n\nIgra **${interaction.message.content.split("**")[3].split(" (")[0]} (X)** proti **${interaction.message.content.split("**")[5].split(" (")[0]} (O)**!`,
            components: [newBoardMessage[0], newBoardMessage[1], newBoardMessage[2]]
        });
    }
};