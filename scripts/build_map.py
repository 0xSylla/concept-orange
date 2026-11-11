"""
Cartes des pays pour la section réseau : contours (references/<ISO3>.geo.json, domaine public,
github.com/johan/world.geo.json) projetés en SVG, et positions des villes.
Usage : python scripts/build_map.py  ->  site/assets/js/cartes.js  (window.ORANGE_CARTES.ci / .sn)
Pour un nouveau pays : télécharger son contour dans references/ et l'ajouter à PAYS.
"""
import json, math, os

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
PAYS = {
    "ci": ("CIV", 7.5, {  # nom : (longitude, latitude)
        "Abidjan": (-4.008, 5.360), "Yamoussoukro": (-5.276, 6.827), "Bouaké": (-5.030, 7.690),
        "San-Pédro": (-6.636, 4.748), "Korhogo": (-5.629, 9.458), "Daloa": (-6.450, 6.877),
        "Man": (-7.553, 7.412), "Odienné": (-7.564, 9.510), "Bondoukou": (-2.800, 8.040), "Gagnoa": (-5.950, 6.130),
    }),
    "sn": ("SEN", 14.5, {
        "Dakar": (-17.447, 14.693), "Thiès": (-16.926, 14.788), "Touba": (-15.883, 14.850),
        "Saint-Louis": (-16.490, 16.030), "Kaolack": (-16.070, 14.150), "Mbour": (-16.960, 14.420),
        "Ziguinchor": (-16.270, 12.560), "Tambacounda": (-13.670, 13.770), "Kolda": (-14.950, 12.890), "Matam": (-13.250, 15.660),
    }),
}

out = {}
for code, (iso, lat_ref, villes) in PAYS.items():
    geo = json.load(open(os.path.join(ROOT, "references", f"{iso}.geo.json")))["features"][0]["geometry"]["coordinates"][0]
    lat0 = math.radians(lat_ref)
    proj = lambda lon, lat: (lon * math.cos(lat0), -lat)
    pts = [proj(*p) for p in geo]
    xs, ys = [p[0] for p in pts], [p[1] for p in pts]
    W = 600
    s = W / (max(xs) - min(xs))
    H = round((max(ys) - min(ys)) * s)
    tx = lambda p: (round((p[0] - min(xs)) * s, 1), round((p[1] - min(ys)) * s, 1))
    out[code] = {
        "w": W, "h": H,
        "path": "M" + " L".join(f"{x} {y}" for x, y in map(tx, pts)) + " Z",
        "villes": {n: tx(proj(*c)) for n, c in villes.items()},
    }
    print(code, W, "x", H)

dst = os.path.join(ROOT, "site", "assets", "js", "cartes.js")
with open(dst, "w", encoding="utf-8") as f:
    f.write("/* Généré par scripts/build_map.py — contours des pays (domaine public) et villes. */\n")
    f.write(f"window.ORANGE_CARTES = {json.dumps(out, ensure_ascii=False)};\n")
print("->", dst)
