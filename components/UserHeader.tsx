
import {useAuth0} from "@auth0/auth0-react";
import HourPicker from "@/components/HourPicker";
import {Button, Menu, MenuItem} from "@mui/material";
import React from "react";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type UserHeaderProps = {
    handleClick: () => void;
};

function UserHeader(props: UserHeaderProps) {
    const {
        isAuthenticated,
        loginWithRedirect,
        getAccessTokenSilently,
        getAccessTokenWithPopup,
    } = useAuth0();
    const getToken = async () => {
        let token;
        try{
            token = await getAccessTokenSilently();
        } catch (e) {
            token = await getAccessTokenWithPopup();
        }
        console.log(token);
        return token;
    }
    const callUserInfo = async ()=>{
        //call the protected endpoint with the token
        const token = await getToken()
        const headers = { 'Authorization': `Bearer ${token}` }
        const response = await fetch('/oidc', { headers })
        const json = await response.text()
        console.log("The response is \n"+json+"\n Status:"+response.status)
    }
    const callProtected = async ()=>{
        //call the protected endpoint with the token
        const token = await getToken()
        const headers = { 'Authorization': `Bearer ${token}` }
        const response = await fetch('/protected', { headers })
        const json = await response.text()
        console.log("The response is \n"+json+"\n Status:"+response.status)
    }
    const onClick = (
        event: React.MouseEvent<HTMLAnchorElement | HTMLLIElement, MouseEvent>
    ) => {
        event.preventDefault();
        if (!isAuthenticated) return loginWithRedirect();
        return Promise.resolve();
    }
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>

            <Button
                onClick={handleClick}
                className={"text-white text-2xl"}
            >
                <FontAwesomeIcon icon={faUser} className={"text-white text-2xl"}/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                { isAuthenticated && <MenuItem><HourPicker label={"Schedule a time"}/></MenuItem>}
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>

                { isAuthenticated && <MenuItem onClick={callUserInfo}>Call User Info</MenuItem> }
                { isAuthenticated && <MenuItem onClick={callProtected}>Call Protected</MenuItem> }
                { isAuthenticated && <MenuItem onClick={getToken}>Generate Token</MenuItem> }
                { !isAuthenticated && <MenuItem onClick={onClick}>Sign In</MenuItem> }
            </Menu>
        </div>
    );
}

export {UserHeader}