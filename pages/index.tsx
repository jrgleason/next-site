import Head from 'next/head'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'
import {HomePage} from "@/components/Home";
import {createTheme, Palette} from "@mui/material/styles";
import {ThemeProvider} from "@mui/system";
import {indigo, green, red, amber, blue} from '@mui/material/colors';
import {Auth0Provider} from '@auth0/auth0-react';

const inter = Inter({subsets: ['latin']})

const palette: Palette = {
    common: {
        black: '#000',
        white: '#fff',
    },
    mode: 'light',
    contrastThreshold: 3,
    tonalOffset: 0.2,
    primary: {
        main: indigo[500],
        dark: indigo[700],
        light: indigo[300],
        contrastText: '#fff',
    },
    secondary: {
        main: green[500],
        dark: green[700],
        light: green[300],
        contrastText: '#fff',
    },
};

const main = createTheme({
    palette: {
        primary: indigo,
        secondary: green,
    },
    typography: {
        poster: {
            fontWeight: 500,
            fontSize: '2rem',
            lineHeight: 1.2,
        }
    },
});

export default function Home() {
    let domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
    let clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ;
    let redirectUri = "http://localhost:3000";
    return (
        <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{
            redirect_uri: redirectUri
        }}>
            <>
                <Head>
                    <title>THEJackieGleason</title>
                    <meta name="description" content="My Personal Website"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Header/>
                <div className={`${styles.wrapper} z-10`}>
                    <ThemeProvider theme={main}>
                        <HomePage/>
                        <Footer/>
                    </ThemeProvider>
                </div>

            </>
        </Auth0Provider>
    )
}
