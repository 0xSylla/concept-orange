/*
 * Orange Sénégal — fichier pays.
 * Spécificités montrées dans la démo :
 *   - forfaits en CATALOGUE de pass nommés (au lieu du configurateur ivoirien)
 *   - un module propre au Sénégal : programme de fidélité
 *   - un événement daté : Tabaski (offre, bandeau, image du héros), qui s'active seul pendant ses dates
 * TODO : noms d'offres (Illimix, Sargal), prix, contenus et couverture sont ILLUSTRATIFS — à vérifier sur orange.sn
 *        et à remplacer par les données de la filiale avant toute présentation officielle.
 */
(window.ORANGE_PAYS = window.ORANGE_PAYS || {}).sn = {
  code: 'sn',
  nom: 'Sénégal',
  marque: 'Orange Sénégal',
  salut: 'Dalal ak jamm',      // « bienvenue » en wolof
  devise: 'FCFA',
  siteOfficiel: 'https://www.orange.sn/',

  heros: { img: 'sn/hero-ville', alt: 'Dakar au crépuscule depuis la Corniche, un jeune homme regarde son téléphone face à l’océan' },

  // section « Nos offres » : une catégorie par carré ; « Découvrir nos offres » ouvre offre.html?offre=<id> (contenu : assets/js/offres/<pays>.js)
  scenes: [
    { id: 'illimix', mot: 'Illimix.', ligne: 'Internet et appels dans un seul pass, du jour au mois.', img: 'sn/offre-illimix', alt: 'Une jeune femme en appel vidéo sur la Corniche de Dakar' },
    { id: 'internet', mot: 'Internet mobile.', ligne: 'Des pass Internet pour tous les usages, réseaux sociaux inclus.', img: 'sn/offre-internet', alt: 'Des étudiants regardent une vidéo sur un téléphone à Dakar' },
    { id: 'esim', mot: 'eSIM.', ligne: 'Activez votre ligne sans carte SIM, directement dans votre smartphone, en quelques minutes.', img: 'sn/offre-esim', alt: 'Un jeune homme active une eSIM en scannant un code avec son téléphone' },
    { id: 'maison', mot: 'Internet à la maison.', ligne: 'La fibre ou la box 4G : toute la famille connectée.', img: 'sn/offre-maison', alt: 'Une famille regarde un match ensemble dans son salon à Dakar' },
    { id: 'international', mot: 'Appels vers l’étranger.', ligne: 'La famille en France, en Italie ou aux États-Unis, au prix d’un appel local.', img: 'sn/offre-international', alt: 'Une grand-mère en appel vidéo avec son petit-fils à l’étranger' },
  ],

  money: {
    prenom: 'Fatou',
    contacts: [{ nom: 'Maman', numero: '77 123 45 67' }, { nom: 'Moussa', numero: '78 987 65 43' }],
    commerce: 'Boutique Ndiaye',
    photos: [
      { img: 'sn/money-boutique', alt: 'Une commerçante reçoit un paiement mobile dans sa boutique', etapes: '1-3' },
      { img: 'sn/money-maman', alt: 'Une mère sourit en lisant un message sur son téléphone', etapes: '4-5' },
    ],
  },

  // catalogue de pass nommés (format sénégalais) — noms et prix illustratifs, à vérifier
  forfaits: {
    affichage: 'catalogue',
    offres: [
      { nom: 'Illimix Jour', contenu: ['300 Mo', '20 min tous réseaux'], validite: '24 h', prix: 500 },
      { nom: 'Illimix Semaine', contenu: ['2 Go', '100 min tous réseaux'], validite: '7 jours', prix: 2000, vedette: true },
      { nom: 'Illimix Mois', contenu: ['6 Go', '300 min tous réseaux'], validite: '30 jours', prix: 5000 },
      { nom: 'Pass Internet Mois', contenu: ['25 Go', 'Réseaux sociaux inclus'], validite: '30 jours', prix: 10000 },
    ],
  },

  reseau: {
    couverture: {
      '4g': ['Dakar', 'Thiès', 'Touba', 'Saint-Louis', 'Kaolack', 'Mbour', 'Ziguinchor', 'Tambacounda', 'Kolda', 'Matam'],
      '5g': ['Dakar', 'Thiès', 'Touba'],
      fibre: ['Dakar', 'Thiès', 'Touba', 'Saint-Louis', 'Kaolack', 'Mbour'],
    },
  },

  modules: {
    // programme de fidélité propre au Sénégal — nom à vérifier (« Sargal »)
    fidelite: {
      nom: 'Sargal',
      titre: 'Chaque recharge<br>vous rapporte.',
      texte: 'Vos recharges et vos paiements Orange Money vous font gagner des points, à convertir en Internet, en minutes ou en cadeaux.',
      points: 1250,
      etapes: [
        { titre: 'Gagnez', texte: 'Des points à chaque recharge et chaque paiement.' },
        { titre: 'Convertissez', texte: 'En Go, en minutes ou en bons d’achat.' },
        { titre: 'Profitez', texte: 'Des avantages réservés aux membres, toute l’année.' },
      ],
    },
  },

  // événements datés : actifs seuls entre « du » et « au » (démo : ?evenement=tabaski)
  evenements: [
    {
      id: 'tabaski', nom: 'Tabaski', du: '2027-05-12', au: '2027-05-19',
      titre: 'Tabaski,<br>tous ensemble.',
      texte: 'Pour la fête, appelez, envoyez vos vœux et vos cadeaux à la famille, ici et à l’étranger.',
      offre: { nom: 'Pass Tabaski', contenu: ['10 Go', 'Appels illimités vers Orange', 'Transferts Orange Money sans frais*'], prix: 3000, validite: '7 jours' },
      mention: '* Offre illustrative (concept).',
      img: 'sn/tabaski', alt: 'Une famille réunie dans la cour pour la Tabaski, en appel vidéo avec un proche à l’étranger',
      heros: { img: 'sn/tabaski-heros', alt: 'Une famille en habits de fête au coucher du soleil, le jour de la Tabaski' },
    },
  ],

  boutiques: 'Smartphones, forfaits, Orange Money : nos conseillers vous accueillent partout au Sénégal.',
};
