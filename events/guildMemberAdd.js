const { Events, EmbedBuilder } = require("discord.js");

module.exports = {
    name: Events.GuildMemberAdd,
    async execute(member) {
        if (member.guild.id !== "692363877371084810") return;

		const channel = member.guild.channels.cache.get("692363878138380350");

		if (!channel) return;

		await channel.send({ content: `Pozdravljen_a ${member}! Dobrodošel_a v **${member.guild.name}**!` });

		try {
			const embed = new EmbedBuilder()
				.setTitle(`Dobrodošel_a v našem DigiMC strežniku!`)
				.setDescription("Vabim te, da si prebereš naš program in pravila ter se sprehodiš po naših sobah. 🎉\n\n- <#728944972904005740> - Pravila 📗\n- <#796379280476995584> - Obvestila 📢\n- <#778625011384320000> - Nastavljanje vlog 🍥\n- <#780391234627436614> - Predstavitev članov/prostovoljcev Mladih zmajev 👋\n\nDigiMC ti ponuja bogat program in je zate odprt 24/7. 😲\n\nProsimo te, da dosledno spoštuješ naša pravila in se v primeru vprašanj obrneš na Glavnega uličarja ali nekoga od moderatorjev.\n\nVeselimo se sodelovanja! 😎\nDigiMC crew")
				.setColor("Random")
				.setFooter({ text: "DigiMC", iconURL: member.guild.iconURL({ dynamic: true }) })
				.setTimestamp();

			await member.user.send({ embeds: [embed] });
		} catch (err) {
			console.log(`${member.user.username} ni bilo možno poslati direktnega sporočila.`)
		}
    }
}