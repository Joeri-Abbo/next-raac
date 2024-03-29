import Layout from "../sections/Layout";
import Head from "../sections/Head";
import ContactForm from "../components/ContactForm";
import Col2 from "../components/Col2";
import Main from "../sections/Main";
import Map from "../components/Map";
import BoxTitle from "../components/BoxTitle";
import BoxText from "../components/BoxText";
import Panorama from "../components/Panorama";
import {useTranslation} from "react-i18next";

export default function Contact() {
    const {t} = useTranslation('contact')

    return (
        <>
            <Layout>
                <Head title={t('seo.title') ?? ""} description={t('seo.description') ?? ""}/>
                <Panorama image="/panorama/header-image-10.jpg" alt="panorama get in contact"/>
                <Main>
                    <Col2>
                        <div className="rounded p-6 dark:bg-gray-900">
                            <BoxTitle>
                                {t('title') ?? ""}
                            </BoxTitle>
                            <BoxText>
                                <p>
                                    {t('text') ?? ""}


                                    <span className={"block mt-8 font-bold"}>
                                        Richard Abbo
                                    </span>
                                </p>
                                <ul>
                                    <li>
                                        Moriaanseweg Oost 219
                                    </li>
                                    <li>
                                        3223AH Hellevoetluis
                                    </li>
                                    <li>
                                        Nederland
                                    </li>
                                    <li className={"mt-1"}>
                                        {t('mobile') ?? ""}:&nbsp;
                                        <a href={"tel:+3106-54772398"} className="underline">
                                            06-54772398
                                        </a>
                                    </li>
                                    <li className={"mt-1"}>
                                        <a href={"mailto:richard@raac.nu"} className="underline">
                                            richard@raac.nu
                                        </a>
                                    </li>
                                </ul>
                            </BoxText>
                        </div>
                        <div className="rounded p-6 dark:bg-gray-900">
                            <ContactForm/>
                        </div>
                    </Col2>
                </Main>
                <Map/>
            </Layout>
        </>
    )
}
