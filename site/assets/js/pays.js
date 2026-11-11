/*
 * Orange — couche « pays » du site commun.
 * 1. Choisit la filiale : ?pays=ci|sn, sinon le dernier choix (navigateur), sinon écran de choix (Côte d'Ivoire derrière).
 * 2. Remplit les emplacements de la page depuis le fichier pays (assets/js/pays/<code>.js) :
 *    héros, scènes, Orange Money, forfaits (configurateur OU catalogue), modules propres au pays, événement daté, boutiques.
 * 3. Expose window.ORANGE (pays courant, carte, couverture) pour orange.js (comportements communs).
 * Démo d'un événement hors de ses dates : ?evenement=<id> (ex. ?pays=sn&evenement=tabaski).
 */
(function () {
  const $ = s => document.querySelector(s);
  const ALL = window.ORANGE_PAYS || {};
  const CODES = Object.keys(ALL);
  const KEY = 'orange-pays';
  const q = new URLSearchParams(location.search);
  let code = q.get('pays');
  let stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) { /* stockage indisponible */ }
  if (!ALL[code]) code = ALL[stored] ? stored : null;
  const firstVisit = !code;
  if (!code) code = 'ci';
  try { if (!firstVisit) localStorage.setItem(KEY, code); } catch (e) { /* idem */ }
  const P = ALL[code];
  const fmt = n => n.toLocaleString('fr-FR').replace(/ | /g, ' ');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  // image du dossier assets/img (.webp, puis .jpg, puis .png ; aplat si absente)
  const img = (el, path, alt) => { el.setAttribute('onerror', '__img(this)'); el.dataset.try = '0'; el.alt = alt || ''; el.src = `assets/img/${path}.webp`; };
  const urlPays = c => { const u = new URLSearchParams(location.search); u.set('pays', c); u.delete('evenement'); return `?${u}`; };

  /* ---------- événement du moment : dans ses dates, ou forcé pour la démo ---------- */
  const today = new Date().toISOString().slice(0, 10);
  const event = (P.evenements || []).find(e => q.get('evenement') === e.id || (e.du <= today && today <= e.au)) || null;

  /* ---------- en-tête et identité ---------- */
  document.documentElement.dataset.pays = code;
  const accueil = !!$('#accueil');      // page d'accueil (sinon : page d'une offre, offre.html)
  if (accueil) document.title = `${P.marque} — Le monde, à portée de main (concept)`;
  $('#pays-court').textContent = code.toUpperCase();
  // « Orange <pays> ▾ » : le nom du pays est une liste déroulante
  const chevron = '<svg aria-hidden="true" viewBox="0 0 12 8" width="11" height="8"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
  if (accueil) $('#hero-kicker').innerHTML = `Orange <span class="pays-drop"><button aria-controls="hero-pays-list" aria-expanded="false" class="pays-lien" id="hero-pays" type="button"><span class="sr-only">Pays : </span>${esc(P.nom)}${chevron}</button><ul class="pays-sel__list pays-drop__list" hidden id="hero-pays-list"></ul></span>` + (P.salut ? ` · ${esc(P.salut)}` : '');
  const listHtml = CODES.map(c => `<li><a ${c === code ? 'aria-current="true"' : ''} href="${urlPays(c)}"><b>${c.toUpperCase()}</b>${esc(ALL[c].nom)}</a></li>`).join('');
  $('#pays-list').innerHTML = listHtml;
  if (accueil) $('#hero-pays-list').innerHTML = listHtml;
  $('#pays-mobile').innerHTML = `<p class="kicker kicker--black">Pays</p>${CODES.map(c => `<a ${c === code ? 'aria-current="true"' : ''} href="${urlPays(c)}">${esc(ALL[c].nom)}</a>`).join('')}`;
  // listes déroulantes de pays (en-tête et héros) : clic pour ouvrir, clic ailleurs ou Échap pour fermer
  const drops = [[$('#pays-btn'), $('#pays-list')], [$('#hero-pays'), $('#hero-pays-list')]].filter(([b]) => b);
  const setDrop = (btn, list, open) => { list.hidden = !open; btn.setAttribute('aria-expanded', String(open)); };
  drops.forEach(([btn, list]) => btn.addEventListener('click', e => {
    e.stopPropagation();
    drops.forEach(([b, l]) => { if (l !== list) setDrop(b, l, false); });
    setDrop(btn, list, list.hidden);
    if (!list.hidden) list.querySelector('[aria-current]') ? list.querySelector('[aria-current]').focus() : list.querySelector('a').focus();
  }));
  document.addEventListener('click', e => drops.forEach(([b, l]) => { if (!l.hidden && !l.contains(e.target)) setDrop(b, l, false); }));
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    drops.forEach(([b, l]) => { if (!l.hidden) { setDrop(b, l, false); b.focus(); } });
  });

  /* ---------- écran de choix (première visite) ---------- */
  if (firstVisit) {
    const choix = $('#choix');
    $('#choix-grid').innerHTML = CODES.map(c => `<a class="choix__pays" href="${urlPays(c)}"><span class="choix__sq"><span>orange</span></span><b>${esc(ALL[c].nom)}</b></a>`).join('');
    choix.hidden = false;
    document.body.classList.add('choix-open');
    choix.tabIndex = -1;
    choix.focus();                       // le dialogue prend le focus ; Tab mène aux pays
  }

  // module « banque » (ex. Orange Bank en Côte d'Ivoire) : il prend la place des forfaits dans les liens du site
  const banque = P.modules && P.modules.banque;
  if (banque) {
    document.querySelectorAll('a[href$="#forfaits"]').forEach(a => {
      if (a.id === 'hero-cta') { a.href = '#partout'; a.textContent = 'Découvrir nos offres'; return; }
      a.href = a.getAttribute('href').replace('#forfaits', '#banque');
      if (a.textContent.trim() === 'Forfaits') a.textContent = 'Orange Bank';
    });
  }

  // outils et pays courant, partagés avec orange.js (accueil) et offre.js (pages d'offre)
  window.ORANGE = { code, pays: P, carte: (window.ORANGE_CARTES || {})[code], couverture: P.reseau.couverture, evenement: event, img, esc, fmt };
  if (!accueil) return;

  /* ---------- héros ---------- */
  const heros = event && event.heros ? event.heros : P.heros;
  img($('#hero-img'), heros.img, heros.alt);

  /* ---------- événement ---------- */
  if (event) {
    const sec = $('#evenement');
    sec.hidden = false;
    img($('#event-img'), event.img, event.alt);
    $('#event-kicker').textContent = `${P.marque} · ${event.nom}`;
    $('#event-title').innerHTML = event.titre;
    $('#event-text').textContent = event.texte;
    const o = event.offre;
    $('#event-pass').innerHTML = `<p class="pass__name">${esc(o.nom)}</p>
      <p class="pass__price">${fmt(o.prix)} <small>${P.devise}</small></p>
      <ul class="pass__list">${o.contenu.map(x => `<li><span>Inclus</span><b>${esc(x)}</b></li>`).join('')}<li><span>Validité</span><b>${esc(o.validite)}</b></li></ul>
      <p class="pass__note">${esc(event.mention || '')}</p>`;
  }

  /* ---------- scènes ---------- */
  $('#partout-steps').innerHTML = P.scenes.map((s, i) => `<li class="${i ? '' : 'is-on'}"><p class="partout__word">${esc(s.mot)}</p><p class="partout__line">${esc(s.ligne)}</p><a class="partout__cta" href="offre.html?pays=${code}&amp;offre=${s.id}">Découvrir nos offres<span aria-hidden="true"> →</span><span class="sr-only"> : ${esc(s.mot.replace(/\.$/, ''))}</span></a></li>`).join('');
  const sq = $('#partout-square');
  P.scenes.forEach((s, i) => { const im = document.createElement('img'); im.loading = 'lazy'; if (!i) im.className = 'is-on'; img(im, s.img, s.alt); sq.appendChild(im); });
  $('#partout').style.height = `${P.scenes.length * 100}vh`;   // un écran de défilement par offre
  document.querySelector('.partout__count').lastChild.textContent = ` / ${String(P.scenes.length).padStart(2, '0')}`;

  /* ---------- Orange Money ---------- */
  $('#money-lien').href = `offre.html?pays=${code}&offre=money`;
  $('#money-marchand').href = `offre.html?pays=${code}&offre=money#marchand`;
  const M = P.money, [c1, c2] = M.contacts;
  document.querySelectorAll('[data-m="prenom"]').forEach(e => { e.textContent = M.prenom; });
  document.querySelectorAll('[data-m="numero"]').forEach(e => { e.textContent = c1.numero; });
  const ini = n => n.trim()[0].toUpperCase();
  $('#ms-recents').innerHTML = [[c1.nom, 'Hier'], [c2.nom, 'Lun.'], [M.commerce, 'Dim.']].map(([n, d]) => `<li><i>${ini(n)}</i>${esc(n)}<em>${d}</em></li>`).join('');
  $('#ms-contacts').innerHTML = M.contacts.map((c, i) => `<li class="${i ? '' : 'is-sel'}"><i>${ini(c.nom)}</i>${esc(c.nom)}<em>${esc(c.numero)}</em></li>`).join('');
  const fig = $('.money__photo');
  M.photos.forEach((ph, i) => { const im = document.createElement('img'); im.loading = 'lazy'; im.dataset.for = ph.etapes; if (!i) im.className = 'is-on'; img(im, ph.img, ph.alt); fig.appendChild(im); });

  /* ---------- Orange Bank (module) : remplace la section forfaits ---------- */
  if (banque) {
    $('#forfaits').hidden = true;
    $('#banque').hidden = false;
    $('#banque-title').innerHTML = banque.titre;
    $('#banque-lead').textContent = banque.texte;
    $('#bq-devise').textContent = P.devise;
    $('#bq-lien').href = `offre.html?pays=${code}&offre=bank`;
    $('#bq-lien-carte').href = `offre.html?pays=${code}&offre=bank#tarifs`;
    $('#bq-note').textContent = `Simulation indicative à ${String(banque.taux).replace('.', ',')} % par an — concept, à vérifier auprès de ${P.marque}.`;
  }

  /* ---------- forfaits : configurateur (commun) ou catalogue (format du pays) ---------- */
  const F = P.forfaits;
  if (F.affichage === 'catalogue') {
    $('#cfg').hidden = true;
    $('#forfaits-title').innerHTML = 'Le pass<br>qu’il vous faut.';
    $('#forfaits-lead').textContent = 'Choisissez votre pass : il s’active en un instant.';
    const cat = $('#catalogue');
    cat.hidden = false;
    cat.innerHTML = F.offres.map((o, i) => `<li><button aria-pressed="false" class="offre${o.vedette ? ' offre--vedette' : ''}" data-i="${i}" type="button">
      <span class="offre__nom">${esc(o.nom)}</span><span class="offre__contenu">${o.contenu.map(esc).join(' · ')}</span>
      <span class="offre__prix">${fmt(o.prix)} ${P.devise}</span></button></li>`).join('');
    const show = i => {
      const o = F.offres[i];
      cat.querySelectorAll('.offre').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.i === i)));
      $('#pass-name').textContent = o.nom;
      $('#pass-price').textContent = fmt(o.prix);
      $('#pass-list').innerHTML = o.contenu.map(x => `<li><span>Inclus</span><b>${esc(x)}</b></li>`).join('') + `<li><span>Validité</span><b>${esc(o.validite)}</b></li>`;
      $('#pass-note').textContent = 'Offres et prix illustratifs — concept, à vérifier auprès de la filiale.';
    };
    cat.addEventListener('click', e => { const b = e.target.closest('.offre'); if (b) show(+b.dataset.i); });
    show(Math.max(0, F.offres.findIndex(o => o.vedette)));
  }

  /* ---------- module propre au pays : fidélité ---------- */
  const fid = P.modules && P.modules.fidelite;
  if (fid) {
    $('#fidelite').hidden = false;
    $('#fid-kicker').textContent = `${fid.nom} · ${P.marque}`;
    $('#fid-title').innerHTML = fid.titre;
    $('#fid-text').textContent = fid.texte;
    $('#fid-steps').innerHTML = fid.etapes.map((e, i) => `<li><b>${String(i + 1).padStart(2, '0')}</b><span><strong>${esc(e.titre)}</strong> ${esc(e.texte)}</span></li>`).join('');
    // compteur de points qui monte à l'arrivée de la section
    const out = $('#fid-points');
    new IntersectionObserver((es, io) => es.forEach(en => {
      if (!en.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), dur = 1400;
      const tick = t => { const k = Math.min(1, (t - t0) / dur); out.textContent = fmt(Math.round(fid.points * (1 - Math.pow(1 - k, 3)))); if (k < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }), { threshold: .4 }).observe($('#fidelite'));
  }

  /* ---------- réseau, boutiques, démo des événements ---------- */
  $('#reseau-pays').textContent = P.marque;
  $('#boutiques-lead').textContent = P.boutiques;
  $('#boutiques-lien').href = P.siteOfficiel;
  const evs = P.evenements || [];
  if (evs.length) {
    $('#demo-events').innerHTML = 'Démo : ' + evs.map(e => (event && event.id === e.id)
      ? `<a href="${urlPays(code)}">revenir hors ${esc(e.nom)}</a>`
      : `<a href="${urlPays(code)}&evenement=${e.id}">voir le site pendant la ${esc(e.nom)}</a>`).join(' · ');
  }

})();
