import Layout from "../../sections/Layout";
import Head from "../../sections/Head";
import {useTranslation} from "react-i18next";
import Panorama from "../../components/Panorama";
import Main from "../../sections/Main";
import Col2 from "../../components/Col2";
import BoxContent from "../../components/BoxContent";
import BoxImage from "../../components/BoxImage";

export default function Audit() {
    const {t} = useTranslation('rootcauseanalyse')

    return (
        <>
            <Layout>

                <Head title={t('seo.title') ?? ""} description={t('seo.description') ?? ""}/>
                <Panorama image="/panorama/header-image-8.jpg" alt="panorama" title={t('title') ?? ""}/>
                <Main>
                    <Col2>
                        <BoxContent
                            title={t('box1.title') ?? ""}
                            text={t('box1.text') ?? ""}
                        />
                        <BoxImage src={"/content/route-cause.png"} alt={"Mindmap"} width={864} height={576}/>
                        <BoxContent
                            title={t('box2.title') ?? ""}
                            text={t('box2.text') ?? ""}
                        />
                        <BoxImage src={"/content/route-fish.png"} alt={"Flowchart"} width={864} height={576}/>
                    </Col2>
                </Main>
            </Layout>
        </>
    )
}
