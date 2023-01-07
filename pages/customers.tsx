import Layout from "../sections/Layout";
import {GetServerSideProps} from "next";
import Head from "../sections/Head";
import CustomersRows from "../components/Customers";
import {useTranslation} from "react-i18next";
import Panorama from "../components/Panorama";
import Main from "../sections/Main";
import Title from "../components/Title";

export default function Customers() {
    const {t} = useTranslation('')

    return (
        <>
            <Layout>

                <Head>
                    <title>Home | Joeri Abbo</title>
                    <meta name="description" content="Een pad van UX developer naar Devops en Cloud engineer"/>
                </Head>
                <Panorama image="/panorama/header-image-9.jpg" alt="panorama"/>
                <Title>
                    {t('customers:title')}
                </Title>
                <Main>
                    <CustomersRows/>
                </Main>
            </Layout>
        </>
    )
}
