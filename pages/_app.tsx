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
                interimmanagement: require('../locales/en/interimmanagement.json'),
                rootcauseanalyse: require('../locales/en/rootcauseanalyse.json'),
                contact: require('../locales/en/contact.json'),
                contactform: require('../locales/en/contactform.json'),
                home: require('../locales/en/home.json'),
                audit: require('../locales/en/audit.json'),
                training: require('../locales/en/training.json'),
                nadcap: require('../locales/en/nadcap.json'),
                iso9001: require('../locales/en/iso9001.json'),
                as9100as9110as9120: require('../locales/en/as9100as9110as9120.json'),
            },
            nl: {
                common: require('../locales/nl/common.json'),
                customers: require('../locales/nl/customers.json'),
                footer: require('../locales/nl/footer.json'),
                navigation: require('../locales/nl/navigation.json'),
                page404: require('../locales/nl/page404.json'),
                interimmanagement: require('../locales/nl/interimmanagement.json'),
                rootcauseanalyse: require('../locales/nl/rootcauseanalyse.json'),
                contact: require('../locales/nl/contact.json'),
                contactform: require('../locales/nl/contactform.json'),
                home: require('../locales/nl/home.json'),
                audit: require('../locales/nl/audit.json'),
                training: require('../locales/nl/training.json'),
                nadcap: require('../locales/nl/nadcap.json'),
                iso9001: require('../locales/nl/iso9001.json'),
                as9100as9110as9120: require('../locales/nl/as9100as9110as9120.json'),
            },
        },
        lng: 'en', // default language
        fallbackLng: 'en', // fallback language
        interpolation: {
            escapeValue: false,
        },
    });
