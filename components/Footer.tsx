import {ContactMe} from "@/components/ContactMeModal";

const Footer = () => {
    return (
        <footer className={"bg-gray-800 text-white p-5"}>
            <div className={"flex flex-wrap justify-between"}>
                <div className={"flex flex-col flex-grow"}>
                    <div className={"text-2xl font-extrabold"}>Second Ave Home Automation</div>
                    <div className={"text-xl font-extrabold"}>Premier Columbus-area developer</div>
                </div>
                <div className={"flex flex-col flex-grow justify-center items-center"}>
                    <div className={"text-2xl font-extrabold"}>Social Media</div>
                    <div className={"text-xl font-extrabold"}>Facebook</div>
                    <div className={"text-xl font-extrabold"}>Instagram</div>
                    <div className={"text-xl font-extrabold"}>Twitter</div>
                </div>
                <div className={"flex flex-col flex-grow justify-center items-end"}>
                    <div className={"text-2xl font-extrabold"}>Contact Info</div>
                    <div className={"text-xl font-extrabold"}>Phone: 614-555-5555</div>
                    {/* Add the EmailContact Component here*/}
                    <div className={"text-xl font-extrabold"}>
                       <ContactMe />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export {Footer}