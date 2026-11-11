# Orange — concept « Le carré » — lancer en local

## Lancer

Ouvrir un terminal (PowerShell) et copier :

```powershell
cd "C:\Users\DELL02\Desktop\Personal Builds\Orange"
python -m http.server 8099 --bind 127.0.0.1 --directory "site"
```

Puis ouvrir : **http://127.0.0.1:8099/**

Arrêter : `Ctrl + C` dans le terminal.

### Adresses utiles

| Page | Adresse |
|---|---|
| Accueil (écran de choix du pays à la 1re visite) | http://127.0.0.1:8099/ |
| Côte d'Ivoire | http://127.0.0.1:8099/?pays=ci |
| Sénégal | http://127.0.0.1:8099/?pays=sn |
| Sénégal pendant la Tabaski (démo) | http://127.0.0.1:8099/?pays=sn&evenement=tabaski |
| Une page d'offre (ex. eSIM) | http://127.0.0.1:8099/offre.html?pays=ci&offre=esim |
| Page Orange Money / devenir marchand | http://127.0.0.1:8099/offre.html?pays=ci&offre=money#marchand |

Revoir l'écran de choix du pays : ouvrir le site en navigation privée.
Images : `site/assets/img/ci`, `sn`, `commun` (prompts dans `PROMPTS-IMAGES.md`).

## Voir le site sur le téléphone (même Wi-Fi)

```powershell
cd "C:\Users\DELL02\Desktop\Personal Builds\Orange"
python -m http.server 8099 --bind 0.0.0.0 --directory "site"
```

Trouver l'adresse de l'ordinateur avec `ipconfig` (ligne « Adresse IPv4 », ex. 192.168.1.23),
puis ouvrir sur le téléphone : `http://192.168.1.23:8099/`.
Si Windows demande l'autorisation du pare-feu pour Python, accepter pour les réseaux privés.
