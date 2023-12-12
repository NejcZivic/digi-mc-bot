const TicTacToe = require("../../../games/tictac.js");

module.exports = {
	id: "1-tic",
    execute(interaction) {
        // Tukaj prečekiramo, če je igralec, ki pritisne na gumb, res na vrsti
        if (interaction.message.content.split("**")[1].split(" (")[0] !== interaction.user.username) return interaction.reply({ content: "Nisi na vrsti!", ephemeral: true });

        // Določimo simbol, ki ga bo igralec postavil

        const symbol = interaction.message.content.split("**")[1].split(" (")[1].split(")")[0];

        // Dobimo vse gumbe

        const game = interaction.message.components;
        
        const board = [];

        // V array board shranimo trenutno stanje igre

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const label = game[i].components[j].label;
                // Če je label enak X ali O, potem v array board shranimo X ali O, drugače pa presledek
                if (label !== "X" && label !== "O") board.push(" ");
                else board.push(label);
            }
        }

        // Naredimo novo igro iz trenutnega stanja igre

        const currentBoard = new TicTacToe(board);

        // Dobimo stanje te igre

        const newerBoard = currentBoard.getBoard();

        // V polje, ki ga je igralec izbral, postavimo simbol

        newerBoard[0] = symbol;

        // Naredimo novo igro iz novega stanja igre

        const newBoard = new TicTacToe(newerBoard);

        // Dobimo message nove igre

        const newBoardMessage = newBoard.getBoardMessage();

        // Preverimo, če je igralec zmagal ali je izenačeno

        const winner = newBoard.getWinner();

        if (winner === "tie") return interaction.update({
            content: `**Izenačeno!**\n\nIgra **${interaction.message.content.split("**")[3].split(" (")[0]} (X)** proti **${interaction.message.content.split("**")[5].split(" (")[0]} (O)**!`,
            components: [newBoardMessage[0], newBoardMessage[1], newBoardMessage[2]]
        });

        if (winner) return interaction.update({
            content: `**${winner[4] === "X" ? interaction.message.content.split("**")[3].split(" (")[0] : interaction.message.content.split("**")[5].split(" (")[0]} (${winner[3]}) je zmagal!**\n\nIgra **${interaction.message.content.split("**")[3].split(" (")[0]} (X)** proti **${interaction.message.content.split("**")[5].split(" (")[0]} (O)**!`,
            components: [winner[0], winner[1], winner[2]]
        });

        // Če ni zmagovalec, potem nadaljujemo igro

        interaction.update({
            content: `Na vrsti je **${symbol === "X" ? interaction.message.content.split("**")[5].split(" (")[0] : interaction.message.content.split("**")[3].split(" (")[0]} (${symbol === "X" ? "O" : "X"})**\n\nIgra **${interaction.message.content.split("**")[3].split(" (")[0]} (X)** proti **${interaction.message.content.split("**")[5].split(" (")[0]} (O)**!`,
            components: [newBoardMessage[0], newBoardMessage[1], newBoardMessage[2]]
        });
    }
};