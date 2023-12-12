const { Events, ActivityType, EmbedBuilder, AttachmentBuilder } = require("discord.js");
const fs = require("fs");
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		client.user.setPresence({
			activities: [
				{
					name: "hahaball",
					type: 4,
					state: "Opazujem mladinski center"
				}
			],
			status: "online"
		});

		let sent = false;

		setInterval(async () => {
			const day = new Date().getDay();

			if (day !== 4) return;

			const time = new Date().getHours();

			if (time !== 15) {
				sent = false;
				return;
			}

			if (sent) return;

			sent = true;

			const browser = await puppeteer.launch({
				headless: "new",
				args: [
					'--no-sandbox',
					'--disable-setuid-sandbox',
				]
			});
	
			const page = await browser.newPage();
			await page.goto('https://www.instagram.com/headspace/', { waitUntil: 'networkidle0' });
			const html = await page.content();
			const $ = cheerio.load(html);
	
			const postLink = $('a[class*="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _a6hd"]').first().attr('href');
	
			await page.goto(`https://www.instagram.com/${postLink}`, { waitUntil: 'networkidle0' });
			const newHtml = await page.content();
			const new$ = cheerio.load(newHtml);
	
			const video = new$('div[class*="x5yr21d x1uhb9sk xh8yej3"]').first().children().first().attr('src');
	
			if (video) {
				const blob = await fetch(video).then(r => r.blob());
	
				const buffer = await blob.arrayBuffer();
				const array = new Uint8Array(buffer);
	
				fs.writeFileSync("post.mp4", array);
	
				const bufferFile = fs.readFileSync("post.mp4");
	
				const attachment = new AttachmentBuilder(bufferFile, { name: "post.mp4" });
	
				const channel = client.channels.cache.get("692368107825528936");
	
				channel.send({
					files: [attachment]
				});
			}
	
			else {
				const image = new$('div[class*="_aagv"]').first().children().first().attr('src');
	
				const blob = await fetch(image).then(r => r.blob());
	
				const buffer = await blob.arrayBuffer();
				const array = new Uint8Array(buffer);
	
				fs.writeFileSync("post.png", array);
	
				const bufferFile = fs.readFileSync("post.png");
	
				const attachment = new AttachmentBuilder(bufferFile, { name: "post.png" });
	
				const channel = client.channels.cache.get("692368107825528936");
	
				channel.send({
					files: [attachment]
				})
			}

			sent = true;
		}, 1000);
	},
};
