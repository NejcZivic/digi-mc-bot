const C4 = require("../../../games/c4.js");

module.exports = {
	id: "accept-4",
	async execute(interaction) {
		// Dobimo oba igralca

		const player1 = interaction.user;

		// Preverimo, če je gumb pritisnil igralec, ki je bil izzvan

		if (player1 !== interaction.message.mentions.users.first()) return interaction.reply({ content: "Izziv ni zate!", ephemeral: true });
		const player2 = interaction.client.users.cache.find(m => m.username === interaction.message.content.split("**")[1].split("**")[0]);

		// Naredimo array, ki predstavlja polje

		let field = [];

		// Napolnimo array s praznimi polji (beli krogi)

		for (i = 0; i < 6; i++) {
			field.push([]);
			for (j = 0; j < 7; j++) {
				field[i].push(":white_circle: ");
			}
		}

		// Naredimo novo igro

		const game = new C4(field);

		// Naredimo message, ki predstavlja polje

		const board = game.getFieldMessage();

		// Pošljemo message

		await interaction.message.edit({
			content: `Na vrsti je **${player1.username} (:yellow_circle:)**\n\nIgra **${player1.username} (:yellow_circle:)** proti **${player2.username} (:red_circle:)**!\n\n${board[0]}`,
			components: []
		});

		// Naredimo array z reakcijami

		const reactions = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣"];

		// Naredimo filter za reakcije (če je reakcija v arrayu reactions in če je igralec, ki je pritisnil na reakcijo, enak igralcu, ki je na vrsti)

		const filter = (reaction, user) => {
			return reactions.includes(reaction.emoji.name) && interaction.message.content.split("**")[1].split(" (")[0] === user.username;
		}

		// Naredimo collector za reakcije

		const collector = interaction.message.createReactionCollector({ filter, time: 900000 });

		let previousBoard;

		collector.on("collect", async (reaction, user) => {
			// Določimo barvo, ki jo bo igralec postavil

			const color = interaction.message.content.split("**")[1].split(" (")[1].split(")")[0];

			// Določimo stolpec, v katerega bo igralec postavil barvo

			const column = reactions.indexOf(reaction.emoji.name) + 1;

			// Postavimo barvo v stolpec

			game.placeChip(column, color);

			// Dobimo novo stanje igre

			const newBoardMessage = game.getFieldMessage();

			// Če se polje ni spremenilo aka. če je stolpec na katerega je kliknil igralec poln, potem odstranimo reakcijo in nadaljujemo igro

			if (newBoardMessage == previousBoard) {
				reaction.users.remove(user.id);
			}

			// Nastavimo prejšnje polje na novo polje

			previousBoard = newBoardMessage;

			// Preverimo, če je igralec zmagal

			const winner = game.getWinner();

			if (winner) {
				interaction.message.edit({
					content: `Igralec **${winner === ":yellow_circle: " ? interaction.message.content.split("**")[3].split(" (")[0] : interaction.message.content.split("**")[5].split(" (")[0]} (${winner})** je zmagal!\n\n${newBoardMessage[0]}`,
				})
				return;
			}

			// Če ni zmagovalec, potem nadaljujemo igro

			await interaction.message.edit({
				content: `Na vrsti je **${color === ":yellow_circle:" ? interaction.message.content.split("**")[5].split(" (")[0] : interaction.message.content.split("**")[3].split(" (")[0]} (${color === ":yellow_circle:" ? ":red_circle:" : ":yellow_circle:"})**\n\nIgra **${interaction.message.content.split("**")[3].split(" (")[0]} (:yellow_circle:)** proti **${interaction.message.content.split("**")[5].split(" (")[0]} (:red_circle:)**!\n\n${newBoardMessage[0]}`,
			});
			reaction.users.remove(user.id);
		});

		// Dodamo reakcije na message

		for (let i = 0; i < 7; i++) {
			await interaction.message.react(reactions[i]);
		}
	},
};