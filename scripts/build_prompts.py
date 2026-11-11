"""
Génère Orange/PROMPTS-IMAGES.md : un prompt complet (style inclus) par image utilisée par le site.
Usage : python scripts/build_prompts.py
Pour une nouvelle image ou un nouveau pays : ajouter une ligne dans IMGS (et le pays dans PAYS / TITRES).
"""
import os

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")

STYLE = ("Photorealistic cinematic photograph, {pays}. Authentic local people with deep brown skin and natural, genuine expressions, "
         "contemporary everyday clothing. Warm golden light with subtle vivid orange accents (#FF7900) in the scene, never a logo. "
         "Shallow depth of field, 35mm lens, rich contrast, deep blacks, editorial advertising quality. "
         "Phone screens dark or blurred. No text, no letters, no logos, no brand names, no watermark.")
PAYS = {"ci": "Côte d'Ivoire, West Africa", "sn": "Senegal, West Africa", "commun": "West Africa"}
TITRES = {"ci": "CÔTE D'IVOIRE — dossier `ci/`", "sn": "SÉNÉGAL — dossier `sn/`", "commun": "COMMUN À TOUS LES PAYS — dossier `commun/`"}
PRIO = {1: "1 — d'abord (donne le ton)", 2: "2 — l'essentiel de la démo", 3: "3 — pages et moments secondaires", 4: "4 — sections communes de fin de page"}

# (fichier, format, où l'image apparaît, priorité, scène)
IMGS = {
    "ci": [
        ("hero-ville", "16:9", "Héros de l'accueil : se révèle dans le carré qui s'ouvre (le centre est vu en premier).", 1,
         "Abidjan at dusk seen from the Ébrié lagoon waterfront: the Plateau business district skyline glowing across the water, the sky shifting from deep blue to a burning orange horizon. In the exact centre of the frame, a young woman in a flowing outfit stands on the waterfront looking at her phone, its glow softly lighting her face. Lower-left third of the image calm and dark (the title sits there). Hopeful, cinematic, wide establishing shot."),
        ("offre-internet", "1:1", "Carré « Internet mobile » + en-tête de la page de l'offre + vignette « Nos autres offres ».", 2,
         "A young Ivorian woman with headphones sitting by the window of a gbaka minibus in Abidjan traffic, smiling while watching a video on her phone, the city passing by in warm blurred light. Subject centred, readable even as a small thumbnail."),
        ("offre-appels", "1:1", "Carré « Appels & SMS » + page + vignette.", 2,
         "A young Ivorian professional man in a crisp shirt on a high-rise office balcony in Abidjan's Plateau district, laughing during a phone call, the city and lagoon blurred behind him, late afternoon light. Subject centred."),
        ("offre-esim", "1:1", "Carré « eSIM » + page eSIM + vignette.", 2,
         "Close-up of a young Ivorian woman in a bright café in Abidjan holding her phone up to scan a QR code printed on a small plain white card on the table (code blurred, no readable text), focused and smiling, a coffee cup and orange accents, soft daylight. Subject centred."),
        ("offre-maison", "1:1", "Carré « Internet à la maison » + page + vignette.", 2,
         "An Ivorian family in a cosy modern living room in Cocody in the evening: parents and two children on the sofa watching a film together, a small plain white home internet router with a soft light on a shelf, warm lamp light, an orange cushion. Family centred."),
        ("offre-energie", "1:1", "Carré « Orange Énergie » + page + vignette.", 2,
         "Evening in a village in central Côte d'Ivoire: a family in front of their house lit by a warm bulb powered by a small solar panel on the roof, children doing homework on a bench, the mother checking her phone, a small TV glowing through the doorway; deep blue dusk sky, warm cosy light. Composition centred on the lit doorway."),
        ("offre-smartphones", "1:1", "Carré « Smartphones » + page + vignette.", 2,
         "A young Ivorian man in a bright modern telecom store in Abidjan holding a brand-new smartphone with no visible brand, screen off, smiling with excitement, an advisor softly blurred beside him, clean white shelves with orange accents. Subject centred."),
        ("offre-bank", "1:1", "En-tête de la page Orange Bank (bouton « Ouvrir mon compte » de la section Orange Bank) + vignette.", 3,
         "A young Ivorian woman shop owner at the counter of her small cosmetics shop in Abidjan paying a supplier with a plain orange prepaid bank card (no logo, no numbers, no text) while glancing at her phone with a quiet proud smile, products neatly arranged behind her, soft late-afternoon light. Subject centred."),
        ("money-boutique", "4:5", "Section Orange Money de l'accueil (étapes 1 à 3) ET en-tête carré de la page Orange Money : sujet bien centré pour tenir dans les deux cadrages.", 2,
         "Inside a small neighbourhood grocery shop in Abidjan: a young customer holds up her phone to scan a small plain QR code sticker on the counter (code blurred, no text) while the smiling shopkeeper, a man in his forties, watches his own phone confirm the payment; shelves of colourful products behind, an orange wall, warm evening light. Both people in the centre of the frame."),
        ("money-maman", "4:5", "Section Orange Money de l'accueil (étapes 4 et 5 : « c'est reçu »).", 3,
         "In a courtyard in a small town in Côte d'Ivoire, a mother in her fifties wearing a wax-print dress reads a message on her phone and smiles with emotion, a hand on her heart, as if she just received money from her child living in the city. Soft late-afternoon light, laundry and plants in the background. Subject centred."),
    ],
    "sn": [
        ("hero-ville", "16:9", "Héros de l'accueil : se révèle dans le carré qui s'ouvre (le centre est vu en premier).", 1,
         "Dakar at dusk seen from the Corniche: the Atlantic ocean, the city lights and the silhouette of the Mamelles lighthouse hill in the distance, the sky shifting from deep blue to a burning orange horizon over the sea. In the exact centre of the frame, a young Senegalese man in a light kaftan sits on the seawall looking at his phone, its glow softly lighting his face. Lower-left third calm and dark (the title sits there). Hopeful, cinematic, wide establishing shot."),
        ("offre-illimix", "1:1", "Carré « Illimix » + page + vignette.", 2,
         "A young Senegalese woman in an elegant outfit and headwrap sitting on the seawall of the Corniche in Dakar, laughing during a video call on her phone, the Atlantic ocean softly blurred behind her, late afternoon light. Subject centred."),
        ("offre-internet", "1:1", "Carré « Internet mobile » + page + vignette.", 2,
         "University students at Cheikh Anta Diop University in Dakar sitting together outdoors, two young men and a young woman gathered around one phone watching a video and laughing, notebooks open, warm afternoon light, campus trees softly blurred. Group centred."),
        ("offre-esim", "1:1", "Carré « eSIM » + page eSIM + vignette.", 2,
         "Close-up of a young Senegalese man on a café terrace in Dakar holding his phone up to scan a QR code printed on a small plain white card on the table (code blurred, no readable text), focused and smiling, a glass of red bissap juice and orange accents, soft daylight. Subject centred."),
        ("offre-maison", "1:1", "Carré « Internet à la maison » + page + vignette.", 2,
         "A Senegalese family in their living room in Dakar in the evening: parents, grandfather and children on the sofa and floor cushions cheering a football match on TV, a small plain white home internet router with a soft light on a shelf, an attaya teapot on the low table, warm lamp light. Family centred."),
        ("offre-international", "1:1", "Carré « Appels vers l'étranger » + page + vignette.", 2,
         "A grandmother in a colourful boubou and headwrap sitting in the courtyard of her family house in Senegal, smiling with emotion during a video call on her phone with her grandson who lives abroad, a mango tree and warm late-afternoon light. Subject centred."),
        ("money-boutique", "4:5", "Section Orange Money de l'accueil (étapes 1 à 3) ET en-tête carré de la page Orange Money : sujet bien centré.", 2,
         "Inside a small neighbourhood shop in Dakar: a young customer holds up his phone to scan a small plain QR code sticker on the counter (code blurred, no text) while the smiling shopkeeper, a woman in her forties wearing a headwrap, watches her own phone confirm the payment; shelves of colourful products, sacks of rice and an attaya kettle, an orange wall, warm evening light. Both people in the centre of the frame."),
        ("money-maman", "4:5", "Section Orange Money de l'accueil (étapes 4 et 5).", 3,
         "In a sandy courtyard of a family house in Thiès, Senegal, a mother in her fifties wearing a colourful boubou reads a message on her phone and smiles with emotion, a hand on her heart, as if she just received money from her child living in Dakar. Soft late-afternoon light, a mango tree and plastic chairs in the background. Subject centred."),
        ("tabaski-heros", "16:9", "Remplace le héros pendant la Tabaski (démo : ?pays=sn&evenement=tabaski). Même règle : sujet au centre.", 3,
         "A Senegalese family in their finest festive clothes — shimmering bazin boubous in white, gold and orange — walking together in a Dakar neighbourhood street at sunset on the day of Tabaski, children holding their parents' hands, the sky glowing orange. Family in the exact centre of the frame, lower-left third calm. Warm, celebratory, wide cinematic shot."),
        ("tabaski", "1:1", "Section « Tabaski » sous le héros, pendant la fête ou en démo.", 3,
         "A Senegalese family gathered in the courtyard of their home for Tabaski: grandparents, parents and children in festive bright bazin outfits sit together on mats and chairs and hold up a phone on a video call with a relative abroad, everyone waving and laughing; plates of food, warm afternoon light, joyful atmosphere. Group centred."),
    ],
    "commun": [
        ("impact-codeuse", "4:5", "Section « Impact » de l'accueil, tous pays.", 4,
         "A young West African woman developer with braided hair, focused and confident, coding on a laptop in a bright modern digital training centre, other learners softly blurred behind her, orange chairs, natural light. Subject centred."),
        ("impact-enfants", "4:5", "Section « Impact », tous pays.", 4,
         "Primary-school children in a classroom in a small West African town discovering tablets for the first time with their teacher, faces lit with curiosity and joy, colourful classroom walls, soft daylight."),
        ("impact-entrepreneure", "4:5", "Section « Impact », tous pays.", 4,
         "A young West African woman entrepreneur in her small fashion workshop, wax fabrics and a sewing machine around her, photographing one of her garments with her phone to sell it online, proud smile, warm light. Subject centred."),
        ("boutique", "16:9", "Section « Boutiques » en fin d'accueil, tous pays.", 4,
         "A modern telecom store interior in a West African capital at night seen through its large glass front: a clean white and black interior with vivid orange accents, an advisor helping a smiling customer choose a smartphone at a wooden table, other customers softly blurred, no signage."),
    ],
}

n = sum(len(v) for v in IMGS.values())
out = [f"""# Orange — concept « Le carré » : prompts des images (version revisitée)

**{n} images** : {len(IMGS['ci'])} Côte d'Ivoire · {len(IMGS['sn'])} Sénégal · {len(IMGS['commun'])} communes.
Chaque prompt ci-dessous est **complet** (le style est déjà inclus) : copiez le bloc tel quel dans votre outil.
Fichier généré par `scripts/build_prompts.py` : modifiez le script plutôt que ce fichier.

## Où déposer les images

```
Orange/site/assets/img/
  ci/       Côte d'Ivoire
  sn/       Sénégal
  commun/   tous les pays
```

Nom **exact** indiqué, en `.webp`, `.jpg` ou `.png` (le site essaie les trois). Tant qu'une image manque, un aplat orange la remplace.
Taille : 2048 px sur le grand côté (1600 px suffit). Rafraîchissez la page pour voir l'image.

## Trois règles qui comptent pour ce site

1. **Le sujet au centre.** Les images passent par des carrés : le héros se révèle depuis le centre, et les images d'offre servent à la fois
   de carré, d'en-tête de page et de petite vignette. Un sujet décentré se fait couper.
2. **Les écrans de téléphone éteints ou flous.** Le site dessine ses propres écrans ; les IA écrivent mal sur les téléphones.
3. **Aucun logo, aucune enseigne, aucun texte.** C'est un concept non officiel : l'orange n'apparaît que par touches (un pagne, un mur, un ciel).

**Champ « negative prompt »** (si votre outil en a un) :
```
text, letters, words, logo, brand name, signage, watermark, readable phone screen, distorted hands, extra fingers, plastic skin, cartoon, illustration, oversaturated
```

## Ordre conseillé

"""]
for p in (1, 2, 3, 4):
    lst = [f"`{d}/{f}`" for d, L in IMGS.items() for (f, fmt, ou, pr, t) in L if pr == p]
    out.append(f"- **{PRIO[p]}** : " + ", ".join(lst) + "\n")
out.append("\nVérifiez les deux `hero-ville` sur le site avant de lancer le reste : ce sont eux qui fixent la lumière et l'étalonnage.\n")

for d, L in IMGS.items():
    out.append(f"\n---\n\n# {TITRES[d]}\n")
    for (f, fmt, ou, pr, t) in L:
        out.append(f"\n### `{d}/{f}` — {fmt}\n*Où : {ou}*\n\n```\n{t} {STYLE.format(pays=PAYS[d])} Aspect ratio {fmt}.\n```\n")

out.append("""
---

## Ce qui a changé par rapport à la première version

- Le style est **intégré à chaque prompt** : plus besoin de le coller à la main.
- `hero-ville` (les deux pays) et `tabaski-heros` : sujet **au centre**, car le carré s'ouvre depuis le centre, et tiers bas-gauche calme pour le titre.
- `money-boutique` (les deux pays) : la scène montre maintenant **le scan d'un QR code au comptoir**, car l'image ouvre aussi la page
  Orange Money et sa partie « Devenir marchand ». Sujet centré pour tenir en 4:5 comme en carré.
- `offre-bank` sert désormais à la page Orange Bank (elle n'est plus dans les carrés « Nos offres »).
- Plus de prompt `offre-money` : Orange Money a sa propre section et sa propre page.
""")

with open(os.path.join(ROOT, "PROMPTS-IMAGES.md"), "w", encoding="utf-8") as fh:
    fh.write("".join(out))
print(n, "prompts ->", os.path.join(ROOT, "PROMPTS-IMAGES.md"))
