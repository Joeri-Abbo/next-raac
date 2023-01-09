import Layout from "../sections/Layout";
import Head from "../sections/Head";
import Main from "../sections/Main";
import Slider from "../components/Slider";
import {useTranslation} from "react-i18next";

export default function Home() {
    const {t} = useTranslation('home')

    const seo_title = `${t('seo.title')}`;
    const seo_description = `${t('seo.description')}`;

    return (
        <>
            <Layout>
                <Head>
                    <title> {seo_title}</title>
                    <meta name="description"
                          content={seo_description}/>
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
