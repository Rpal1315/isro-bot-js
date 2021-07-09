// require the discord.js module
const { Client, MessageEmbed } = require('discord.js');

// create a new Discord client
const client = new Client();
const today = new Date()
// when the client is ready, run this code
// this event will only trigger one time after logging in
keepAlive()
client.once('ready', () => {
	console.log('Ready as ' + client.user.tag);
	client.user.setPresence({
		status: 'idle'
	})
	client.user.setActivity("ISRO", {
		type: "WATCHING",
	});
});
client.on('message', message => {
	if (message.content === '!c_mission') {
		const embed = new MessageEmbed()
			.setTitle('Current Mission')
			.setColor('0xffe135')
			.setDescription('Mangalyaan-2')

		message.channel.send(embed)
	}
});

client.on('message', message => {

	if (message.content === '!c_help') {
		const embed = new MessageEmbed()
			.setTitle(' Help message. This bot is built by QATARI3#1111. The help is below ')
			.setColor('0xffe135')
			.setDescription('**!c_mission** - Gives the name of the ongoing mission')

		message.channel.send(embed)
	}
})
client.on('message', message => {
	if (message.content === '!c_on') {
		var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		const mess = 'Hey,<@' + message.author + '> is online at' + ' ' + date + ' ' + time + ' UTC';
		var chan = client.channels.cache.find(channel => channel.id === '862616964635426816');
		chan.send(mess);
	}
})
client.on('message', message => {
	if (message.content === '!c_off') {
		var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		const mess = 'Hey,<@' + message.author + '> is offline at' + ' ' + date + ' ' + time + ' UTC';
		var chan = client.channels.cache.find(channel => channel.id === '862616964635426816');
		chan.send(mess);
	}
})
client.on('guildMemberAdd', member => {
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.cache.find(ch => ch.id === '826034155413831680');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	channel.send(`Welcome to the server, ${member}`);
});
client.login('ODYyMjA5MDEwMjExMjI1NjQw.YOVAtw.3dYQWhjapN7piEhVGIlqmUnoJ94')
