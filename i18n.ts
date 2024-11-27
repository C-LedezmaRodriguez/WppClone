import { I18n } from 'i18n-js';

import en from './languages/en.json';
import es from './languages/es.json';
import { getLocales } from 'expo-localization';

export const deviceLanguage = getLocales()?.[0]?.languageCode ?? 'es';
// export const deviceLanguage = 'es';

export const i18n = new I18n({
  es,
  en,
});

i18n.defaultLocale = deviceLanguage;
i18n.locale = deviceLanguage;

export const changeLanguage = (language: string) => {
  i18n.locale = language;
};
