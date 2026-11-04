import { organisation } from '../config/organisation';

const base = import.meta.env.BASE_URL;

/** Interne Pfade um den (evtl. vorhandenen) Unterpfad ergänzen, z. B. /pipsyv/ueber-uns/ */
export function url(pfad: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(pfad)) return pfad;
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  const p = pfad.startsWith('/') ? pfad : `/${pfad}`;
  return `${b}${p}`;
}

/** Entfernt Platzhalter-Klammern, z. B. "[kontakt@beispiel.de]" → "kontakt@beispiel.de" */
export const ohneKlammern = (wert: string) => wert.replace(/[\[\]]/g, '');

/** mailto-Link aus der Konfiguration */
export const kontaktMailto = () => `mailto:${ohneKlammern(organisation.kontakt.email)}`;

/** Spezialziele in Buttons auflösen */
export function zielAufloesen(ziel: string): string {
  if (ziel === 'kontakt-email') return kontaktMailto();
  return url(ziel);
}

/** Datum deutsch formatieren */
export const datumDE = (d: Date) =>
  d.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
