import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import zhTranslation from './locales/zh/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      zh: { translation: zhTranslation }
    },
    lng: 'zh', // 默认语言为中文
    fallbackLng: 'zh', // 优先回退到中文
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 