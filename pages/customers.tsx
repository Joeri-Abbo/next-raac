import Layout from "../sections/Layout";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {GetServerSideProps} from "next";
import Head from "../sections/Head";
import CustomersRows from "../components/Customers";
import {useTranslation} from "next-i18next";

export default function Customers() {
    const { t } = useTranslation('')

    return (
        <>
            <Layout>
                <Head>
                    <title>Home | Joeri Abbo</title>
                    <meta name="description" content="Een pad van UX developer naar Devops en Cloud engineer"/>
                </Head>
                <main className="">
                    TITLE
                    <CustomersRows/>
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
            'customers',
            'common'
        ])),
    },
})
