// Brasserie Manon – Sprachumschaltung (DE/EN) und Jahreszahl im Footer.
// Neue Texte: im HTML ein data-i18n="schluessel" setzen und hier in beiden Sprachen eintragen.

const translations = {
  de: {
    "nav.about": "Über uns",
    "nav.menu": "Karte",
    "nav.hours": "Öffnungszeiten",
    "nav.contact": "Kontakt",
    "hero.eyebrow": "Französische Brasserie · Berlin",
    "hero.lead": "Klassische französische Küche, gute Weine und ein Tisch für jeden Abend.",
    "hero.cta": "Tisch reservieren",
    "about.title": "Über uns",
    "about.text": "Hier steht bald unsere Geschichte: wer wir sind, was wir kochen und warum wir die Brasserie Manon eröffnet haben.",
    "menu.title": "Karte",
    "menu.note": "Beispielkarte – die aktuelle Karte folgt in Kürze.",
    "menu.starters": "Vorspeisen",
    "menu.mains": "Hauptgerichte",
    "menu.desserts": "Desserts",
    "hours.title": "Öffnungszeiten",
    "hours.weekdays": "Montag – Freitag",
    "hours.weekend": "Samstag – Sonntag",
    "contact.title": "Kontakt & Reservierung",
    "contact.text": "Reservierungen gerne telefonisch oder per E-Mail.",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
  },
  en: {
    "nav.about": "About",
    "nav.menu": "Menu",
    "nav.hours": "Opening hours",
    "nav.contact": "Contact",
    "hero.eyebrow": "French brasserie · Berlin",
    "hero.lead": "Classic French cooking, good wine and a table for every evening.",
    "hero.cta": "Book a table",
    "about.title": "About us",
    "about.text": "Our story is coming soon: who we are, what we cook and why we opened Brasserie Manon.",
    "menu.title": "Menu",
    "menu.note": "Sample menu – the current menu is coming soon.",
    "menu.starters": "Starters",
    "menu.mains": "Mains",
    "menu.desserts": "Desserts",
    "hours.title": "Opening hours",
    "hours.weekdays": "Monday – Friday",
    "hours.weekend": "Saturday – Sunday",
    "contact.title": "Contact & reservations",
    "contact.text": "Book by phone or email.",
    "footer.imprint": "Legal notice",
    "footer.privacy": "Privacy",
  },
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.de;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text) el.textContent = text;
  });
  const toggle = document.querySelector(".lang-toggle");
  if (toggle) toggle.textContent = lang === "de" ? "EN" : "DE";
  try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
}

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) { /* ignore */ }
  if (saved && saved !== "de") setLanguage(saved);

  const toggle = document.querySelector(".lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      setLanguage(document.documentElement.lang === "de" ? "en" : "de");
    });
  }
});
