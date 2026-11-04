/**
 * ============================================================
 *  ZENTRALE EINSTELLUNGEN DER WEBSITE
 * ============================================================
 *  Hier werden Name, Rechtsform, Kontaktdaten, Hosting und
 *  Social-Media-Links gepflegt. Header, Menü, Footer, Impressum
 *  und Datenschutzerklärung lesen ihre Angaben aus dieser Datei.
 *
 *  Alles in [ECKIGEN KLAMMERN] ist ein Platzhalter und muss vor
 *  der Veröffentlichung ersetzt werden.
 * ============================================================
 */

export type Rechtsform = 'initiative' | 'verein';
export type Hosting = 'github-pages' | 'eigener-anbieter';

export const organisation = {
  /** Name, wie er im Header und in Texten erscheint */
  name: 'Interessensvertretung Psychosoziale Versorgung',

  /** Kurzbeschreibung für Suchmaschinen und Link-Vorschauen */
  beschreibung:
    'Politische Patient*inneninitiative von Menschen, die auf psychosoziale Unterstützung angewiesen sind – gemeinsam sichtbar, hörbar und politisch aktiv für eine bedarfsgerechte und zugängliche Versorgung.',

  /**
   * Rechtsform:
   *  - 'initiative' = loser Zusammenschluss ohne Rechtsform (aktuell)
   *  - 'verein'     = nach Gründung eines (eingetragenen) Vereins
   * Beim Umstellen auf 'verein' passen sich Impressum,
   * Datenschutz und der Menüpunkt „Organisation“ automatisch an.
   */
  rechtsform: 'initiative' as Rechtsform,

  /** Kontakt */
  kontakt: {
    email: 'kontakt@interessensvertretung-psychv.de',
    /** Matrix/Element Space Link zur Community */
    matrixSpace: 'https://matrix.to/#/#iv.psy.v:matrix.org',
  },

  /**
   * Verantwortliche Person(en) für Impressum & Datenschutz,
   * solange KEIN Verein besteht (natürliche Person nötig).
   */
  verantwortlich: {
    name: 'Marie Bellet',
    /** optionale Zusatzzeile über der Straße, z. B. c/o-Angabe – leer lassen = wird nicht angezeigt */
    zusatz: 'c/o Praxis für Psychotherapie Susanne Laszczyk',
    strasse: 'Kaiser-Friedrich-Str. 40a',
    ort: '75172 Pforzheim',
    email: 'kontakt@interessensvertretung-psychv.de',
    telefon: '', // optional, z. B. '[+49 ...]' – leer lassen = wird nicht angezeigt
  },

  /** Angaben NACH einer Vereinsgründung (rechtsform: 'verein') */
  verein: {
    name: '[Name des Vereins e. V.]',
    strasse: '[Straße Hausnummer]',
    ort: '[PLZ Ort]',
    vertretungsberechtigt: ['[Vorname Nachname (Vorsitz)]', '[Vorname Nachname (stellv. Vorsitz)]'],
    registergericht: '[Amtsgericht Ort]',
    registernummer: '[VR 12345]',
  },

  /**
   * Hosting – bestimmt den entsprechenden Abschnitt der
   * Datenschutzerklärung.
   *  - 'github-pages'      = GitHub Pages (GitHub Inc., USA)
   *  - 'eigener-anbieter'  = anderer Anbieter, Angaben unten eintragen
   */
  hosting: 'github-pages' as Hosting,
  hostingAnbieter: {
    name: '[Name des Hosting-Anbieters]',
    anschrift: '[Anschrift des Anbieters]',
    datenschutzUrl: '[https://link-zur-datenschutzerklaerung-des-anbieters]',
  },

  /**
   * Social Media – leere URL ('') = Icon wird als „bald verfügbar“
   * angezeigt. Sobald der Account existiert, einfach URL eintragen.
   */
  social: {
    instagram: '', // z. B. 'https://www.instagram.com/[accountname]/'
  },

  /** Zuständige Datenschutz-Aufsichtsbehörde (Bundesland des Sitzes) */
  aufsichtsbehoerde: {
    name: 'Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg',
    url: 'https://www.baden-wuerttemberg.datenschutz.de',
  },

  /** Stand der Rechtstexte */
  standRechtstexte: 'Oktober 2026',
};

/* ------------------------------------------------------------
 *  MENÜ
 *  Reihenfolge = Reihenfolge im Menü. `sichtbar: false` blendet
 *  einen Punkt aus, ohne die Seite zu löschen.
 *  Die Unterpunkte bei „Organisation“ werden automatisch aus
 *  src/content/organisation/ erzeugt (nur sichtbare Seiten).
 * ------------------------------------------------------------ */
export interface SubMenuItem {
  titel: string;
  pfad: string;
}

export interface MenuItem {
  titel: string;
  pfad: string;
  sichtbar: boolean;
  hervorgehoben?: boolean;
  unterpunkte?: SubMenuItem[];
}

export const menu: MenuItem[] = [
  { titel: 'Startseite', pfad: '/', sichtbar: true },
  { titel: 'Über uns', pfad: '/ueber-uns/', sichtbar: true },
  { titel: 'Unsere Ziele', pfad: '/ziele/', sichtbar: true },
  { titel: 'Unsere Leitlinien', pfad: '/leitlinien/', sichtbar: true },
  {
    titel: 'Mitmachen',
    pfad: '/mitmachen/',
    sichtbar: true,
    unterpunkte: [
      { titel: 'Matrix/Element Space (Austausch)', pfad: '/mitmachen/#matrix' },
    ],
  },
  { titel: 'Aktuelles', pfad: '/aktuelles/', sichtbar: true },
  { titel: 'Organisation', pfad: '/organisation/', sichtbar: true },
  { titel: 'Kontakt', pfad: '/kontakt/', sichtbar: true },
  { titel: 'Hilfe in Krisen', pfad: '/hilfe-in-krisen/', sichtbar: true, hervorgehoben: true },
];

/** Hilfsfunktion: Ist ein Wert noch ein Platzhalter? */
export const istPlatzhalter = (wert: string) => !wert || /^\[.*\]$/.test(wert.trim());
