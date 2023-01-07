import Layout from "../sections/Layout";
import Head from "../sections/Head";
import {useTranslation} from "react-i18next";
import Panorama from "../components/Panorama";
import Main from "../sections/Main";
import Title from "../components/Title";
import Col2 from "../components/Col2";
import Box from "../components/Box";
import BoxTitle from "../components/BoxTitle";
import BoxText from "../components/BoxText";
import Image from "next/image";

export default function Customers() {
    const {t} = useTranslation('')

    return (
        <>
            <Layout>

                <Head>
                    <title>Home | Joeri Abbo</title>
                    <meta name="description" content="Een pad van UX developer naar Devops en Cloud engineer"/>
                </Head>
                <Panorama image="/panorama/header-image-9.jpg" alt="panorama"/>
                <Title>
                    {t('interim-management:title')}
                </Title>
                <Main>
                    <Col2>
                        <div>
                            <Box>
                                <BoxTitle>
                                    RAAC Interim Management
                                </BoxTitle>
                                <BoxText>
                                    RAAC verzorgt, op interim basis, de functie van kwaliteitscoördinator of
                                    kwaliteitsmanager voor uw onderneming. Dit kan op tijdelijke basis zijn bij
                                    eventuele
                                    ziekte of afwezigheid van de kwaliteitsmanager. Echter het is ook mogelijk voor
                                    langere
                                    termijn voor een aantal dagen per week of per maand. Deze optie is zeer
                                    gebruiksvriendelijk, indien er niet voldoende tijd is om een gehele functie van
                                    kwaliteitsmanager te vullen.
                                </BoxText>
                            </Box>

                            <div className="mt-4">
                                <Box>
                                    <BoxTitle>
                                        Begeleiden van externe audits
                                    </BoxTitle>
                                    <BoxText>
                                        Hierbij kunt u ook denken aan het begeleiden van externe audits, het uitvoeren
                                        van
                                        de
                                        interne audits, het houden van de management reviews en of het begeleiden en
                                        trainen
                                        van
                                        uw personeel.

                                        Er is altijd een passende oplossing voor u organisatie mogelijk.
                                    </BoxText>
                                </Box>
                            </div>
                        </div>
                        <Box>
                            <Image src="https://source.unsplash.com/random/900%C3%97700/?firework" alt="TEST"
                                   width="1760"
                                   height="1760" className="h-"/>
                        </Box>
                    </Col2>
                </Main>
            </Layout>
        </>
    )
}
