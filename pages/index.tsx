import Head from 'next/head'
import Layout from "../sections/Layout";

export default function Home() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Home | Joeri Abbo</title>
                    <meta name="description" content="Een pad van UX developer naar Devops en Cloud engineer"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <main className="">
                    <h1 className="text-3xl font-bold underline">
                        Hello world!
                    </h1>
                </main>
            </Layout>
        </>
    )
}
