import Layout from "../sections/Layout";
import Head from "../sections/Head";
import Main from "../sections/Main";
import Slider from "../components/Slider";
import {useTranslation} from "react-i18next";
import Col3 from "../components/Col3";
import CTA from "../components/CTA";

export default function Home() {
    const {t} = useTranslation('home')

    return (
        <>
            <Layout>
                <Head title={t('seo.title') ?? ""} description={t('seo.description') ?? ""}/>
                <Slider slides={[
                    {
                        button: {
                            label: "test",
                            href: "https://www.google.com",
                        },
                        title: "title",
                        text: "Text",
                        image: "/slider/home-slider-1.jpg"
                    },
                    {
                        button: {
                            label: "test",
                            href: "https://www.google.com",
                        },
                        title: "title",
                        text: "Text",
                        image: "/slider/home-slider-2.jpg"
                    },
                    {
                        button: {
                            label: "test",
                            href: "https://www.google.com",
                        },
                        title: "title",
                        text: "Text",
                        image: "/slider/home-slider-3.jpg"
                    },
                    {
                        button: {
                            label: "test",
                            href: "https://www.google.com",
                        },
                        title: "title",
                        text: "Text",
                        image: "/slider/home-slider-4.jpg"
                    }
                ]}/>
                <Main>
                    <Col3>
                        <CTA image={"/content/1.png"} title={t('cta.1.title') ?? ""} button={
                            {
                                "href": "/managementsysteem/iso9001",
                                "label": t('cta.1.label') ?? "",
                            }
                        }>
                            <p>
                                {t('cta.1.text') ?? ""}
                            </p>
                        </CTA>
                        <CTA image={"/content/2.png"} title={t('cta.2.title') ?? ""} button={
                            {
                                "href": "managementsysteem/as9100-as9110-as9120",
                                "label": t('cta.2.label') ?? "",
                            }
                        }>
                            <p>
                                {t('cta.2.text') ?? ""}
                            </p>
                        </CTA>
                        <CTA image={"/content/3.png"} title={t('cta.3.title') ?? ""} button={
                            {
                                "href": "/nadcap",
                                "label": t('cta.3.label') ?? "",
                            }
                        }>
                            <p>
                                {t('cta.3.text') ?? ""}
                            </p>
                        </CTA>
                    </Col3>
                </Main>
            </Layout>
        </>
    )
}
