# Brasserie Manon – Website

Website der Brasserie Manon in Berlin (manon-berlin.de), aus Webflow exportiert.

## Struktur

```
index.html, menu.html, infos.html,
manon-photography-book.html,
imprint.html, privacy-policy.html, 401.html   Seiten
css/          Webflow-Styles
js/           webflow.js (Interaktionen, Animationen)
images/       Bilder
documents/    Lottie-Animationen (JSON)
fonts/        Icon-Font
```

## Lokal ansehen

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

Die Lottie-Animationen laden nur über einen Webserver, nicht per Doppelklick auf die HTML-Datei.

## Hinweise

- Externe Abhängigkeiten: jQuery (Webflow-CDN), Google Fonts, Adobe Fonts (Typekit), OpenTable-Reservierung.
- `401.html` enthält ein Webflow-Passwortformular und funktioniert ohne Webflow-Hosting nicht.
