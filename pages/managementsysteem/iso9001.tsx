import Layout from "../../sections/Layout";
import Head from "../../sections/Head";
import {useTranslation} from "react-i18next";
import Panorama from "../../components/Panorama";
import Main from "../../sections/Main";
import Col2 from "../../components/Col2";
import BoxContent from "../../components/BoxContent";
import BoxImage from "../../components/BoxImage";

export default function Iso9001() {
    const {t} = useTranslation('iso9001')

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
                            items={[
                                t('box1.items.1') ?? "",
                                t('box1.items.2') ?? "",
                                t('box1.items.3') ?? "",
                            ]}
                        />
                        <BoxImage src={"/content/1.png"} alt={"Tools"} width={864} height={576}/>
                        <BoxContent
                            title={t('box2.title') ?? ""}
                            text={t('box2.text') ?? ""}
                        />
                    </Col2>
                </Main>
            </Layout>
        </>
    )
}
