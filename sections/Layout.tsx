import Header from "./Header";
import Footer from "./Footer";

type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Layout = (props: Props) => {
    return (
        <>
            <div className="dark:bg-black bg-white pt-8">
                <Header/>
                {props.children}
                <Footer/>
            </div>
        </>
    );
};

export default Layout;