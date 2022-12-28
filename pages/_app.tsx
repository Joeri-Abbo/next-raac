import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";
import {appWithTranslation} from "next-i18next";

const MyApp = ({Component, pageProps}: AppProps) => (
    <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
    </ThemeProvider>
)


export default appWithTranslation(MyApp)