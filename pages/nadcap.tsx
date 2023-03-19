import Layout from "../sections/Layout";
import Head from "../sections/Head";
import {useTranslation} from "react-i18next";
import Panorama from "../components/Panorama";
import Main from "../sections/Main";
import Col2 from "../components/Col2";
import BoxContent from "../components/BoxContent";
import BoxImage from "../components/BoxImage";

export default function Nadcap() {
    const {t} = useTranslation('nadcap')

    return (
        <>
            <Layout>
                <Head title={t('seo.title') ?? ""} description={t('seo.description') ?? ""}/>
                <Panorama image="/panorama/header-image-6.jpg" alt="panorama" title={t('title') ?? ""}/>
                <Main>
                    <Col2>
                        <BoxContent
                            title={t('box1.title') ?? ""}
                            text={t('box1.text') ?? ""}
                        />
                        <BoxImage src={"/content/nadcap.png"} alt={"Nadcap flow"} width={960} height={576}/>
                        <BoxContent
                            title={t('box2.title') ?? ""}
                            text={t('box2.text') ?? ""}
                        />
                        <BoxImage src={"/content/nadcap-cer.png"} alt={"Nadcap certification"} width={864}
                                  height={576}/>
                    </Col2>
                </Main>
            </Layout>
        </>
    )
}
