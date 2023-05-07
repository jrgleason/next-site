import styles from '@/styles/Header.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {styled} from '@mui/material/styles'
import {Button, Tooltip, tooltipClasses, TooltipProps} from '@mui/material'
import HourPicker from "@/components/HourPicker"
import { useAuth0 } from '@auth0/auth0-react'
import {UserHeader} from "@/components/UserHeader";

/**
 * Stolen from StackOverflow
 */
const BootstrapTooltip = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} arrow classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

const Header = () => {

    function handleClick() {
        window.location.href = "mailto:jackiegleason@gmail.com?subject=I Need Home Automation Help!";
    }

    return (
        <nav className="
            bg-transparent
            text-white
            mx-auto
            flex
            items-center
            justify-between
            absolute
            w-full
            top-0
            left:0
            p-6
            z-50
            lg:px-8"
             aria-label="Global">
            <div className={`grow-1 justify-start flex`}>
            </div>
            <div className="jrg-header-title flex grow-3 justify-center text-xl">
            </div>
            <div className={`flex grow-1 justify-between ${styles["jrg-buttons"]}`}>
                <BootstrapTooltip title="Contact Us">
                    <Button
                        onClick={handleClick}
                    >
                        <FontAwesomeIcon icon={faEnvelope} className={"text-white text-2xl"}/>
                    </Button>
                </BootstrapTooltip>
                <BootstrapTooltip title="Our Code">
                    <Button
                        onClick={handleClick}
                    >
                        <FontAwesomeIcon icon={faGithub} className={"text-white text-2xl"}/>
                    </Button>
                </BootstrapTooltip>
                <UserHeader
                    handleClick={handleClick}
                />
            </div>

        </nav>
    );
};

export {Header};