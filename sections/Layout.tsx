import Header from "./Header";
import Footer from "./Footer";

type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Layout = (props: Props) => {
    return (
        <>
            <div className="dark:bg-black bg-white">
                <Header/>
                <div className="min-h-screen mx-auto max-w-6xl flex flex-col">
                    <main className="flex-grow container mx-auto px-4 sm:px-6 mt-6">
                        {props.children}
                    </main>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default Layout;