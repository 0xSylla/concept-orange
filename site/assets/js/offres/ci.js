/*
 * Orange Côte d'Ivoire — contenu des pages d'offre (offre.html?pays=ci&offre=<id>).
 * Une entrée par carré de la section « Nos offres » (même id que dans pays/ci.js).
 * Blocs possibles : 'tarifs' (cartes de prix) ou 'compatible' (recherche de téléphones, commune à tous les pays).
 * TODO : contenus, prix et conditions ILLUSTRATIFS (concept) — à remplacer par ceux de la filiale (orange.ci).
 */
(window.ORANGE_OFFRES = window.ORANGE_OFFRES || {}).ci = {
  internet: {
    titre: 'Internet mobile.',
    accroche: 'Le bon pass, pour la journée ou pour le mois.',
    intro: 'Vidéos, réseaux sociaux, travail : choisissez un pass Internet adapté à votre usage et suivez votre consommation en direct dans Max it.',
    cta: 'Choisir mon pass',
    avantages: [
      { t: 'La 4G partout', x: 'Dans les grandes villes comme sur les routes, avec la 5G à Abidjan, Yamoussoukro, Bouaké et San-Pédro.' },
      { t: 'Sans engagement', x: 'Un pass à la fois, renouvelable quand vous voulez, sans abonnement.' },
      { t: 'Le reste reporté', x: 'Renouvelez avant la fin de validité : vos Go restants s’ajoutent au nouveau pass.' },
    ],
    etapes: { titre: 'Activer un pass', liste: [
      { t: 'Ouvrez Max it', x: 'Ou composez #144# depuis votre ligne Orange.' },
      { t: 'Choisissez', x: 'La quantité d’Internet et la durée qui vous conviennent.' },
      { t: 'Payez', x: 'Avec votre crédit ou avec Orange Money : le pass est actif tout de suite.' },
    ] },
    bloc: { type: 'tarifs', titre: 'Nos pass Internet', offres: [
      { nom: 'Pass Jour', contenu: ['1 Go'], validite: '24 h', prix: 300 },
      { nom: 'Pass Semaine', contenu: ['5 Go'], validite: '7 jours', prix: 1500, vedette: true },
      { nom: 'Pass Mois', contenu: ['15 Go'], validite: '30 jours', prix: 5000 },
      { nom: 'Pass Mois Max', contenu: ['50 Go'], validite: '30 jours', prix: 10000 },
    ] },
    faq: [
      { q: 'Comment connaître mon solde Internet ?', r: 'Dans l’app Max it, en page d’accueil, ou en composant #144#.' },
      { q: 'Que se passe-t-il quand mon pass est épuisé ?', r: 'La connexion s’arrête : vous ne payez jamais de hors-forfait sans le savoir. Un SMS vous prévient avant.' },
      { q: 'Puis-je partager ma connexion ?', r: 'Oui, le partage de connexion est inclus dans tous les pass.' },
    ],
  },

  appels: {
    titre: 'Appels & SMS.',
    accroche: 'Tous les réseaux, ici et à l’étranger.',
    intro: 'Des minutes vers tous les opérateurs ivoiriens et vers plus de 50 pays, en pass ou au crédit.',
    cta: 'Choisir mon pass',
    avantages: [
      { t: 'Tous les réseaux', x: 'Vos minutes valent vers tous les opérateurs de Côte d’Ivoire.' },
      { t: 'L’international', x: 'Des pass dédiés pour appeler la famille en Afrique, en Europe et ailleurs.' },
      { t: 'Appels HD', x: 'La voix sur 4G : un son clair, et l’Internet qui continue pendant l’appel.' },
    ],
    etapes: { titre: 'Activer un pass', liste: [
      { t: 'Ouvrez Max it', x: 'Ou composez #144# depuis votre ligne Orange.' },
      { t: 'Choisissez', x: 'Local ou international, à la journée ou au mois.' },
      { t: 'Appelez', x: 'Le pass est actif dès le paiement, au crédit ou avec Orange Money.' },
    ] },
    bloc: { type: 'tarifs', titre: 'Nos pass appels', offres: [
      { nom: 'Pass Appels Jour', contenu: ['30 min tous réseaux'], validite: '24 h', prix: 300 },
      { nom: 'Pass Appels Semaine', contenu: ['120 min tous réseaux', '100 SMS'], validite: '7 jours', prix: 1500, vedette: true },
      { nom: 'Pass Monde', contenu: ['60 min vers 50 pays'], validite: '30 jours', prix: 5000 },
    ] },
    faq: [
      { q: 'Vers quels pays puis-je appeler avec le Pass Monde ?', r: 'Les principaux pays d’Afrique de l’Ouest, d’Europe et l’Amérique du Nord. La liste complète est dans Max it.' },
      { q: 'Mes minutes non utilisées sont-elles perdues ?', r: 'Elles sont reportées si vous renouvelez le même pass avant la fin de validité.' },
      { q: 'Comment activer les appels HD ?', r: 'Ils sont activés automatiquement sur les téléphones compatibles, sous couverture 4G.' },
    ],
  },

  esim: {
    titre: 'La eSIM.',
    accroche: 'Votre SIM, sans la carte.',
    intro: 'La eSIM est une carte SIM intégrée à votre téléphone. Vous gardez votre numéro et vos offres, sans carte à insérer ni à perdre.',
    cta: 'Obtenir ma eSIM',
    avantages: [
      { t: 'Rien à insérer', x: 'Votre ligne s’installe en scannant un code : pas de carte à couper, à perdre ou à abîmer.' },
      { t: 'Deux lignes', x: 'Gardez une SIM physique et ajoutez une eSIM : perso et pro sur le même téléphone.' },
      { t: 'Plus sûr', x: 'Téléphone perdu ou volé : la eSIM ne peut pas être retirée, et votre ligne se bloque à distance.' },
    ],
    etapes: { titre: 'Obtenir votre eSIM', liste: [
      { t: 'Vérifiez', x: 'Que votre téléphone est compatible (liste ci-dessous, ou composez *#06#).' },
      { t: 'Passez en boutique', x: 'Avec votre pièce d’identité : un conseiller vous remet votre code eSIM.' },
      { t: 'Scannez', x: 'Le code avec votre téléphone, connecté au Wi-Fi : votre ligne est active en quelques minutes.' },
    ] },
    bloc: { type: 'compatible', titre: 'Votre téléphone est-il compatible ?' },
    faq: [
      { q: 'Puis-je garder mon numéro ?', r: 'Oui. Votre numéro, votre crédit et vos offres passent sur la eSIM.' },
      { q: 'Que faire si je change de téléphone ?', r: 'Passez en boutique ou contactez le service client : un nouveau code eSIM vous est remis pour le nouveau téléphone.' },
      { q: 'Combien coûte la eSIM ?', r: 'Le même prix qu’une carte SIM classique (tarif à vérifier en boutique).' },
    ],
  },

  maison: {
    titre: 'Internet à la maison.',
    accroche: 'Toute la famille connectée.',
    intro: 'La fibre là où elle passe, la box 4G partout ailleurs : du très haut débit à la maison, sans attendre une ligne fixe.',
    cta: 'Tester mon éligibilité',
    avantages: [
      { t: 'La fibre', x: 'Jusqu’à plusieurs centaines de Mb/s pour les films, les cours en ligne et le télétravail.' },
      { t: 'La box 4G', x: 'Branchez, c’est connecté : idéal là où la fibre n’est pas encore arrivée.' },
      { t: 'Installation suivie', x: 'Un technicien installe et configure votre box, et vous suivez son passage dans Max it.' },
    ],
    etapes: { titre: 'Être raccordé', liste: [
      { t: 'Testez', x: 'Votre adresse : fibre ou box 4G, nous vous disons ce qui est disponible.' },
      { t: 'Choisissez', x: 'Votre offre et votre créneau d’installation.' },
      { t: 'Profitez', x: 'Un technicien installe tout chez vous, et c’est parti.' },
    ] },
    bloc: { type: 'tarifs', titre: 'Nos offres maison', offres: [
      { nom: 'Box 4G', contenu: ['100 Go', 'Wi-Fi pour toute la maison'], validite: '30 jours', prix: 15000 },
      { nom: 'Fibre Essentiel', contenu: ['Internet illimité', 'Jusqu’à 50 Mb/s'], validite: 'Par mois', prix: 20000, vedette: true },
      { nom: 'Fibre Max', contenu: ['Internet illimité', 'Jusqu’à 200 Mb/s', 'Appels fixes inclus'], validite: 'Par mois', prix: 35000 },
    ] },
    faq: [
      { q: 'La fibre est-elle disponible chez moi ?', r: 'Testez votre adresse en boutique ou dans Max it : la fibre se déploie quartier par quartier.' },
      { q: 'Combien de temps pour l’installation ?', r: 'Quelques jours en général après la souscription, selon votre quartier.' },
      { q: 'Puis-je emporter la box 4G ?', r: 'Oui : elle fonctionne partout où il y a de la 4G Orange.' },
    ],
  },

  energie: {
    titre: 'Orange Énergie.',
    accroche: 'La lumière, payée petit à petit.',
    intro: 'Un kit solaire installé chez vous, que vous payez à votre rythme avec Orange Money. À la fin des paiements, il est à vous.',
    cta: 'Demander un kit',
    avantages: [
      { t: 'Sans réseau électrique', x: 'Le soleil recharge la batterie le jour : la lumière et la télé fonctionnent le soir.' },
      { t: 'Payé à votre rythme', x: 'Un petit acompte, puis des paiements par jour, semaine ou mois avec Orange Money.' },
      { t: 'À vous au bout', x: 'Les paiements terminés, le kit vous appartient. Plus rien à payer.' },
    ],
    etapes: { titre: 'Avoir votre kit', liste: [
      { t: 'Choisissez', x: 'Le kit adapté à votre foyer : lampes, télé, recharge de téléphones.' },
      { t: 'Payez l’acompte', x: 'Avec Orange Money : un technicien vient installer le kit.' },
      { t: 'Rechargez', x: 'Votre kit avec Orange Money, comme un crédit, quand vous voulez.' },
    ] },
    bloc: { type: 'tarifs', titre: 'Nos kits solaires', offres: [
      { nom: 'Kit Lumière', contenu: ['3 lampes', 'Recharge de téléphones'], validite: 'Par jour', prix: 150 },
      { nom: 'Kit Télé', contenu: ['4 lampes', 'Télé 24 pouces', 'Recharge de téléphones'], validite: 'Par jour', prix: 350, vedette: true },
      { nom: 'Kit Famille', contenu: ['6 lampes', 'Télé 32 pouces', 'Ventilateur'], validite: 'Par jour', prix: 500 },
    ] },
    faq: [
      { q: 'Que se passe-t-il si je ne paie pas un jour ?', r: 'Le kit se met en pause, sans pénalité, et repart dès le paiement suivant.' },
      { q: 'Qui entretient le kit ?', r: 'Un technicien Orange Énergie intervient en cas de panne pendant toute la durée des paiements.' },
      { q: 'Combien de temps pour qu’il soit à moi ?', r: 'Selon le kit et votre rythme de paiement, en général entre 12 et 24 mois.' },
    ],
  },

  // page Orange Bank : ouverte depuis la section Orange Bank de l'accueil (hors carrés « Nos offres »)
  bank: {
    nom: 'Orange Bank', img: 'ci/offre-bank', alt: 'Une jeune commerçante paie avec sa carte prépayée et consulte son compte sur son téléphone',
    titre: 'Orange Bank.',
    accroche: 'La banque, dans votre téléphone.',
    intro: 'Épargnez, empruntez et payez partout avec la carte prépayée : un compte ouvert en quelques minutes, sans passer au guichet.',
    cta: 'Ouvrir mon compte',
    avantages: [
      { t: 'Épargner', x: 'Mettez de l’argent de côté depuis Orange Money, et regardez-le grandir.' },
      { t: 'Emprunter', x: 'Un petit crédit en quelques minutes, remboursé à votre rythme.' },
      { t: 'La carte prépayée', x: 'Payez en boutique, en ligne et à l’étranger, rechargée depuis Orange Money.' },
    ],
    etapes: { titre: 'Ouvrir un compte', liste: [
      { t: 'Ouvrez Max it', x: 'Rubrique Orange Bank, avec votre compte Orange Money.' },
      { t: 'Identifiez-vous', x: 'Avec votre pièce d’identité, directement dans l’app.' },
      { t: 'C’est prêt', x: 'Épargnez tout de suite, et commandez votre carte prépayée.' },
    ] },
    bloc: { type: 'tarifs', titre: 'Nos produits', offres: [
      { nom: 'Épargne', contenu: ['Sans minimum', 'Retrait à tout moment'], validite: 'Ouverture', prix: 'Gratuit' },
      { nom: 'Carte prépayée', contenu: ['Paiements en ligne et en boutique', 'Rechargée par Orange Money'], validite: 'Par an', prix: 5000, vedette: true },
      { nom: 'Prêt', contenu: ['De 5 000 à 500 000 FCFA', 'Réponse immédiate'], validite: 'Selon durée', prix: 'Sur demande' },
    ] },
    faq: [
      { q: 'Faut-il un compte Orange Money ?', r: 'Oui : votre compte Orange Bank est relié à Orange Money pour épargner, rembourser et recharger la carte.' },
      { q: 'Où puis-je utiliser la carte prépayée ?', r: 'Partout où les paiements par carte sont acceptés, en boutique et sur Internet.' },
      { q: 'Comment est calculé mon prêt ?', r: 'À partir de votre historique Orange Money : la réponse est donnée tout de suite dans l’app.' },
    ],
  },

  smartphones: {
    titre: 'Smartphones.',
    accroche: 'Le bon téléphone, payé en plusieurs fois.',
    intro: 'Les derniers modèles en boutique et en ligne, avec un pass Internet offert et le paiement en plusieurs fois avec Orange Money.',
    cta: 'Voir les smartphones',
    avantages: [
      { t: 'Payé en plusieurs fois', x: 'Un premier versement, puis le reste chaque mois avec Orange Money.' },
      { t: 'Internet offert', x: 'Un pass Internet offert avec chaque smartphone, pour bien commencer.' },
      { t: 'Prêt à l’emploi', x: 'Un conseiller transfère vos contacts et installe Max it avec vous.' },
    ],
    etapes: { titre: 'Acheter votre smartphone', liste: [
      { t: 'Choisissez', x: 'En boutique ou en ligne, avec les conseils d’un vendeur.' },
      { t: 'Payez', x: 'Comptant ou en plusieurs fois avec Orange Money.' },
      { t: 'Repartez connecté', x: 'Avec votre pass Internet offert déjà activé.' },
    ] },
    bloc: { type: 'tarifs', titre: 'Exemples de modèles', offres: [
      { nom: 'Smartphone 4G', contenu: ['Écran 6,5 pouces', '64 Go', 'Pass 5 Go offert'], validite: 'Ou 3 × 15 000', prix: 45000 },
      { nom: 'Smartphone 5G', contenu: ['Écran 6,6 pouces', '128 Go', 'Pass 15 Go offert'], validite: 'Ou 6 × 25 000', prix: 150000, vedette: true },
      { nom: 'Haut de gamme', contenu: ['eSIM', '256 Go', 'Pass 50 Go offert'], validite: 'Ou 12 × 45 000', prix: 540000 },
    ] },
    faq: [
      { q: 'Les téléphones sont-ils garantis ?', r: 'Oui, tous nos smartphones sont garantis au moins un an.' },
      { q: 'Comment fonctionne le paiement en plusieurs fois ?', r: 'Un premier versement en boutique, puis des prélèvements mensuels sur votre compte Orange Money.' },
      { q: 'Puis-je commander en ligne ?', r: 'Oui, avec livraison à domicile à Abidjan ou retrait en boutique.' },
    ],
  },

  // page Orange Money (bouton de la section Orange Money de l'accueil) — hors carrés « Nos offres »
  money: {
    nom: 'Orange Money', img: 'ci/money-boutique', alt: 'Un commerçant reçoit un paiement mobile dans sa boutique',
    titre: 'Orange Money.',
    accroche: 'Votre argent, toujours sur vous.',
    intro: 'Envoyer, payer, retirer, épargner : un compte Orange Money s’ouvre avec votre numéro Orange, sans compte bancaire.',
    cta: 'Ouvrir mon compte',
    avantages: [
      { t: 'Instantané', x: 'L’argent arrive en quelques secondes, de jour comme de nuit, partout en Côte d’Ivoire.' },
      { t: 'Sécurisé', x: 'Chaque opération est confirmée par votre code secret, que personne d’autre ne connaît.' },
      { t: 'Partout', x: 'Des milliers de points Orange Money pour déposer et retirer, même dans les villages.' },
    ],
    etapes: { titre: 'Ouvrir un compte', liste: [
      { t: 'Passez en point Orange Money', x: 'Avec votre pièce d’identité et votre ligne Orange.' },
      { t: 'Choisissez votre code', x: 'Un code secret à 4 chiffres, rien qu’à vous.' },
      { t: 'C’est prêt', x: 'Déposez de l’argent et utilisez Orange Money dans Max it ou avec le code #144#.' },
    ] },
    bloc: { type: 'services', titre: 'Tout ce que vous pouvez faire', liste: [
      { t: 'Envoyer', x: 'À n’importe quel numéro, même vers un autre opérateur.' },
      { t: 'Payer en boutique', x: 'Scannez le QR code du marchand : c’est payé, sans monnaie.' },
      { t: 'Payer vos factures', x: 'Électricité CIE, eau SODECI, abonnement TV, frais de scolarité : sans file d’attente.' },
      { t: 'Acheter du crédit', x: 'Pour vous ou pour un proche, à toute heure.' },
      { t: 'Retirer', x: 'En point Orange Money ou dans les distributeurs partenaires.' },
      { t: 'Recevoir de l’étranger', x: 'Les transferts de vos proches à l’étranger arrivent directement sur votre compte.' },
    ] },
    marchand: {
      titre: 'Devenir marchand.',
      intro: 'Encaissez vos clients avec Orange Money : plus de monnaie à rendre, plus de billets à garder en caisse. Il suffit d’un QR code.',
      avantages: [
        { t: 'Plus de monnaie', x: 'Le client paie le montant exact depuis son téléphone.' },
        { t: 'Argent en sécurité', x: 'Les paiements arrivent sur votre compte marchand, pas dans le tiroir-caisse.' },
        { t: 'Sans terminal', x: 'Un QR code affiché au comptoir suffit : rien à acheter, rien à brancher.' },
        { t: 'Suivi en direct', x: 'Toutes vos ventes de la journée dans l’app Orange Money Marchand.' },
      ],
      etapes: [
        { t: 'Inscrivez-vous', x: 'Laissez vos coordonnées ci-contre ou passez dans une boutique Orange.' },
        { t: 'Un conseiller vous rend visite', x: 'Il vérifie vos documents et ouvre votre compte marchand.' },
        { t: 'Recevez votre QR code', x: 'Affichez-le au comptoir : vous encaissez dès le jour même.' },
      ],
      documents: ['Une pièce d’identité en cours de validité', 'Un registre de commerce ou une attestation d’activité', 'Une ligne Orange à votre nom', 'Une photo de votre commerce'],
      activites: ['Boutique / alimentation', 'Restaurant / maquis', 'Commerce de tissus et vêtements', 'Pharmacie', 'Transport', 'Salon de coiffure / beauté', 'Autre'],
    },
    faq: [
      { q: 'Combien coûte l’ouverture d’un compte ?', r: 'L’ouverture est gratuite. Certaines opérations, comme les retraits, ont des frais affichés avant de confirmer.' },
      { q: 'Que faire si j’envoie au mauvais numéro ?', r: 'Contactez vite le service client : si l’argent n’a pas été retiré, l’opération peut être annulée.' },
      { q: 'Combien coûte un compte marchand ?', r: 'L’inscription est gratuite ; une petite commission s’applique sur les paiements reçus (barème à vérifier auprès de la filiale).' },
      { q: 'Un petit commerce peut-il devenir marchand ?', r: 'Oui : boutiques de quartier, vendeurs du marché, taxis, salons… tous les commerces peuvent encaisser avec Orange Money.' },
    ],
  },
};
