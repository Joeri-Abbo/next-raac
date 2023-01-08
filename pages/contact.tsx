import Layout from "../sections/Layout";
import {GetServerSideProps} from "next";
import Head from "../sections/Head";
import ContactForm from "../components/ContactForm";
import Col2 from "../components/Col2";
import Main from "../sections/Main";
import Map from "../components/Map";
import BoxTitle from "../components/BoxTitle";
import BoxText from "../components/BoxText";
import Box from "../components/Box";
import Panorama from "../components/Panorama";

export default function Contact() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Home | Joeri Abbo</title>
                    <meta name="description" content="Een pad van UX developer naar Devops en Cloud engineer"/>
                </Head>
                <Panorama image="/panorama/header-image-10.jpg" alt="panorama"/>
                <Main>
                    <Col2>
                        <Box>
                            <BoxTitle>
                                Contact gegevens
                            </BoxTitle>
                            <BoxText>
                                <p>
                                    Voor extra informatie kunt u ons bellen, mailen of maak gebruik van het contact
                                    formulier.


                                    <span className={"block mt-8 font-bold"}>
                                        Richard Abbo
                                    </span>
                                </p>
                                <ul>
                                    <li>
                                        Uniceflaan 44
                                    </li>
                                    <li>
                                        3223PA Hellevoetluis
                                    </li>
                                    <li>
                                        Nederland
                                    </li>
                                    <li className={"mt-1"}>
                                        Mob:&nbsp;
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
                        </Box>
                        <Box>
                            <ContactForm/>
                        </Box>
                    </Col2>
                </Main>
                <Map/>
            </Layout>
        </>
    )
}
