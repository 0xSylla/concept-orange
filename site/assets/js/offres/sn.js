/*
 * Orange Sénégal — contenu des pages d'offre (offre.html?pays=sn&offre=<id>).
 * Même principe que offres/ci.js. Le pass Illimix reprend le catalogue de pays/sn.js.
 * TODO : contenus, prix et conditions ILLUSTRATIFS (concept) — à remplacer par ceux de la filiale (orange.sn).
 */
(window.ORANGE_OFFRES = window.ORANGE_OFFRES || {}).sn = {
  illimix: {
    titre: 'Illimix.',
    accroche: 'Internet et appels, dans un seul pass.',
    intro: 'Un pass qui réunit Internet et minutes vers tous les réseaux, du jour au mois. Vous choisissez, il s’active tout de suite.',
    cta: 'Choisir mon Illimix',
    avantages: [
      { t: 'Tout en un', x: 'Internet et appels dans le même pass : un seul achat, un seul solde à suivre.' },
      { t: 'Tous les réseaux', x: 'Vos minutes valent vers tous les opérateurs du Sénégal.' },
      { t: 'Points Sargal', x: 'Chaque Illimix acheté vous rapporte des points de fidélité.' },
    ],
    etapes: { titre: 'Activer un Illimix', liste: [
      { t: 'Ouvrez Max it', x: 'Ou composez le code USSD depuis votre ligne Orange.' },
      { t: 'Choisissez', x: 'Jour, semaine ou mois, selon votre usage.' },
      { t: 'Payez', x: 'Avec votre crédit ou Orange Money : le pass est actif tout de suite.' },
    ] },
    bloc: { type: 'tarifs', titre: 'Nos Illimix', depuis: 'forfaits' },   // reprend pays/sn.js > forfaits.offres
    faq: [
      { q: 'Puis-je cumuler deux Illimix ?', r: 'Oui : les Go et les minutes s’additionnent, la validité la plus longue est conservée.' },
      { q: 'Comment connaître mon solde ?', r: 'Dans Max it, en page d’accueil, ou par code USSD.' },
      { q: 'Combien de points Sargal rapporte un Illimix ?', r: 'Un nombre de points proportionnel au prix du pass, crédités tout de suite.' },
    ],
  },

  internet: {
    titre: 'Internet mobile.',
    accroche: 'Réseaux sociaux, vidéos, travail.',
    intro: 'Des pass Internet pour tous les usages, du petit pass réseaux sociaux au gros pass du mois.',
    cta: 'Choisir mon pass',
    avantages: [
      { t: 'La 4G partout', x: 'De Dakar à Matam, avec la 5G à Dakar, Thiès et Touba.' },
      { t: 'Réseaux sociaux', x: 'Des pass dédiés à WhatsApp, Facebook, TikTok, à petit prix.' },
      { t: 'Sans engagement', x: 'Un pass à la fois, renouvelable quand vous voulez.' },
    ],
    etapes: { titre: 'Activer un pass', liste: [
      { t: 'Ouvrez Max it', x: 'Ou composez le code USSD.' },
      { t: 'Choisissez', x: 'La quantité et la durée qui vous conviennent.' },
      { t: 'Surfez', x: 'Le pass est actif dès le paiement.' },
    ] },
    bloc: { type: 'tarifs', titre: 'Nos pass Internet', offres: [
      { nom: 'Pass Réseaux sociaux', contenu: ['WhatsApp, Facebook, TikTok'], validite: '24 h', prix: 200 },
      { nom: 'Pass Semaine', contenu: ['5 Go'], validite: '7 jours', prix: 2000, vedette: true },
      { nom: 'Pass Internet Mois', contenu: ['25 Go', 'Réseaux sociaux inclus'], validite: '30 jours', prix: 10000 },
    ] },
    faq: [
      { q: 'Que se passe-t-il quand mon pass est épuisé ?', r: 'La connexion s’arrête : pas de hors-forfait surprise. Un SMS vous prévient avant.' },
      { q: 'Puis-je partager ma connexion ?', r: 'Oui, le partage de connexion est inclus.' },
      { q: 'Mes Go restants sont-ils perdus ?', r: 'Ils sont reportés si vous renouvelez avant la fin de validité.' },
    ],
  },

  esim: {
    titre: 'La eSIM.',
    accroche: 'Votre SIM, sans la carte.',
    intro: 'La eSIM est une carte SIM intégrée à votre téléphone. Vous gardez votre numéro et vos offres, sans carte à insérer ni à perdre.',
    cta: 'Obtenir ma eSIM',
    avantages: [
      { t: 'Rien à insérer', x: 'Votre ligne s’installe en scannant un code : pas de carte à perdre ou à abîmer.' },
      { t: 'Deux lignes', x: 'Gardez une SIM physique et ajoutez une eSIM : perso et pro sur le même téléphone.' },
      { t: 'Plus sûr', x: 'Téléphone perdu ou volé : la eSIM ne peut pas être retirée, et votre ligne se bloque à distance.' },
    ],
    etapes: { titre: 'Obtenir votre eSIM', liste: [
      { t: 'Vérifiez', x: 'Que votre téléphone est compatible (liste ci-dessous, ou composez *#06#).' },
      { t: 'Passez en agence', x: 'Avec votre pièce d’identité : un conseiller vous remet votre code eSIM.' },
      { t: 'Scannez', x: 'Le code avec votre téléphone, connecté au Wi-Fi : votre ligne est active en quelques minutes.' },
    ] },
    bloc: { type: 'compatible', titre: 'Votre téléphone est-il compatible ?' },
    faq: [
      { q: 'Puis-je garder mon numéro ?', r: 'Oui. Votre numéro, votre crédit et vos points Sargal passent sur la eSIM.' },
      { q: 'Que faire si je change de téléphone ?', r: 'Passez en agence : un nouveau code eSIM vous est remis pour le nouveau téléphone.' },
      { q: 'Combien coûte la eSIM ?', r: 'Le même prix qu’une carte SIM classique (tarif à vérifier en agence).' },
    ],
  },

  maison: {
    titre: 'Internet à la maison.',
    accroche: 'Toute la famille connectée.',
    intro: 'La fibre là où elle passe, la box 4G partout ailleurs : pour les matchs, les cours en ligne et les appels vidéo avec la famille.',
    cta: 'Tester mon éligibilité',
    avantages: [
      { t: 'La fibre', x: 'Du très haut débit à Dakar, Thiès, Touba, Saint-Louis, Kaolack et Mbour.' },
      { t: 'La box 4G', x: 'Branchez, c’est connecté : idéal là où la fibre n’est pas encore arrivée.' },
      { t: 'Installation suivie', x: 'Un technicien installe tout, et vous suivez son passage dans Max it.' },
    ],
    etapes: { titre: 'Être raccordé', liste: [
      { t: 'Testez', x: 'Votre adresse : fibre ou box 4G.' },
      { t: 'Choisissez', x: 'Votre offre et votre créneau d’installation.' },
      { t: 'Profitez', x: 'Un technicien installe tout chez vous.' },
    ] },
    bloc: { type: 'tarifs', titre: 'Nos offres maison', offres: [
      { nom: 'Box 4G', contenu: ['100 Go', 'Wi-Fi pour toute la maison'], validite: '30 jours', prix: 15000 },
      { nom: 'Fibre Essentiel', contenu: ['Internet illimité', 'Jusqu’à 50 Mb/s'], validite: 'Par mois', prix: 20000, vedette: true },
      { nom: 'Fibre Max', contenu: ['Internet illimité', 'Jusqu’à 200 Mb/s', 'Bouquet TV inclus'], validite: 'Par mois', prix: 35000 },
    ] },
    faq: [
      { q: 'La fibre est-elle disponible chez moi ?', r: 'Testez votre adresse en agence ou dans Max it : la fibre se déploie quartier par quartier.' },
      { q: 'Combien de temps pour l’installation ?', r: 'Quelques jours en général après la souscription.' },
      { q: 'Puis-je emporter la box 4G ?', r: 'Oui : elle fonctionne partout où il y a de la 4G Orange.' },
    ],
  },

  international: {
    titre: 'Appels vers l’étranger.',
    accroche: 'La famille, au prix d’un appel local.',
    intro: 'France, Italie, Espagne, États-Unis, pays voisins : des pass pour appeler vos proches à l’étranger aussi souvent que vous voulez.',
    cta: 'Choisir mon pass',
    avantages: [
      { t: 'Les pays de la diaspora', x: 'France, Italie, Espagne, États-Unis, Mauritanie, Mali, Gambie et bien d’autres.' },
      { t: 'Des minutes, pas des surprises', x: 'Un prix fixe, connu d’avance, quel que soit le pays inclus.' },
      { t: 'Fixe et mobile', x: 'Appelez les fixes comme les mobiles des pays inclus.' },
    ],
    etapes: { titre: 'Activer un pass', liste: [
      { t: 'Ouvrez Max it', x: 'Rubrique Pass international.' },
      { t: 'Choisissez', x: 'Le nombre de minutes et la durée.' },
      { t: 'Appelez', x: 'Composez le numéro avec l’indicatif du pays, comme d’habitude.' },
    ] },
    bloc: { type: 'tarifs', titre: 'Nos pass international', offres: [
      { nom: 'Pass Diaspora Jour', contenu: ['20 min vers 30 pays'], validite: '24 h', prix: 1000 },
      { nom: 'Pass Diaspora Semaine', contenu: ['60 min vers 30 pays'], validite: '7 jours', prix: 3000, vedette: true },
      { nom: 'Pass Diaspora Mois', contenu: ['200 min vers 30 pays'], validite: '30 jours', prix: 8000 },
    ] },
    faq: [
      { q: 'Quels pays sont inclus ?', r: 'Les principaux pays d’Europe, d’Amérique du Nord et d’Afrique de l’Ouest. La liste complète est dans Max it.' },
      { q: 'Mes proches peuvent-ils m’appeler avec ce pass ?', r: 'Le pass concerne les appels que vous passez. Les appels reçus restent gratuits au Sénégal.' },
      { q: 'Puis-je appeler par WhatsApp à la place ?', r: 'Oui, avec un pass Internet. Le pass international garantit la qualité d’un appel classique, même sans connexion chez votre proche.' },
    ],
  },

  // page Orange Money (bouton de la section Orange Money de l'accueil) — hors carrés « Nos offres »
  money: {
    nom: 'Orange Money', img: 'sn/money-boutique', alt: 'Une commerçante reçoit un paiement mobile dans sa boutique',
    titre: 'Orange Money.',
    accroche: 'Votre argent, toujours sur vous.',
    intro: 'Envoyer, payer, retirer, épargner : un compte Orange Money s’ouvre avec votre numéro Orange, sans compte bancaire.',
    cta: 'Ouvrir mon compte',
    avantages: [
      { t: 'Instantané', x: 'L’argent arrive en quelques secondes, de jour comme de nuit, partout au Sénégal.' },
      { t: 'Sécurisé', x: 'Chaque opération est confirmée par votre code secret, que personne d’autre ne connaît.' },
      { t: 'Partout', x: 'Des milliers de points Orange Money pour déposer et retirer, même dans les villages.' },
    ],
    etapes: { titre: 'Ouvrir un compte', liste: [
      { t: 'Passez en point Orange Money', x: 'Avec votre pièce d’identité et votre ligne Orange.' },
      { t: 'Choisissez votre code', x: 'Un code secret à 4 chiffres, rien qu’à vous.' },
      { t: 'C’est prêt', x: 'Déposez de l’argent et utilisez Orange Money dans Max it ou avec le code USSD.' },
    ] },
    bloc: { type: 'services', titre: 'Tout ce que vous pouvez faire', liste: [
      { t: 'Envoyer', x: 'À n’importe quel numéro, même vers un autre opérateur.' },
      { t: 'Payer en boutique', x: 'Scannez le QR code du marchand : c’est payé, sans monnaie.' },
      { t: 'Payer vos factures', x: 'Électricité Senelec et Woyofal, eau SEN’EAU, abonnement TV : sans file d’attente.' },
      { t: 'Acheter du crédit', x: 'Pour vous ou pour un proche, à toute heure.' },
      { t: 'Retirer', x: 'En point Orange Money ou dans les distributeurs partenaires.' },
      { t: 'Recevoir de l’étranger', x: 'Les transferts de la diaspora arrivent directement sur votre compte, sans passer au guichet.' },
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
      documents: ['Une pièce d’identité en cours de validité', 'Un NINEA ou une attestation d’activité', 'Une ligne Orange à votre nom', 'Une photo de votre commerce'],
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
