import { JSX } from 'react';
import Header from "./Header";
import Footer from "./Footer";

type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Layout = (props: Props) => {
    return (
        <div className="flex min-h-screen flex-col bg-white pt-16 dark:bg-black md:pt-20">
            <Header/>
            <div className="flex-1">
                {props.children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;