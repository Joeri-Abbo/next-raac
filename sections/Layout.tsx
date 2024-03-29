import Header from "./Header";
import Footer from "./Footer";

type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Layout = (props: Props) => {
    return (
        <>
            <div className="bg-white pt-8 dark:bg-black">
                <Header/>
                {props.children}
                <Footer/>
            </div>
        </>
    );
};

export default Layout;