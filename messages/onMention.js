const { prefix } = require("../config.json");

module.exports = {
	async execute(message) {
		return message.channel.send(
			`Hej, če še nisi vedel_a, uporabljam slash komande. Napiši \`/help\` za seznam vseh možnih ukazov.`
		);
	},
};
