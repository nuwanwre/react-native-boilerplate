import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import { getLocales } from 'react-native-localize';

import * as resources from '@I18n/locales';

i18next.use(initReactI18next).init({
    lng: getLocales()[0].languageCode,
    fallbackLng: 'es',
    debug: __DEV__ ? false : false,
    resources: resources.default,
});

export const I18n = i18next;
