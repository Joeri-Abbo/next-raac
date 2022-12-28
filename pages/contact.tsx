import Layout from "../sections/Layout";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {GetServerSideProps} from "next";
import Head from "../sections/Head";

export default function Contact() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Home | Joeri Abbo</title>
                    <meta name="description" content="Een pad van UX developer naar Devops en Cloud engineer"/>
                </Head>
                <main className="">
                    <h1 className="text-3xl font-bold underline">
                        Contact
                    </h1>
                </main>
            </Layout>
        </>
    )
}

// @ts-ignore
export const getServerSideProps: GetServerSideProps<Props> = async ({
                                                                        locale,
                                                                    }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', [
            'footer',
            'common'
        ])),
    },
})
