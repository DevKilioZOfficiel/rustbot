const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.TOKEN;
const prefix = "rust!";


const defaultchannelwelcome = 394196679089192981;  // MODIFIABLE !
const channelautomessage = 394196679089192981;  // MODIFIABLE !

const snekfetch = require('snekfetch');
//=====Variables-Constances=====//
const memberCount = client.users.size;
const servercount = client.guilds.size;
const channels = client.channels.size;
const name = client.guilds.name;
const version_bot = "1.0.0";

//=====Démarrage=====//
client.on("ready", () => {
client.user.setStatus("online");
console.log("Nombre de membres: " + client.users.size + "\n[!]Nombre de serveurs: " + client.guilds.size +"\nNoms de serveurs: " + client.guilds.array().map(g => g.name).join('\n '));
});

//Logs
client.on("messageDelete", (message) => {
	const embed = new Discord.RichEmbed()
	.setColor("#EB2626")
    .addField("Suppresion d'un message", "Un message a été supprimé de " + message.member.user.toString() + "\n il contenait "+ "```" + message + "```")
    .addField("Salons", "Supprimé du salons " + message.channel.name)
    message.member.guild.channels.find("name", "logs").sendEmbed(embed)
})
	client.on('guildMemberAdd', member => {
	    member.guild.channels.find("id", "394196679089192981").send(`Hey **${member}**, bienvenue sur Rust 'A' Poil :tada::hugging: !`); 
		console.log(`Bienvenue **${member}** sur le serveur !`);
		client.user.setActivity(client.users.size + " Membres", { type: 'STREAMING' });
	});
	//client.on('guildMemberRemove', member => {
	//    member.guild.channels.find("id", "394196679089192981").send(`**${member}** vient de quitter le serveur !`); 
	//	console.log(`**${member}** vient de quitter le serveur !`);
	//	client.user.setActivity(client.users.size + " Membres", { type: 'STREAMING' });
	//});
//Les commandes / message
client.on('message', message => {
	
	

	
	if(message.content.startsWith(prefix + "start_messages")) {
			console.log(`Recherche en cours...`); // test dans la console
       var nombreAleatoire = 0; //Math.round(Math.random()*2);
	   console.log(`Message numéro ${nombreAleatoire} en cours d'envoi !`)
	setInterval (function () {
		if(nombreAleatoire == 0) { // début du message 0
        message.guild.channels.find("id", "394196679089192981").send("Un petit vote pour le serveur nous permet d'améliorer la visibilité, et ainsi agrandir la communauté.")
		message.guild.channels.find("id", "394196679089192981").send("https://rust.top-serveurs.net/fr-rust-a-poil-semi-rppvp-wipe-0706")
		message.guild.channels.find("id", "394196679089192981").send("Pour rejoindre le serveur : client.connect 178.32.98.230:27100")
		console.log(`Message numéro 0 envoyé !`); // validation
		message.guild.channels.find("name", "logs").send(prefix + "start_messages")
    }},3600000); // 1000 = 1 seconde
	}
				
		
	if (message.content == "clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                    message.reply("Tous les messages ont été supprimés");
                }, function(err){message.channel.send("ERREUR: AUCUN MESSAGE NE PEUT ETRE SUPPRIMÉS !!")})                        
        }
    }
	
    //donner l'avatar de quelqu'un
    const user = message.mentions.users.first()
       if(message.content.startsWith(prefix + "avatar")){
        	var htest = new Discord.RichEmbed()
        	 .setColor("#4B63EC")
        	 .addField("L'avatar de " + user.toString() + "est: " + message.mentions.users.first().displayAvatarURL, "© 2016-2018.Dev-TimeEU.")
        	 message.channel.sendEmbed(htest);
        message.delete();
};

//Logout
if (message.content.startsWith(prefix + "logout")) {

     if(message.author.id == "315144504246140929"){

      message.reply("Arrêt en cours");

        console.log('/ Je suis désormais offline par Malone / ');

        client.destroy();

        process.exit()

    } else {
    }
	
	 if(message.author.id == "368832865850621952"){

      message.reply("Arrêt en cours");

        console.log('/ Je suis désormais offline par KilioZ / ');

        client.destroy();

        process.exit()

    } else {
    }
  }
  
    if(message.content.startsWith(prefix + "sondage")){
        if(message.member.hasPermission("BAN_MEMBERS")) {
			
			let args = message.content.split(" ").slice(1);
			let thingToEcho = args.join(" ")
			var embed = new Discord.RichEmbed()
			    .setDescription('Sondage')
				.addField(thingToEcho, "Votez avec les réactions suivante :white_check_mark: ou :x:")
				.setColor("0xB40404")
				.setTimestamp()
			message.channel.sendEmbed(embed)
			.then(function (message){
				message.react("✅")
				message.react("❌")
			}).catch(function(){
				
			});
			message.delete()
		}else{
			return message.reply("Tu n'as pas la permission.")
        }
	}	
	
});
client.login(token)
