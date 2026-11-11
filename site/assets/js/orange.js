/* Orange — concept « Le carré » : comportements communs à toutes les filiales (héros, scènes, Orange Money,
   forfaits, carte, menu). Le contenu propre au pays est posé avant par pays.js (window.ORANGE). */
(function () {
  const O = window.ORANGE;
  const $ = s => document.querySelector(s);
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const smooth = x => x * x * (3 - 2 * x);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // progression 0 -> 1 d'une section « collante » (de son arrivée en haut à sa sortie)
  const progress = sec => { const r = sec.getBoundingClientRect(); const span = sec.offsetHeight - innerHeight; return span > 0 ? clamp(-r.top / span) : 1; };
  const fmt = n => n.toLocaleString('fr-FR').replace(/ | /g, ' ');

  /* ---------- 1. Héros : le carré grandit jusqu'à devenir l'écran ---------- */
  const hero = $('#accueil'), win = $('#hero-window'), fill = $('#hero-fill'), word = $('.hero__word'), intro = $('#hero-intro'), heroText = $('#hero-text');
  function onHero() {
    const p = reduced ? 1 : progress(hero);
    const vw = innerWidth, vh = innerHeight;
    const s0 = Math.min(vw, vh) * 0.26;
    const open = smooth(clamp((p - 0.08) / 0.62));            // 0,08 -> 0,70 : ouverture
    const w = s0 + (vw - s0) * open, h = s0 + (vh - s0) * open;
    win.style.width = w + 'px';
    win.style.height = h + 'px';
    fill.style.opacity = String(1 - smooth(clamp((p - 0.04) / 0.3)));   // l'aplat orange devient fenêtre
    word.style.opacity = String(1 - smooth(clamp((p - 0.02) / 0.1)));   // le nom s'efface avant l'aplat (pas de fantôme)
    win.style.setProperty('--zoom', String(1.25 - 0.25 * open));
    intro.style.opacity = String(1 - clamp(p / 0.08));
    heroText.classList.toggle('is-on', p > 0.68);
    $('#site-header').classList.toggle('show-logo', open > 0.995);      // le carré a fini de s'ouvrir : le logo prend place en haut
    hero.querySelector('.hero__sticky').style.setProperty('--shade', String(clamp((p - 0.55) / 0.2)));
  }

  /* ---------- 2. Nos offres : une catégorie par cinquième de section ---------- */
  const partout = $('#partout'), steps = [...document.querySelectorAll('#partout-steps li')], shots = [...document.querySelectorAll('#partout-square img')];
  const outline = $('#partout-outline'), countEl = $('#partout-no');
  let curScene = -1;
  function onScenes() {
    const i = Math.min(steps.length - 1, Math.floor(progress(partout) * steps.length));
    if (i === curScene) return;
    curScene = i;
    steps.forEach((s, k) => s.classList.toggle('is-on', k === i));
    shots.forEach((s, k) => s.classList.toggle('is-on', k === i));
    countEl.textContent = String(i + 1).padStart(2, '0');
    // le contour orange tourne d'un quart de tour et change de coin à chaque scène
    const corners = [[22, 22], [-22, 22], [-22, -22], [22, -22]];
    outline.style.setProperty('--rot', `${i * 90}deg`);
    outline.style.setProperty('--ox', corners[i % 4][0] + 'px');
    outline.style.setProperty('--oy', corners[i % 4][1] + 'px');
  }

  /* ---------- 3. Orange Money : le transfert se fait au défilement ---------- */
  const money = $('#money'), screen = $('#money-screen'), mSteps = [...document.querySelectorAll('#money-steps li')];
  const typed = $('#money-typed'), pins = [...document.querySelectorAll('#money-pin i')], mPhotos = [...document.querySelectorAll('.money__photo img')];
  const AMOUNT = '25000';
  function onMoney() {
    const p = progress(money);
    const raw = p * 5;
    const step = Math.min(5, Math.floor(raw) + 1);
    const local = raw - Math.floor(raw);                       // avancement dans l'étape en cours
    screen.dataset.step = String(step);
    mSteps.forEach((li, k) => li.classList.toggle('is-on', k === step - 1));
    // montant tapé chiffre par chiffre, code secret point par point
    const digits = step > 3 ? AMOUNT.length : step === 3 ? Math.max(1, Math.ceil(clamp(local / 0.7) * AMOUNT.length)) : 0;
    typed.textContent = digits ? fmt(+AMOUNT.slice(0, digits)) : '0';
    const nPin = step > 4 ? 4 : step === 4 ? Math.ceil(clamp(local / 0.7) * 4) : 0;
    pins.forEach((pi, k) => pi.classList.toggle('is-on', k < nPin));
    mPhotos.forEach(img => { const [a, b] = img.dataset.for.split('-').map(Number); img.classList.toggle('is-on', step >= a && step <= b); });
  }
  // sur téléphone, le téléphone dessiné est réduit pour tenir sous le titre
  const phone = $('#money-phone');
  function fitPhone() {
    if (innerWidth > 960) { phone.style.removeProperty('--ps'); phone.style.marginBottom = ''; return; }
    const s = clamp(Math.min(innerHeight * 0.62, innerHeight - 280) / 620, 0.55, 1);
    phone.style.setProperty('--ps', s.toFixed(3));
    phone.style.marginBottom = `${-(620 * (1 - s))}px`;           // l'échelle ne réduit pas la place occupée
  }

  /* ---------- 4. Forfaits : configurateur ---------- */
  const DATA = [1, 2, 5, 10, 20, 50, 100];                     // Go
  const MINS = [0, 30, 60, 120, 300, 600, Infinity];           // minutes
  const cfgData = $('#cfg-data'), cfgMin = $('#cfg-min');
  let days = 30;
  function price() {
    // barème indicatif (concept) : prix au Go dégressif, minutes, coefficient de durée ; arrondi à 50 FCFA
    const go = DATA[+cfgData.value], mn = MINS[+cfgMin.value];
    const perGo = go <= 2 ? 500 : go <= 10 ? 350 : go <= 20 ? 250 : go <= 50 ? 180 : 120;
    const mins = mn === Infinity ? 15000 : mn * 25;
    const coef = days === 1 ? 0.3 : days === 7 ? 0.55 : 1;
    return Math.max(100, Math.round(((go * perGo) + mins) * coef / 50) * 50);
  }
  function renderPass() {
    const go = DATA[+cfgData.value], mn = MINS[+cfgMin.value];
    $('#cfg-data-out').textContent = `${go} Go`;
    $('#cfg-min-out').textContent = mn === Infinity ? 'Illimités' : mn === 0 ? 'Aucun' : `${mn} min`;
    const tier = go >= 50 ? 'Max' : go >= 10 ? 'Plus' : 'Essentiel';
    $('#pass-name').textContent = `Pass ${days === 1 ? 'Jour' : days === 7 ? 'Semaine' : 'Mois'} ${tier}`;
    $('#pass-price').textContent = fmt(price());
    $('#pass-list').innerHTML = [
      ['Internet', `${go} Go`],
      ['Appels', mn === Infinity ? 'Illimités vers tous les réseaux' : mn === 0 ? '—' : `${mn} min tous réseaux`],
      ['Validité', `${days} jour${days > 1 ? 's' : ''}`],
    ].map(([a, b]) => `<li><span>${a}</span><b>${b}</b></li>`).join('');
  }
  [cfgData, cfgMin].forEach(el => el.addEventListener('input', renderPass));
  document.querySelectorAll('.cfg [data-days]').forEach(b => b.addEventListener('click', () => {
    days = +b.dataset.days;
    document.querySelectorAll('.cfg [data-days]').forEach(x => x.setAttribute('aria-checked', String(x === b)));
    renderPass();
  }));
  const toast = $('#toast');
  let toastT;
  const say = msg => { toast.textContent = msg; toast.classList.add('is-on'); clearTimeout(toastT); toastT = setTimeout(() => toast.classList.remove('is-on'), 3200); };
  $('#pass-buy').addEventListener('click', () => say(`${$('#pass-name').textContent} — ${$('#pass-price').textContent} ${O.pays.devise} : concept, aucune souscription réelle.`));
  const ev = $('#event-pass');
  if (O.evenement) ev.insertAdjacentHTML('beforeend', '<button class="btn btn--orange" type="button">Activer</button>');
  ev.addEventListener('click', e => { if (e.target.closest('button')) say(`${O.evenement.offre.nom} : concept, aucune souscription réelle.`); });

  /* ---------- 4 bis. Orange Bank : simulateur d'épargne (si le pays a le module) ---------- */
  const BQ = O.pays.modules && O.pays.modules.banque;
  if (BQ) {
    const range = $('#bq-mois');
    range.max = String(BQ.montants.length - 1);
    let mois = 12;
    const renderBq = () => {
      const m = BQ.montants[+range.value], i = BQ.taux / 100 / 12;
      const total = Math.round(m * ((Math.pow(1 + i, mois) - 1) / i) * (1 + i));   // versements en début de mois, intérêts composés
      $('#bq-mois-out').textContent = `${fmt(m)} ${O.pays.devise}`;
      $('#bq-total').textContent = fmt(total);
      const duree = mois % 12 ? `${mois} mois` : `${mois / 12} an${mois > 12 ? 's' : ''}`;
      $('#bq-list').innerHTML = [['Vos versements', `${fmt(m * mois)} ${O.pays.devise}`], ['Intérêts gagnés', `+ ${fmt(total - m * mois)} ${O.pays.devise}`], ['Durée', duree]]
        .map(([a, b]) => `<li><span>${a}</span><b>${b}</b></li>`).join('');
    };
    range.addEventListener('input', renderBq);
    document.querySelectorAll('#banque [data-mois]').forEach(b => b.addEventListener('click', () => {
      mois = +b.dataset.mois;
      document.querySelectorAll('#banque [data-mois]').forEach(x => x.setAttribute('aria-checked', String(x === b)));
      renderBq();
    }));
    renderBq();
  }

  /* ---------- 5. Le réseau : carte, villes, filtres ---------- */
  const C = O.carte;
  // couverture illustrative (concept), donnée par le fichier pays : quelles villes s'allument pour chaque technologie
  const COVER = O.couverture;
  const CAPITALE = Object.keys(C.villes)[0];
  const LABEL = { '4g': '4G', '5g': '5G', 'fibre': 'Fibre' };
  const map = $('#map');
  const pad = 40;
  map.innerHTML = `<svg role="img" aria-label="Carte ${O.pays.nom === 'Sénégal' ? 'du' : 'de la'} ${O.pays.nom} et des villes couvertes" viewBox="${-pad} ${-pad} ${C.w + pad * 2} ${C.h + pad * 2}">
    <path class="land" d="${C.path}"/>
    ${Object.entries(C.villes).map(([n, [x, y]], i) => `
      <g class="town" data-town="${n}" role="button" tabindex="0" aria-label="${n}">
        <circle class="pulse" cx="${x}" cy="${y}" r="9" style="--d:${(i % 5) * .35}s"/>
        <circle class="dot" cx="${x}" cy="${y}" r="${n === CAPITALE ? 9 : 6}"/>
        <text x="${x + 13}" y="${y + 5}">${n}</text>
      </g>`).join('')}
  </svg>`;
  let net = '4g';
  function renderNet() {
    map.querySelectorAll('.town').forEach(g => g.classList.toggle('is-lit', COVER[net].includes(g.dataset.town)));
  }
  function showCity(n) {
    map.querySelectorAll('.town').forEach(g => g.classList.toggle('is-sel', g.dataset.town === n));
    const techs = Object.keys(COVER).filter(k => COVER[k].includes(n)).map(k => LABEL[k]);
    $('#city-info').innerHTML = `<p class="city__name">${n}</p><p class="city__techs">${techs.join(' · ')}</p>`;
  }
  map.addEventListener('click', e => { const g = e.target.closest('.town'); if (g) showCity(g.dataset.town); });
  map.addEventListener('keydown', e => { const g = e.target.closest('.town'); if (g && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); showCity(g.dataset.town); } });
  document.querySelectorAll('#net-filter [data-net]').forEach(b => b.addEventListener('click', () => {
    net = b.dataset.net;
    document.querySelectorAll('#net-filter [data-net]').forEach(x => x.setAttribute('aria-checked', String(x === b)));
    renderNet();
  }));
  renderNet();

  // apparitions : tracé de la carte, téléphones Max it
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { threshold: .25 });
  [map, $('#maxit')].forEach(el => io.observe(el));

  /* ---------- 9. Fin : le carré orange grandit et remplit l'écran ---------- */
  const fin = $('#fin'), finSq = $('#fin-square');
  function onFin() {
    const p = progress(fin);
    const s = 0.2 + 0.8 * smooth(clamp(p / 0.8));
    finSq.style.setProperty('--s', s.toFixed(3));
    finSq.style.setProperty('--o', String(clamp((p - 0.45) / 0.3)));
  }

  /* ---------- En-tête : transparent sur le héros, puis noir ou blanc selon la section ---------- */
  const header = $('#site-header');
  const LIGHT = ['#forfaits', '#banque', '#maxit', '#impact', '#boutiques'].map(s => $(s));
  function onHeader() {
    const y = header.offsetHeight / 2;
    const overLight = LIGHT.some(s => { const b = s.getBoundingClientRect(); return b.top <= y && b.bottom > y; });
    const pastHero = hero.getBoundingClientRect().bottom <= header.offsetHeight;
    header.classList.toggle('is-light', overLight);
    header.classList.toggle('is-solid', pastHero && !overLight);
  }

  /* ---------- Menu mobile ---------- */
  const menu = $('#mobile-menu'), menuBtn = $('#menu-toggle');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    menu.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  }
  menuBtn.addEventListener('click', () => setMenu(menu.hidden));
  menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { setMenu(false); menuBtn.focus(); } });

  /* ---------- Boucle de défilement ---------- */
  let ticking = false;
  function frame() { ticking = false; onHero(); onScenes(); onMoney(); onFin(); onHeader(); }
  const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', () => { fitPhone(); req(); });
  if (O.pays.forfaits.affichage !== 'catalogue') renderPass();
  fitPhone();
  frame();
})();
