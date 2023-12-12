const { Collection, ChannelType, Events } = require("discord.js");
const { prefix, owner } = require("../config.json");

const escapeRegex = (string) => {
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		const { client, guild, channel, content, author } = message;

		if (author.bot) return;

		if (message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
			require("../messages/onMention").execute(message);
			return;
		}
	},
};
