import Layout from "../sections/Layout";
import Head from "../sections/Head";
import Main from "../sections/Main";
import Slider from "../components/Slider";
import {useTranslation} from "react-i18next";
import Col3 from "../components/Col3";
import CTA from "../components/CTA";
import PrimaryButton from "../components/Button/Primary";
import Title from "../components/Title";
import Spacer from "../components/Spacer";

export default function Home() {
    const {t} = useTranslation('home')

    return (
        <>
            <Layout>
                <Head title={t('seo.title') ?? ""} description={t('seo.description') ?? ""}/>
                <Slider slides={[
                    {
                        button: {
                            label: t('slides.1.button.label'),
                            href: "managementsysteem/iso9001",
                        },
                        title: t('slides.1.title'),
                        text: t('slides.1.text'),
                        image: "/slider/home-slider-1.jpg"
                    },
                    {
                        button: {
                            label: t('slides.2.button.label'),
                            href: "managementsysteem/as9100-as9110-as9120",
                        },
                        title: t('slides.2.title'),
                        text: t('slides.2.text'),
                        image: "/slider/home-slider-2.jpg"
                    },
                    {
                        button: {
                            label: t('slides.3.button.label'),
                            href: "nadcap",
                        },
                        title: t('slides.3.title'),
                        text: t('slides.3.text'),
                        image: "/slider/home-slider-3.jpg"
                    },
                    {
                        button: {
                            label: t('slides.4.button.label'),
                            href: "interim-management/root-cause-analyse",
                        },
                        title: t('slides.4.title'),
                        text: t('slides.4.text'),
                        image: "/slider/home-slider-4.jpg"
                    }
                ]}/>
                <Main>
                    <Title>
                        {t('intro.title') ?? ""}
                    </Title>
                    <p className="mx-auto -mt-4 mb-8 max-w-3xl text-center text-lg font-medium text-blue-600 dark:text-blue-400 sm:text-xl">
                        {t('intro.subtitle') ?? ""}
                    </p>
                    <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-gray-700 dark:text-gray-300">
                        {t('intro.text') ?? ""}
                    </p>

                    <Col3>
                        <PrimaryButton href={"interim-management/root-cause-analyse"}>
                            {t('buttons.1') ?? ""}
                        </PrimaryButton>
                        <PrimaryButton href={"contact"}>
                            {t('buttons.2') ?? ""}
                        </PrimaryButton>
                        <PrimaryButton href={"interim-management"}>
                            {t('buttons.3') ?? ""}
                        </PrimaryButton>
                    </Col3>

                    <Spacer/>

                    <Title>
                        {t('cta.title')}
                    </Title>
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
