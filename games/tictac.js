const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

// Class za igro 

class TicTacToe {
    // Konstruktor, da lahko dostopamo do polja

    constructor(board) {
        this.board = board;
    }

    // Getter za polje

    getBoard() {
        return this.board;
    }

    // Getter za zmagovalca

    getWinner() {
        // Dobimo trenutno polje

        const board = this.board;

        // Ok veliki špageti ampak tukaj samo preverjamo, če je kje 3 v vrsto in vrnemo message, ki ga bomo editali

        for (let i = 0; i < 9; i += 3) {
            if (board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
                if (board[i] === " ") continue;

                let field1;
                let field2;
                let field3;

                if (i === 0) {
                    field1 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("1-tic")
                                .setLabel(board[0])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("2-tic")
                                .setLabel(board[1])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("3-tic")
                                .setLabel(board[2])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true)
                        )

                    field2 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("4-tic")
                                .setLabel(board[3] === " " ? "4" : board[3])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("5-tic")
                                .setLabel(board[4] === " " ? "5" : board[4])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("6-tic")
                                .setLabel(board[5] === " " ? "6" : board[5])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true)
                        )

                    field3 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("7-tic")
                                .setLabel(board[6] === " " ? "7" : board[6])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("8-tic")
                                .setLabel(board[7] === " " ? "8" : board[7])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("9-tic")
                                .setLabel(board[8] === " " ? "9" : board[8])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true)
                        )
                }

                if (i === 3) {
                    field2 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("4-tic")
                                .setLabel(board[3])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("5-tic")
                                .setLabel(board[4])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("6-tic")
                                .setLabel(board[5])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true)
                        )

                    field1 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("1-tic")
                                .setLabel(board[0] === " " ? "1" : board[0])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("2-tic")
                                .setLabel(board[1] === " " ? "2" : board[1])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("3-tic")
                                .setLabel(board[2] === " " ? "3" : board[2])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true)
                        )

                    field3 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("7-tic")
                                .setLabel(board[6] === " " ? "7" : board[6])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("8-tic")
                                .setLabel(board[7] === " " ? "8" : board[7])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("9-tic")
                                .setLabel(board[8] === " " ? "9" : board[8])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true)
                        )
                }

                if (i === 6) {
                    field3 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("7-tic")
                                .setLabel(board[6])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("8-tic")
                                .setLabel(board[7])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("9-tic")
                                .setLabel(board[8])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true)
                        )

                    field1 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("1-tic")
                                .setLabel(board[0] === " " ? "1" : board[0])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("2-tic")
                                .setLabel(board[1] === " " ? "2" : board[1])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("3-tic")
                                .setLabel(board[2] === " " ? "3" : board[2])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true)
                        )

                    field2 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("4-tic")
                                .setLabel(board[3] === " " ? "4" : board[3])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("5-tic")
                                .setLabel(board[4] === " " ? "5" : board[4])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("6-tic")
                                .setLabel(board[5] === " " ? "6" : board[5])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true)
                        )
                }

                const newBoardMessage = [field1, field2, field3, board[i]];

                return newBoardMessage;
            }
        }

        for (let i = 0; i < 3; i++) {
            if (board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
                if (board[i] === " ") continue;

                let field1;
                let field2;
                let field3;

                if (i === 0) {
                    field1 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("1-tic")
                                .setLabel(board[0])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("2-tic")
                                .setLabel(board[1] === " " ? "2" : board[1])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("3-tic")
                                .setLabel(board[2] === " " ? "3" : board[2])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true)
                        )

                    field2 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("4-tic")
                                .setLabel(board[3])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("5-tic")
                                .setLabel(board[4] === " " ? "5" : board[4])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("6-tic")
                                .setLabel(board[5] === " " ? "6" : board[5])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true)
                        )

                    field3 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("7-tic")
                                .setLabel(board[6])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("8-tic")
                                .setLabel(board[7] === " " ? "8" : board[7])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("9-tic")
                                .setLabel(board[8] === " " ? "9" : board[8])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true)
                        )
                }

                else if (i === 1) {
                    field2 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("4-tic")
                                .setLabel(board[3] === " " ? "4" : board[3])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("5-tic")
                                .setLabel(board[4])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("6-tic")
                                .setLabel(board[5] === " " ? "6" : board[5])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true)
                        )

                    field1 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("1-tic")
                                .setLabel(board[0] === " " ? "1" : board[0])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("2-tic")
                                .setLabel(board[1])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("3-tic")
                                .setLabel(board[2] === " " ? "3" : board[2])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true)
                        )

                    field3 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("7-tic")
                                .setLabel(board[6] === " " ? "7" : board[6])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("8-tic")
                                .setLabel(board[7])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("9-tic")
                                .setLabel(board[8] === " " ? "9" : board[8])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true)
                        )
                }

                else if (i === 2) {
                    field3 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("7-tic")
                                .setLabel(board[6] === " " ? "7" : board[6])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("8-tic")
                                .setLabel(board[7] === " " ? "8" : board[7])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("9-tic")
                                .setLabel(board[8])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true)
                        )

                    field1 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("1-tic")
                                .setLabel(board[0] === " " ? "1" : board[0])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("2-tic")
                                .setLabel(board[1] === " " ? "2" : board[1])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("3-tic")
                                .setLabel(board[2])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true)
                        )

                    field2 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("4-tic")
                                .setLabel(board[3] === " " ? "4" : board[3])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("5-tic")
                                .setLabel(board[4] === " " ? "5" : board[4])
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                            new ButtonBuilder()
                                .setCustomId("6-tic")
                                .setLabel(board[5])
                                .setStyle(ButtonStyle.Success)
                                .setDisabled(true)
                        )
                }


                const newBoardMessage = [field1, field2, field3, board[i]];

                return newBoardMessage;
            }
        }

        if (board[0] === board[4] && board[4] === board[8]) {
            if (board[0] === " ") return null;
            const field1 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId("1-tic")
                        .setLabel(board[0])
                        .setStyle(ButtonStyle.Success)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("2-tic")
                        .setLabel(board[1] === " " ? "2" : board[1])
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("3-tic")
                        .setLabel(board[2] === " " ? "3" : board[2])
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true)
                )

            const field2 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId("4-tic")
                        .setLabel(board[3] === " " ? "4" : board[3])
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("5-tic")
                        .setLabel(board[4])
                        .setStyle(ButtonStyle.Success)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("6-tic")
                        .setLabel(board[5] === " " ? "6" : board[5])
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true)
                )

            const field3 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId("7-tic")
                        .setLabel(board[6] === " " ? "7" : board[6])
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("8-tic")
                        .setLabel(board[7] === " " ? "8" : board[7])
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("9-tic")
                        .setLabel(board[8])
                        .setStyle(ButtonStyle.Success)
                        .setDisabled(true)
                )

            const newBoardMessage = [field1, field2, field3, board[0]];

            return newBoardMessage;
        }

        if (board[2] === board[4] && board[4] === board[6]) {
            if (board[2] === " ") return null;
            const field1 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId("1-tic")
                        .setLabel(board[0] === " " ? "1" : board[0])
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("2-tic")
                        .setLabel(board[1] === " " ? "2" : board[1])
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("3-tic")
                        .setLabel(board[2])
                        .setStyle(ButtonStyle.Success)
                        .setDisabled(true)
                )

            const field2 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId("4-tic")
                        .setLabel(board[3] === " " ? "4" : board[3])
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("5-tic")
                        .setLabel(board[4])
                        .setStyle(ButtonStyle.Success)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("6-tic")
                        .setLabel(board[5] === " " ? "6" : board[5])
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true)
                )

            const field3 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId("7-tic")
                        .setLabel(board[6])
                        .setStyle(ButtonStyle.Success)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("8-tic")
                        .setLabel(board[7] === " " ? "8" : board[7])
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("9-tic")
                        .setLabel(board[8] === " " ? "9" : board[8])
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true)
                )

            const newBoardMessage = [field1, field2, field3, board[2]];

            return newBoardMessage;
        }

        // Preverimo, če je izenačeno

        if (!board.includes(" ")) return "tie";

        // Če ni nič od zgoraj, vrnemo null

        return null;
    }

    // Getter za message polja

    getBoardMessage() {
        // Dobimo trenutno polje

        const board = this.board;

        // Sestavimo gumbe za polje

        const field1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("1-tic")
                    // Če ta del še ni bil izbran, potem je label številka, drugače pa je label X ali O
                    .setLabel(board[0] === " " ? "1" : board[0])
                    // Če je label številka, potem je gumb modre barve, drugače pa je gumb rdeče ali zelene barve (odvisno od znaka)
                    .setStyle(board[0] === " " ? ButtonStyle.Primary : board[0] === "X" ? ButtonStyle.Danger : ButtonStyle.Success)
                    // Če label ni številka je gumb onemogočen
                    .setDisabled(board[0] !== " ")
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("2-tic")
                    .setLabel(board[1] === " " ? "2" : board[1])
                    .setStyle(board[1] === " " ? ButtonStyle.Primary : board[1] === "X" ? ButtonStyle.Danger : ButtonStyle.Success)
                    .setDisabled(board[1] !== " ")
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("3-tic")
                    .setLabel(board[2] === " " ? "3" : board[2])
                    .setStyle(board[2] === " " ? ButtonStyle.Primary : board[2] === "X" ? ButtonStyle.Danger : ButtonStyle.Success)
                    .setDisabled(board[2] !== " ")
            );

        const field2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("4-tic")
                    .setLabel(board[3] === " " ? "4" : board[3])
                    .setStyle(board[3] === " " ? ButtonStyle.Primary : board[3] === "X" ? ButtonStyle.Danger : ButtonStyle.Success)
                    .setDisabled(board[3] !== " ")
            )

            .addComponents(
                new ButtonBuilder()
                    .setCustomId("5-tic")
                    .setLabel(board[4] === " " ? "5" : board[4])
                    .setStyle(board[4] === " " ? ButtonStyle.Primary : board[4] === "X" ? ButtonStyle.Danger : ButtonStyle.Success)
                    .setDisabled(board[4] !== " ")
            )

            .addComponents(
                new ButtonBuilder()
                    .setCustomId("6-tic")
                    .setLabel(board[5] === " " ? "6" : board[5])
                    .setStyle(board[5] === " " ? ButtonStyle.Primary : board[5] === "X" ? ButtonStyle.Danger : ButtonStyle.Success)
                    .setDisabled(board[5] !== " ")
            );

        const field3 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("7-tic")
                    .setLabel(board[6] === " " ? "7" : board[6])
                    .setStyle(board[6] === " " ? ButtonStyle.Primary : board[6] === "X" ? ButtonStyle.Danger : ButtonStyle.Success)
                    .setDisabled(board[6] !== " ")
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("8-tic")
                    .setLabel(board[7] === " " ? "8" : board[7])
                    .setStyle(board[7] === " " ? ButtonStyle.Primary : board[7] === "X" ? ButtonStyle.Danger : ButtonStyle.Success)
                    .setDisabled(board[7] !== " ")
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("9-tic")
                    .setLabel(board[8] === " " ? "9" : board[8])
                    .setStyle(board[8] === " " ? ButtonStyle.Primary : board[8] === "X" ? ButtonStyle.Danger : ButtonStyle.Success)
                    .setDisabled(board[8] !== " ")
            );

        // Vrnemo vse tri gumbe

        return [field1, field2, field3];
    }
}

module.exports = TicTacToe;