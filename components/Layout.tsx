import {Auth0Provider} from "@auth0/auth0-react";
import Head from "next/head";
import {Header} from "@/components/Header";
import styles from "@/styles/Home.module.css";
import {ThemeProvider} from "@mui/system";
import {HomePage} from "@/components/Home";
import {Footer} from "@/components/Footer";
import {createTheme} from "@mui/material/styles";
import {green, grey, indigo} from "@mui/material/colors";
import origin from "@/services/WindowsService";
import {useEffect, useState} from "react";

const main = createTheme({
    palette: {
        primary: {
            main: grey[50],
        },
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

export default function Layout() {
    const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
    const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;

    const [redirectUrl, setRedirectUrl] = useState<string>();
    useEffect(() => {
        setRedirectUrl(window.location.origin);
        console.log(`The Auth0 domain is ${domain}`);
        console.log(`Origin is ${window.location.origin}`);
    }, []);
    return redirectUrl && (
        <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{
            redirect_uri: redirectUrl
        }}>
            <ThemeProvider theme={main}>
                <Header/>
                <div className={`${styles.wrapper} z-10`}>

                    <HomePage/>
                    <Footer/>

                </div>
            </ThemeProvider>
        </Auth0Provider>
    )
}