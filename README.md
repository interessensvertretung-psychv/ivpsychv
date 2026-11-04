# Website – Interessensvertretung Psychosoziale Versorgung

Diese Website wurde mit [Astro](https://astro.build) als moderne, datensparsame und statische Website gebaut.

## Schnellstart

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Lokalen Entwicklungsserver starten
npm run dev

# 3. Statische Website für Produktion bauen
npm run build
```

Die gebaute Website befindet sich anschließend im Ordner `dist/` und kann auf jedem Webserver oder via GitHub Pages gehostet werden.

---

## Wo ändere ich was?

### 1. Allgemeine Einstellungen & Kontaktdaten
Öffne `src/config/organisation.ts`:
- **Name, E-Mail-Adresse**
- **Matrix/Element Space Link**
- **Instagram-Link** (sobald vorhanden eintragen)
- **Hosting** (`github-pages` oder `eigener-anbieter`)
- **Impressum & Datenschutz-Angaben**

### 2. Vereinsgründung vorbereiten / umschalten
In `src/config/organisation.ts`:
1. `rechtsform: 'verein'` einstellen.
2. Die Vereinsangaben (Vorstand, Registergericht, Registernummer) in `organisation.verein` eintragen.
3. Im Ordner `src/content/organisation/` die gewünschten Seiten aktivieren:
   - In `satzung.md`, `vorstand.md` oder `mitgliedschaft.md` im oberen Bereich `sichtbar: true` setzen.
   - Sie erscheinen dann automatisch im Menü unter „Organisation“ und auf der Organisations-Übersichtsseite!

### 3. Startseite (Karussell) bearbeiten
Die einzelnen Fenster des Karussells liegen in `src/content/startseite/`:
- `01-gemeinsam.md`
- `02-was-wir-erreichen-wollen.md`
- `03-du-entscheidest.md`
- `04-im-hintergrund.md`
- `05-persoenliche-erfahrungen.md`
- `06-wie-wir-zusammenarbeiten.md`
- `07-mach-mit.md`

Du kannst die Texte oder Überschriften dort direkt mit jedem Texteditor bearbeiten.

### 4. Weitere Inhaltsseiten bearbeiten
Liegen unter `src/content/seiten/`:
- `ueber-uns.md`
- `ziele.md`
- `leitlinien.md`
- `mitmachen.md`
- `kontakt.md`
- `hilfe-in-krisen.md`

### 5. Aktuelles / Meldungen
Neue Meldungen einfach als Markdown-Datei in `src/content/aktuelles/` anlegen.

---

## Veröffentlichung auf GitHub Pages

Ein Workflow unter `.github/workflows/deploy.yml` ist bereits hinterlegt.
1. Repository zu GitHub pushen.
2. In den Repository-Einstellungen unter **Settings → Pages**:
   - Source: **GitHub Actions** auswählen.
3. Bei jedem Push auf `main` oder `master` wird die Seite automatisch gebaut und bereitgestellt.
