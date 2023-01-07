import Layout from "../sections/Layout";
import {GetServerSideProps} from "next";
import Head from "../sections/Head";
import ContactForm from "../components/ContactForm";
import Col2 from "../components/Col2";
import Main from "../sections/Main";
import Map from "../components/Map";

export default function Contact() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Home | Joeri Abbo</title>
                    <meta name="description" content="Een pad van UX developer naar Devops en Cloud engineer"/>
                </Head>
                <Main>
                    <Col2>
                        <div>
                            TEst
                        </div>
                        <div>
                            <ContactForm/>
                        </div>
                    </Col2>
                </Main>
                <Map/>
            </Layout>
        </>
    )
}
