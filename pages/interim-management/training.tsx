import Layout from "../../sections/Layout";
import Head from "../../sections/Head";
import {useTranslation} from "react-i18next";
import Panorama from "../../components/Panorama";
import Main from "../../sections/Main";
import Col2 from "../../components/Col2";
import BoxContent from "../../components/BoxContent";
import BoxImage from "../../components/BoxImage";

export default function Audit() {
    const {t} = useTranslation('training')

    return (
        <>
            <Layout>

                <Head title={t('seo.title') ?? ""} description={t('seo.description') ?? ""}/>
                <Panorama image="/panorama/header-image-5.jpg" alt="panorama constructor" title={t('title') ?? ""}/>
                <Main>
                    <Col2>
                        <BoxContent
                            title={t('box1.title') ?? ""}
                            text={t('box1.text') ?? ""}
                            items={[
                                t('box1.items.1') ?? "",
                                t('box1.items.2') ?? "",
                                t('box1.items.3') ?? "",
                                t('box1.items.4') ?? "",
                                t('box1.items.5') ?? "",
                            ]}
                        />
                        <BoxImage src={"/content/training.jpg"} alt={"Training"} width={864} height={864}/>
                    </Col2>
                </Main>
            </Layout>
        </>
    )
}
