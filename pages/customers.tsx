import Layout from "../sections/Layout";
import Head from "../sections/Head";
import CustomersRows from "../components/Customers";
import {useTranslation} from "react-i18next";
import Panorama from "../components/Panorama";
import Main from "../sections/Main";
import Title from "../components/Title";

export default function Customers() {
    const {t} = useTranslation('customers')
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
                <Panorama image="/panorama/header-image-9.jpg" alt="panorama"/>
                <Title>
                    {t('title')}
                </Title>
                <Main>
                    <CustomersRows/>
                </Main>
            </Layout>
        </>
    )
}
