const Discord = require('discord.js');
const { token } = require('./config.json');
const { prefix } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
  console.log("ล็อคอินบอท : ");
  console.log(client.user.username);
}); // ตัวแสดงหน้า console ว่าบอท login สำเร็จ

client.login(token)

// by Discord name : White_Cat#1226
