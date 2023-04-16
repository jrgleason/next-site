import styles from '@/styles/Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Header = () => {
    function handleResumeClick() {
        window.location.href = 'https://docs.google.com/document/d/1xrqve90hloOYGR3RSCvwXJBXq_NQR5kmNfrxKYSveKk';
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
            <div className= {`flex grow-1 justify-between justify-end ${ styles["jrg-buttons"]}`}>
                <button
                    className="
                        jrg-resume-button
                        rounded
                        border-transparent
                        capitalize
                    "
                    onClick={handleResumeClick}
                >
                    resumé
                </button>
                <a href="https://www.linkedin.com/in/jackie-gleason-5a52114/" slot="actionItems">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/jrgleason" slot="actionItems">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>

        </nav>
    );
};

export {Header};