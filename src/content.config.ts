import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Inhaltsbereiche der Website. Jede Markdown-Datei in den
 * entsprechenden Ordnern unter src/content/ wird automatisch
 * eingelesen. Die Felder oben in jeder Datei (zwischen den ---)
 * werden hier geprüft – fehlt ein Pflichtfeld, meldet der Build
 * einen verständlichen Fehler.
 */

/** Startseiten-Karussell: eine Datei = ein Fenster */
const startseite = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/startseite' }),
  schema: z.object({
    titel: z.string(),
    reihenfolge: z.number(),
    /** Kurzname für Direktlinks, z. B. "mach-mit" → /#mach-mit */
    anker: z.string(),
    /** true = Fortsetzung des vorherigen Abschnitts (Überschrift wird kleiner dargestellt) */
    fortsetzung: z.boolean().default(false),
    sichtbar: z.boolean().default(true),
    /** Optionales Bild (Pfad relativ zu /public, z. B. "/bilder/haende.svg") */
    bild: z.string().optional(),
    bild_alt: z.string().optional(),
    /** Optionale Werte-Kacheln mit Icon */
    werte: z
      .array(z.object({ text: z.string(), icon: z.string() }))
      .optional(),
    /** Optionaler Button. ziel "kontakt-email" = E-Mail aus der Konfiguration */
    button: z.object({ text: z.string(), ziel: z.string() }).optional(),
    /** Optionaler zweiter, dezenter Link */
    link: z.object({ text: z.string(), ziel: z.string() }).optional(),
  }),
});

/** Allgemeine Unterseiten (Über uns, Ziele, …) */
const seiten = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/seiten' }),
  schema: z.object({
    titel: z.string(),
    beschreibung: z.string(),
    sichtbar: z.boolean().default(true),
    /** Kontakt-Box (E-Mail, Instagram) unter dem Text anzeigen */
    kontaktbox: z.boolean().default(false),
    /** Eigener Text in der Kontakt-Box; ohne Angabe gilt der Standardtext */
    kontaktbox_text: z.string().optional(),
  }),
});

/** Organisation: Übersicht + später Satzung, Vorstand, Mitgliedschaft … */
const organisation = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/organisation' }),
  schema: z.object({
    titel: z.string(),
    beschreibung: z.string(),
    reihenfolge: z.number().default(10),
    sichtbar: z.boolean().default(false),
  }),
});

/** Aktuelles: Termine, Aktionen, Stellungnahmen */
const aktuelles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/aktuelles' }),
  schema: z.object({
    titel: z.string(),
    datum: z.coerce.date(),
    zusammenfassung: z.string(),
    entwurf: z.boolean().default(false),
  }),
});

export const collections = { startseite, seiten, organisation, aktuelles };
