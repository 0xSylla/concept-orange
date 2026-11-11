/*
 * Orange Côte d'Ivoire — fichier pays.
 * Tout ce qui est propre à la filiale est ici ; les modules du site (héros, scènes, Orange Money, forfaits,
 * réseau…) sont communs. Images : assets/img/ci/ (voir PROMPTS-IMAGES.md).
 * TODO : prix, couverture et offres sont illustratifs (concept) — à remplacer par les données de la filiale.
 */
(window.ORANGE_PAYS = window.ORANGE_PAYS || {}).ci = {
  code: 'ci',
  nom: "Côte d'Ivoire",
  marque: "Orange Côte d'Ivoire",
  salut: '',
  devise: 'FCFA',
  siteOfficiel: 'https://www.orange.ci/',

  heros: { img: 'ci/hero-ville', alt: "Abidjan au crépuscule depuis la lagune Ébrié, une jeune femme regarde son téléphone" },

  // section « Nos offres » : une catégorie par carré ; « Découvrir nos offres » ouvre offre.html?offre=<id> (contenu : assets/js/offres/<pays>.js)
  scenes: [
    { id: 'internet', mot: 'Internet mobile.', ligne: 'Des pass à la journée, à la semaine ou au mois, pour rester en ligne partout.', img: 'ci/offre-internet', alt: 'Une jeune femme regarde une vidéo sur son téléphone dans un bus à Abidjan' },
    { id: 'appels', mot: 'Appels & SMS.', ligne: "Appelez tous les réseaux, en Côte d'Ivoire comme à l'étranger.", img: 'ci/offre-appels', alt: 'Un jeune homme rit au téléphone sur un balcon du Plateau' },
    { id: 'esim', mot: 'eSIM.', ligne: 'Activez votre ligne sans carte SIM, directement dans votre smartphone, en quelques minutes.', img: 'ci/offre-esim', alt: 'Une jeune femme active une eSIM en scannant un code avec son téléphone' },
    { id: 'maison', mot: 'Internet à la maison.', ligne: 'La fibre ou la box 4G : toute la famille connectée, sans attendre une ligne fixe.', img: 'ci/offre-maison', alt: 'Une famille regarde un film ensemble dans son salon à Cocody' },
    // services propres à la Côte d'Ivoire — TODO : vérifier noms, contenus et liens exacts sur orange.ci
    { id: 'energie', mot: 'Orange Énergie.', ligne: 'Un kit solaire payé petit à petit avec Orange Money : la lumière et la télé, même loin du réseau électrique.', img: 'ci/offre-energie', alt: 'Une famille sous l’éclairage de son kit solaire, le soir, dans un village' },
    { id: 'smartphones', mot: 'Smartphones.', ligne: 'Les derniers modèles en boutique, à payer en plusieurs fois.', img: 'ci/offre-smartphones', alt: 'Un jeune homme découvre son nouveau smartphone' },
  ],

  money: {
    prenom: 'Awa',
    contacts: [{ nom: 'Maman', numero: '07 07 12 34 56' }, { nom: 'Koffi', numero: '05 05 98 76 54' }],
    commerce: 'Boutique Diallo',
    photos: [
      { img: 'ci/money-boutique', alt: 'Un commerçant reçoit un paiement mobile dans sa boutique', etapes: '1-3' },
      { img: 'ci/money-maman', alt: 'Une mère sourit en lisant un message sur son téléphone', etapes: '4-5' },
    ],
  },

  // configurateur : Internet, appels, validité -> prix (barème indicatif)
  forfaits: { affichage: 'configurateur' },

  reseau: {
    couverture: {
      '4g': ['Abidjan', 'Yamoussoukro', 'Bouaké', 'San-Pédro', 'Korhogo', 'Daloa', 'Man', 'Odienné', 'Bondoukou', 'Gagnoa'],
      '5g': ['Abidjan', 'Yamoussoukro', 'Bouaké', 'San-Pédro'],
      fibre: ['Abidjan', 'Yamoussoukro', 'Bouaké', 'San-Pédro', 'Korhogo', 'Daloa'],
    },
  },

  modules: {
    // Orange Bank remplace la section forfaits : simulateur d'épargne. TODO : taux et montants illustratifs, à vérifier
    banque: {
      titre: 'Votre argent,<br>qui grandit.',
      texte: 'Mettez de côté chaque mois depuis Orange Money : réglez, et voyez ce que vous aurez épargné.',
      taux: 3.5,                                   // % par an (illustratif)
      montants: [1000, 2000, 5000, 10000, 15000, 25000, 50000, 75000, 100000, 200000],
    },
  },
  evenements: [],

  boutiques: "Smartphones, forfaits, Orange Money : nos conseillers vous accueillent partout en Côte d'Ivoire.",
};
