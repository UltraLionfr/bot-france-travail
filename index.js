const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const cron = require('node-cron');
const dotenv = require('dotenv');
const fs = require('fs');
const YAML = require('yaml');

// Charger les variables d'environnement
dotenv.config();

// Charger les configurations depuis config.yml
const file = fs.readFileSync('./config.yml', 'utf8');
const config = YAML.parse(file);

// Initialiser le client Discord
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

// Fonction pour envoyer le rappel sous forme d'embed avec bouton
function sendReminder() {
  const channel = client.channels.cache.get(process.env.CHANNEL_ID);
  if (channel) {
    // Créer l'embed
    const embed = new EmbedBuilder()
      .setColor(0x1d82b6) // Couleur personnalisée
      .setTitle("📅 Rappel Mensuel - France Travail")
      .setDescription(config.reminder.message)
      .setThumbnail(config.reminder.logo)
      .setFooter({ text: "Propulsé par QuantumCraft Studios" })
      .setTimestamp();

    // Créer le bouton de lien
    const button = new ButtonBuilder()
      .setLabel("Connexion France Travail")
      .setStyle(ButtonStyle.Link)
      .setURL(config.reminder.link);

    // Créer une ligne d'action pour le bouton
    const row = new ActionRowBuilder().addComponents(button);

    // Envoyer le message avec l'embed et le bouton
    channel.send({ content: "@everyone", embeds: [embed], components: [row] });
  } else {
    console.log("Canal non trouvé.");
  }
}

// Événement pour quand le bot est prêt
client.once('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);

  // Planifier la tâche avec node-cron pour toutes les 30 secondes
  cron.schedule(config.reminder.cron, () => {
    sendReminder();
    console.log('Rappel envoyé toutes les 30 secondes.');
  });
});

// Connexion du bot
client.login(process.env.DISCORD_TOKEN);