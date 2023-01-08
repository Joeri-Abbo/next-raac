import Layout from "../sections/Layout";
import Head from "../sections/Head";
import Main from "../sections/Main";
import Slider from "../components/Slider";
import {useTranslation} from "react-i18next";

export default function Home() {
    const {t} = useTranslation('home')

    return (
        <>
            <Layout>
                <Head>
                    <title> {t('seo.title') ?? ""}</title>
                    <meta name="description"
                          content={t('seo.description') ?? ""}/>
                </Head>
                <Slider slides={[]}/>
                <Main>
                    <h1 className="text-3xl font-bold underline">
                        Hello world!
                    </h1>
                </Main>
            </Layout>
        </>
    )
}
