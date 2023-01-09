import Layout from "../../sections/Layout";
import Head from "../../sections/Head";
import {useTranslation} from "react-i18next";
import Panorama from "../../components/Panorama";
import Main from "../../sections/Main";
import Col2 from "../../components/Col2";
import BoxContent from "../../components/BoxContent";
import BoxImage from "../../components/BoxImage";

export default function Index() {
    const {t} = useTranslation('interimmanagement')

    return (
        <>
            <Layout>
                <Head title={t('seo.title') ?? ""} description={t('seo.description') ?? ""}/>
                <Panorama image="/panorama/header-image-9.jpg" alt="panorama" title={t('title') ?? ""}/>
                <Main>
                    <Col2>
                        <BoxContent title={t('box1.title') ?? ""} text={t('box1.text') ?? ""}/>
                        <BoxImage src={"/content/management.png"} alt={"TEST"} width={1760} height={1760}/>
                        <BoxContent title={t('box2.title') ?? ""} text={t('box2.text') ?? ""}/>
                    </Col2>
                </Main>
            </Layout>
        </>
    )
}
