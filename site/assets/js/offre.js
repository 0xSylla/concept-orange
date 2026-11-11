/*
 * Orange — page d'une offre (offre.html?pays=<code>&offre=<id>).
 * Contenu : assets/js/offres/<pays>.js ; titre, image et ordre des offres : assets/js/pays/<pays>.js (scenes).
 * Sections : en-tête de l'offre, avantages, étapes, bloc propre à l'offre (tarifs ou téléphones compatibles), FAQ, autres offres.
 */
(function () {
  const $ = s => document.querySelector(s);
  const { code, pays: P, img, esc, fmt } = window.ORANGE;
  const id = new URLSearchParams(location.search).get('offre');
  const D = ((window.ORANGE_OFFRES || {})[code] || {})[id];
  // une page peut exister hors des carrés « Nos offres » (ex. Orange Money) : elle porte alors son nom et son image
  const scene = P.scenes.find(s => s.id === id) || (D && D.nom && { id, mot: D.nom, img: D.img, alt: D.alt });
  // offre absente pour ce pays (ex. Orange Bank après passage au Sénégal) : retour à la liste des offres
  if (!scene || !D) { location.replace(`index.html?pays=${code}#partout`); return; }

  const nom = scene.mot.replace(/\.$/, '');
  const accueil = `index.html?pays=${code}`;
  document.title = `${nom} — ${P.marque} (concept)`;
  const prix = v => typeof v === 'number' ? `${fmt(v)} <small>${P.devise}</small>` : esc(v);
  const n2 = i => String(i + 1).padStart(2, '0');

  /* ---------- téléphones compatibles eSIM (liste indicative, commune à tous les pays) ---------- */
  const APPAREILS = {
    Apple: ['iPhone XR', 'iPhone XS', 'iPhone XS Max', 'iPhone SE (2e et 3e génération)', 'iPhone 11, 11 Pro, 11 Pro Max', 'iPhone 12, 12 mini, 12 Pro, 12 Pro Max', 'iPhone 13, 13 mini, 13 Pro, 13 Pro Max', 'iPhone 14, 14 Plus, 14 Pro, 14 Pro Max', 'iPhone 15, 15 Plus, 15 Pro, 15 Pro Max', 'iPhone 16, 16 Plus, 16 Pro, 16 Pro Max'],
    Samsung: ['Galaxy S20, S20+, S20 Ultra', 'Galaxy S21, S21+, S21 Ultra', 'Galaxy S22, S22+, S22 Ultra', 'Galaxy S23, S23+, S23 Ultra', 'Galaxy S24, S24+, S24 Ultra', 'Galaxy S25, S25+, S25 Ultra', 'Galaxy Z Flip (toutes générations)', 'Galaxy Z Fold (toutes générations)'],
    Google: ['Pixel 3 et 3 XL', 'Pixel 4, 4a', 'Pixel 5, 5a', 'Pixel 6, 6 Pro, 6a', 'Pixel 7, 7 Pro, 7a', 'Pixel 8, 8 Pro, 8a', 'Pixel 9, 9 Pro, 9 Pro XL'],
    Huawei: ['P40, P40 Pro', 'Mate 40 Pro'],
    Autres: ['Motorola Razr (2019 et suivants)', 'Xiaomi 13, 13 Pro, 14', 'Oppo Find X5, X5 Pro', 'Sony Xperia 10 IV et suivants'],
  };

  function blocHtml(b) {
    if (b.type === 'services') {
      return `<section aria-labelledby="bloc-titre" class="op-bloc op-services" id="services"><div class="wrap">
        <p class="kicker kicker--dark">Services</p>
        <h2 class="title" id="bloc-titre">${esc(b.titre)}</h2>
        <ul class="op-services__grid">${b.liste.map((x, i) => `<li><span aria-hidden="true" class="op-av__sq">${n2(i)}</span><h3>${esc(x.t)}</h3><p>${esc(x.x)}</p></li>`).join('')}</ul>
      </div></section>`;
    }
    if (b.type === 'compatible') {
      return `<section aria-labelledby="bloc-titre" class="op-bloc op-compat" id="compatible"><div class="wrap">
        <p class="kicker kicker--dark">Compatibilité</p>
        <h2 class="title" id="bloc-titre">${esc(b.titre)}</h2>
        <div class="op-compat__grid">
          <div>
            <label class="op-search"><span class="sr-only">Rechercher votre modèle</span>
              <input autocomplete="off" id="compat-q" placeholder="Rechercher votre modèle (ex. Galaxy S23)" type="search"></label>
            <div aria-label="Marque" class="op-marques" role="group">${['Toutes', ...Object.keys(APPAREILS)].map((m, i) => `<button aria-pressed="${!i}" data-m="${m}" type="button">${m}</button>`).join('')}</div>
            <p aria-live="polite" class="op-compat__res" id="compat-res"></p>
            <ul class="op-compat__list" id="compat-list"></ul>
          </div>
          <aside class="op-astuce">
            <p class="op-astuce__k">Vérifier en 10 secondes</p>
            <p class="op-astuce__code">*#06#</p>
            <p>Composez ce code sur votre téléphone : si un numéro <b>EID</b> s’affiche, il est compatible eSIM.</p>
            <p class="op-note">Liste indicative : certains modèles vendus hors de leur pays d’origine peuvent ne pas être compatibles.</p>
          </aside>
        </div></div></section>`;
    }
    const offres = b.depuis === 'forfaits' ? P.forfaits.offres : b.offres;
    return `<section aria-labelledby="bloc-titre" class="op-bloc op-tarifs" id="tarifs"><div class="wrap">
      <p class="kicker kicker--dark">Tarifs</p>
      <h2 class="title" id="bloc-titre">${esc(b.titre)}</h2>
      <ul class="op-tarifs__grid">${offres.map(o => `<li class="op-tarif${o.vedette ? ' op-tarif--vedette' : ''}">
        <p class="pass__name">${esc(o.nom)}</p>
        <p class="op-tarif__prix">${prix(o.prix)}</p>
        <p class="op-tarif__val">${esc(o.validite)}</p>
        <ul class="op-tarif__list">${o.contenu.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        <button class="btn btn--orange" data-choisir="${esc(o.nom)}" type="button">Choisir</button>
      </li>`).join('')}</ul>
      <p class="op-note">Offres et prix illustratifs — concept, à vérifier auprès de ${esc(P.marque)}.</p>
    </div></section>`;
  }

  const blocLien = { compatible: ['#compatible', 'Compatibilité'], services: ['#services', 'Services'] }[D.bloc.type] || ['#tarifs', 'Tarifs'];
  const BTN2 = { compatible: 'Vérifier mon téléphone', services: 'Voir les services' };

  // faux QR code décoratif (motif fixe : 21 × 21 modules, 3 repères aux coins)
  function qrSvg() {
    let seed = 7, r = '';
    const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const finder = (x, y) => (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13);
    for (let y = 0; y < 21; y++) for (let x = 0; x < 21; x++) if (!finder(x, y) && rnd() > .52) r += `<rect x="${x}" y="${y}" width="1" height="1"/>`;
    const f = (x, y) => `<rect x="${x}" y="${y}" width="7" height="7"/><rect x="${x + 1}" y="${y + 1}" width="5" height="5" fill="#fff"/><rect x="${x + 2}" y="${y + 2}" width="3" height="3"/>`;
    return `<svg viewBox="0 0 21 21" shape-rendering="crispEdges">${f(0, 0)}${f(14, 0)}${f(0, 14)}${r}</svg>`;
  }

  // section « Devenir marchand » (page Orange Money) : avantages, documents, étapes, formulaire d'inscription (concept)
  const marchandHtml = m => !m ? '' : `
  <section aria-labelledby="mr-titre" class="op-marchand" id="marchand"><div class="wrap">
    <div class="op-marchand__top">
      <div>
        <p class="kicker">Commerçants</p>
        <h2 class="title title--light" id="mr-titre">${esc(m.titre)}</h2>
        <p class="op-hero__intro">${esc(m.intro)}</p>
      </div>
      <div class="op-qr" aria-hidden="true"><span class="op-qr__code">${qrSvg()}</span><p>Votre QR code marchand</p></div>
    </div>
    <ul class="op-marchand__av">${m.avantages.map(a => `<li><h3>${esc(a.t)}</h3><p>${esc(a.x)}</p></li>`).join('')}</ul>
    <div class="op-marchand__grid">
      <div>
        <h3 class="op-marchand__h">Comment devenir marchand</h3>
        <ol class="op-marchand__etapes">${m.etapes.map((e, i) => `<li><b>${n2(i)}</b><span><strong>${esc(e.t)}</strong> ${esc(e.x)}</span></li>`).join('')}</ol>
        <h3 class="op-marchand__h">Ce qu’il vous faut</h3>
        <ul class="op-marchand__docs">${m.documents.map(d => `<li>${esc(d)}</li>`).join('')}</ul>
      </div>
      <form class="op-form" id="marchand-form" novalidate>
        <p class="op-form__titre">Être rappelé par un conseiller</p>
        <label>Nom et prénom<input autocomplete="name" name="nom" required></label>
        <label>Nom du commerce<input name="commerce" required></label>
        <label>Activité<select name="activite">${m.activites.map(a => `<option>${esc(a)}</option>`).join('')}</select></label>
        <label>Ville<select name="ville">${Object.keys(P.reseau.couverture['4g'].reduce((o, v) => (o[v] = 1, o), {})).map(v => `<option>${esc(v)}</option>`).join('')}</select></label>
        <label>Numéro Orange<input autocomplete="tel" inputmode="tel" name="tel" placeholder="${esc(P.money.contacts[1].numero)}" required></label>
        <button class="btn btn--orange" type="submit">Envoyer ma demande</button>
        <p class="op-note">Concept : aucune donnée n’est envoyée.</p>
      </form>
    </div>
  </div></section>`;
  const autres = P.scenes.filter(s => s.id !== id);

  $('#offre').innerHTML = `
  <section aria-labelledby="op-titre" class="op-hero">
    <div class="wrap op-hero__grid">
      <div>
        <nav aria-label="Fil d’Ariane" class="op-ariane"><a href="${accueil}">${esc(P.marque)}</a><span aria-hidden="true">/</span><a href="${accueil}#partout">Nos offres</a><span aria-hidden="true">/</span><span aria-current="page">${esc(nom)}</span></nav>
        <h1 class="op-hero__titre" id="op-titre">${esc(D.titre)}</h1>
        <p class="op-hero__accroche">${esc(D.accroche)}</p>
        <p class="op-hero__intro">${esc(D.intro)}</p>
        <div class="hero__actions">
          <button class="btn btn--orange" id="op-cta" type="button">${esc(D.cta)}</button>
          <a class="btn btn--ghost" href="${D.marchand ? '#marchand' : blocLien[0]}">${D.marchand ? 'Devenir marchand' : BTN2[D.bloc.type] || 'Voir les tarifs'}</a>
        </div>
      </div>
      <div class="op-frame"><span aria-hidden="true" class="op-frame__outline"></span><div class="op-frame__sq"><img id="op-img"></div></div>
    </div>
  </section>

  <nav aria-label="Sur cette page" class="op-sous"><div class="wrap">
    <a href="#avantages">Avantages</a><a href="#etapes">${esc(D.etapes.titre)}</a><a href="${blocLien[0]}">${blocLien[1]}</a>${D.marchand ? '<a href="#marchand">Devenir marchand</a>' : ''}<a href="#faq">Questions</a>
  </div></nav>

  <section aria-labelledby="av-titre" class="op-av" id="avantages"><div class="wrap">
    <p class="kicker kicker--dark">Avantages</p>
    <h2 class="title" id="av-titre">Ce qui change<br>pour vous.</h2>
    <ul class="op-av__grid">${D.avantages.map((a, i) => `<li><span aria-hidden="true" class="op-av__sq">${n2(i)}</span><h3>${esc(a.t)}</h3><p>${esc(a.x)}</p></li>`).join('')}</ul>
  </div></section>

  <section aria-labelledby="et-titre" class="op-etapes" id="etapes"><div class="wrap">
    <p class="kicker kicker--black">En ${D.etapes.liste.length} étapes</p>
    <h2 class="title title--black" id="et-titre">${esc(D.etapes.titre)}</h2>
    <ol class="op-etapes__list">${D.etapes.liste.map((e, i) => `<li><b aria-hidden="true">${n2(i)}</b><h3>${esc(e.t)}</h3><p>${esc(e.x)}</p></li>`).join('')}</ol>
  </div></section>

  ${blocHtml(D.bloc)}
  ${marchandHtml(D.marchand)}

  <section aria-labelledby="faq-titre" class="op-faq" id="faq"><div class="wrap op-faq__grid">
    <div><p class="kicker kicker--dark">Questions fréquentes</p><h2 class="title" id="faq-titre">Vous vous demandez…</h2></div>
    <div class="op-faq__list">${D.faq.map((f, i) => `<details${i ? '' : ' open'}><summary>${esc(f.q)}</summary><p>${esc(f.r)}</p></details>`).join('')}</div>
  </div></section>

  <section aria-labelledby="autres-titre" class="op-autres"><div class="wrap">
    <p class="kicker">${esc(P.marque)}</p>
    <h2 class="title title--light" id="autres-titre">Nos autres offres</h2>
    <ul class="op-autres__grid">${autres.map(s => `<li><a href="offre.html?pays=${code}&amp;offre=${s.id}"><span class="op-autres__sq"><img alt="" data-src="${s.img}" loading="lazy"></span><b>${esc(s.mot.replace(/\.$/, ''))} <span class="op-autres__fl" aria-hidden="true">→</span></b></a></li>`).join('')}</ul>
  </div></section>`;

  img($('#op-img'), scene.img, scene.alt);
  document.querySelectorAll('.op-autres img').forEach(im => img(im, im.dataset.src, ''));

  /* ---------- actions (concept : pas de souscription réelle) ---------- */
  const toast = $('#toast');
  let tt;
  const say = m => { toast.textContent = m; toast.classList.add('is-on'); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('is-on'), 3200); };
  $('#op-cta').addEventListener('click', () => say(`${D.cta} : concept, aucune souscription réelle.`));
  document.addEventListener('click', e => { const b = e.target.closest('[data-choisir]'); if (b) say(`${b.dataset.choisir} : concept, aucune souscription réelle.`); });

  const form = $('#marchand-form');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const bad = [...form.querySelectorAll('[required]')].filter(i => !i.value.trim());
    form.querySelectorAll('[required]').forEach(i => i.toggleAttribute('aria-invalid', bad.includes(i)));
    if (bad.length) { bad[0].focus(); say('Merci de remplir les champs en orange.'); return; }
    say(`Merci ${form.nom.value.trim().split(' ')[0]} : un conseiller vous rappellera (concept, rien n’est envoyé).`);
    form.reset();
  });

  /* ---------- recherche de téléphones compatibles ---------- */
  if (D.bloc.type === 'compatible') {
    const q = $('#compat-q'), list = $('#compat-list'), res = $('#compat-res');
    let marque = 'Toutes';
    const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ');
    function render() {
      const t = norm(q.value.trim());
      const rows = Object.entries(APPAREILS).filter(([m]) => marque === 'Toutes' || m === marque)
        .flatMap(([m, L]) => L.map(x => [m, x])).filter(([m, x]) => !t || norm(`${m} ${x}`).includes(t));
      list.innerHTML = rows.map(([m, x]) => `<li><span class="op-ok" aria-hidden="true">✓</span><b>${m}</b> ${esc(x)}</li>`).join('');
      res.innerHTML = rows.length ? `${rows.length} ligne${rows.length > 1 ? 's' : ''} de modèles compatibles`
        : 'Modèle introuvable dans la liste : composez <b>*#06#</b> pour vérifier, ou demandez en boutique.';
    }
    q.addEventListener('input', render);
    document.querySelectorAll('.op-marques button').forEach(b => b.addEventListener('click', () => {
      marque = b.dataset.m;
      document.querySelectorAll('.op-marques button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      render();
    }));
    render();
    // arrivée directe sur l'ancre (#compatible) : la page est rendue après le chargement, on y descend
  }
  if (location.hash) { const t = document.querySelector(location.hash); if (t) t.scrollIntoView(); }

  /* ---------- en-tête, menu mobile, apparitions ---------- */
  const header = $('#site-header');
  header.classList.add('show-logo', 'is-solid');   // en-tête noir fixe, au-dessus de la barre « Sur cette page »
  const menu = $('#mobile-menu'), menuBtn = $('#menu-toggle');
  const setMenu = open => {
    document.body.classList.toggle('menu-open', open); menu.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open)); menuBtn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  };
  menuBtn.addEventListener('click', () => setMenu(menu.hidden));
  menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { setMenu(false); menuBtn.focus(); } });
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { threshold: .15 });
  document.querySelectorAll('.op-av__grid li, .op-etapes__list li, .op-tarif, .op-hero').forEach(el => io.observe(el));
})();
