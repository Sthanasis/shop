import { cache } from 'react';
import 'server-only';

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  el: () => import('../dictionaries/el.json').then((module) => module.default),
};

export const getDictionary = cache(async (locale: 'en' | 'el') =>
  dictionaries[locale]()
);
