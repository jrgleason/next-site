import Head from 'next/head'
import {Inter} from 'next/font/google'
import Layout from "@/components/Layout";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
            <>
                <Head>
                    <title>THEJackieGleason</title>
                    <meta name="description" content="My Personal Website"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Layout />
            </>
    )
}
