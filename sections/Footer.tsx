import ToTop from "../components/Sections/Footer/ToTop";
import Copyright from "../components/Sections/Footer/Copyright";

const Footer = () => {

    return (
        <footer className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <ToTop/>
            <Copyright/>
        </footer>

    );
};

export default Footer;