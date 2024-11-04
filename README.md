# 🤖 Bot Discord - France Travail

> **Bot de rappel mensuel pour les utilisateurs de France Travail**

Ce bot Discord rappelle chaque mois aux utilisateurs de s'actualiser sur France Travail en envoyant un message mentionnant `@everyone` dans un canal spécifique, avec un bouton qui redirige vers la page de connexion de France Travail.

## ✨ Fonctionnalités

- 📅 **Rappel mensuel** : Envoie un message de rappel chaque 28 du mois avec une mention `@everyone`.
- 🎨 **Personnalisation** : Message de rappel stylisé dans un embed avec un logo et un bouton redirigeant vers la page de connexion de France Travail.
- ⚙️ **Configuration flexible** : Les informations sensibles et les paramètres sont facilement configurables via des fichiers `.env` et `config.yml`.

## 🛠️ Prérequis

- **Node.js** version 16.9.0 ou supérieure
- **Discord.js** version 14.16.3
- **Token Discord** pour le bot (disponible sur le [Discord Developer Portal](https://discord.com/developers/applications))

## 🚀 Installation

1. Clonez ce dépôt :

   ```bash
   git clone https://github.com/UltraLionfr/bot-france-travail.git
   cd bot-france-travail
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

## 🔧 Configuration

1. **Fichier `.env`** : Créez un fichier `.env` à la racine du projet pour stocker votre token Discord et l'ID du canal où le message sera envoyé.

   ```env
   DISCORD_TOKEN=VOTRE_TOKEN_IÇI
   CHANNEL_ID=ID_DU_CANAL
   ```

2. **Fichier `config.yml`** : Configurez le message, le lien de connexion et le logo dans `config.yml`.

   ```yaml
   reminder:
      # Minute (0) : La tâche est exécutée à la minute 0.
      # Heure (10) : La tâche est exécutée à 10h.
      # Jour du mois (28) : La tâche est exécutée le 28e jour du mois.
      # Mois (*) : La tâche est exécutée tous les mois.
      #Jour de la semaine (*) : La tâche est exécutée quel que soit le jour de la semaine.
      cron: '0 10 28 * *' # chaque 28 du mois à 10h00
      message: "@everyone N’oubliez pas de vous actualiser sur France Travail !"
      link: "https://candidat.francetravail.fr/espacepersonnel/"
      logo: "https://i.imgur.com/UOhAOlX.png" #logo
   ```

## ▶️ Utilisation

Pour démarrer le bot, utilisez la commande suivante :

```bash
npm start
```

## 🎨 Personnalisation

- ⏰ **Horaires de rappel** : Vous pouvez modifier l'intervalle de rappel en ajustant l'expression `cron` dans `config.yml`. Par exemple, pour un rappel mensuel le 28 de chaque mois à 10h00, utilisez `0 10 28 * *`.
- 💬 **Message et lien** : Le message de rappel et le lien de connexion peuvent être modifiés dans `config.yml` sans toucher au code.

## 📦 Dépendances

- [discord.js](https://discord.js.org/) - 📜 Bibliothèque principale pour l'intégration avec Discord.
- [dotenv](https://www.npmjs.com/package/dotenv) - 🔒 Gestion des variables d'environnement.
- [node-cron](https://www.npmjs.com/package/node-cron) - ⏲️ Programmation de tâches récurrentes.
- [yaml](https://www.npmjs.com/package/yaml) - 🛠️ Gestion des fichiers de configuration au format YAML.

## 🤝 Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à soumettre des issues et des pull requests.

## 📄 Licence

Ce projet est sous licence ISC.

---
