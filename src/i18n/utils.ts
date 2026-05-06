// src/i18n/utils.ts
//
// Tiny helpers components use to get the right translation for the page
// they're being rendered on.
//
// Usage in a component:
//
//   ---
//   import { useTranslations, getLangFromUrl } from '../i18n/utils';
//   const lang = getLangFromUrl(Astro.url);
//   const t = useTranslations(lang);
//   ---
//   <h2>{t('services.heading')}</h2>

import { ui, defaultLang, type UIKey } from './ui';

/**
 * Look at the current URL and figure out which language we're rendering.
 *   /            -> 'en'
 *   /fr/...      -> 'fr'
 *   /nl/...      -> 'nl'
 *   anything else -> defaultLang ('en')
 */
export function getLangFromUrl(url: URL): keyof typeof ui {
    const [, segment] = url.pathname.split('/');
    if (segment in ui) return segment as keyof typeof ui;
    return defaultLang;
}

/**
 * Returns a function `t(key)` that gives you the translated string for the
 * given language. If the key is missing in that language, it falls back to
 * English so we never render an empty string.
 */
export function useTranslations(lang: keyof typeof ui) {
    return function t(key: UIKey): string {
        const dict = ui[lang] as Partial<Record<UIKey, string>>;
        return dict[key] ?? ui[defaultLang][key];
    };
}