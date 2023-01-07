import Layout from "../sections/Layout";
import Head from "../sections/Head";
import Main from "../sections/Main";
import Slider from "../components/Slider";

export default function Home() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Home | Joeri Abbo</title>
                    <meta name="description" content="Een pad van UX developer naar Devops en Cloud engineer"/>
                </Head>
                <Slider slides={[]}/>
                <Main>
                    <h1 className="text-3xl font-bold underline">
                        Hello world!
                    </h1>
                </Main>
            </Layout>
        </>
    )
}
