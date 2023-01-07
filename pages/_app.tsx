import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                common: require('../locales/en/common.json'),
                customers: require('../locales/en/customers.json'),
                footer: require('../locales/en/footer.json'),
                navigation: require('../locales/en/navigation.json'),
                page404: require('../locales/en/page404.json'),
            },
            nl: {
                common: require('../locales/nl/common.json'),
                customers: require('../locales/nl/customers.json'),
                footer: require('../locales/nl/footer.json'),
                navigation: require('../locales/nl/navigation.json'),
                page404: require('../locales/nl/page404.json'),

            },
        },
        lng: 'en', // default language
        fallbackLng: 'en', // fallback language
        interpolation: {
            escapeValue: false,
        },
    });
