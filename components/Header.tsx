import '@/styles/Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMenorah } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <nav className="
            bg-black
            text-white
            mx-auto
            flex
            items-center
            justify-between
            p-6
            lg:px-8"
             aria-label="Global">
            <FontAwesomeIcon icon={faMenorah} />
            <div>MySite</div>
        </nav>
    );
};

export {Header};