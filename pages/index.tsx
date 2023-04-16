import Head from 'next/head'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'
import {HomePage} from "@/components/Home";


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
            <Header/>
            <div className={ `${styles.wrapper} z-10`}>
                <HomePage />
                <Footer />
            </div>

        </>
    )
}
