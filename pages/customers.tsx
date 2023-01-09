import Layout from "../sections/Layout";
import Head from "../sections/Head";
import CustomersRows from "../components/Customers";
import {useTranslation} from "react-i18next";
import Panorama from "../components/Panorama";
import Main from "../sections/Main";
import Title from "../components/Title";

export default function Customers() {
    const {t} = useTranslation('customers')

    return (
        <>
            <Layout>
                <Head title={t('seo.title') ?? ""} description={t('seo.description') ?? ""}/>
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
