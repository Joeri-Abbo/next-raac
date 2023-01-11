import Layout from "../sections/Layout";
import Head from "../sections/Head";
import Main from "../sections/Main";
import Slider from "../components/Slider";
import {useTranslation} from "react-i18next";

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
                    <h1>
                        teawts
                    </h1>
                </Main>
            </Layout>
        </>
    )
}
