import {Auth0Provider} from "@auth0/auth0-react";
import {Header} from "@/components/Header";
import styles from "@/styles/Home.module.css";
import {ThemeProvider} from "@mui/system";
import {HomePage} from "@/components/Home";
import {Footer} from "@/components/Footer";
import {createTheme} from "@mui/material/styles";
import {green, grey} from "@mui/material/colors";
import {useEffect, useState} from "react";

// const main = createTheme({
//     palette: {
//         primary: {
//             main: grey[50],
//         },
//         secondary: green,
//     },
//     typography: {
//         fontFamily: 'Arial',
//         poster: {
//             fontFamily: 'Arial',
//             h1: {
//                 fontWeight: 500,
//                 fontSize: '2rem',
//                 lineHeight: 1.2,
//             }
//         }
//     },
// });

const main = createTheme({
    palette: {
        primary: {
            main: grey[50]
        },
        secondary: green
    },
    typography: {
        fontFamily: "Arial",
        body2: {
            fontWeight: 500,
            fontSize: "2rem",
            lineHeight: 1.2
        }
    }
});
const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
const clientId = process.env.NEXT_PUBLIC_SECOND_AUTH0_CLIENT_ID;
export default function Layout(){

    const [redirectUrl, setRedirectUrl] = useState<string>();
    useEffect(() => {
        setRedirectUrl(window.location.origin);
    }, []);
    return redirectUrl && (
            <Auth0Provider
                // @ts-ignore
                domain={domain}
                // @ts-ignore
                clientId={clientId}
                useRefreshTokens={true}
                cacheLocation={"localstorage"}
                authorizationParams={{
                    redirect_uri: redirectUrl,
                    audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
                }}
            >
                <ThemeProvider theme={main}>
                    <Header/>
                    <div className={`${styles.wrapper} z-10`}>
                        <HomePage/>
                        <Footer/>
                    </div>
                </ThemeProvider>
            </Auth0Provider>
        ) || <div>Loading...</div>
    // }

}