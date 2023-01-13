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
                        <CTA image={"/content/1.png"} title={"test"} button={
                            {
                                "href": "test",
                                "label": "Lees verder",
                            }
                        }>
                            <p>
                                Opzetten / onderhouden van een kwaliteitsmanagementsysteem volgens ISO9001, ISO14001, OHSAS18001.
                            </p>
                        </CTA>
                        <CTA image={"/content/2.png"} title={"test"} button={
                            {
                                "href": "test",
                                "label": "Lees verder",
                            }
                        }>
                            <p>Luchtvaart Kwaliteitmanagement systemen volgens AS9100/9110/9120 EASA-Part21, Part 145</p>
                        </CTA>
                        <CTA image={"/content/3.png"} title={"test"} button={
                            {
                                "href": "test",
                                "label": "Lees verder",
                            }
                        }>
                            <p>Nadcap productie processen volgens de checklisten van PRI, NDT, WLD, HT, EDM

                            </p>
                        </CTA>

                    </Col3>
                </Main>
            </Layout>
        </>
    )
}
