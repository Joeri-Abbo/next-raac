import Logo from "../components/Sections/Header/Logo";
import {useState, useEffect} from "react";
import Bars from "../public/icons/bars-solid.svg"
import {useTranslation} from "react-i18next";
import LinkItem from "../components/navigation/LinkItem";
import Dropdown from "../components/navigation/Dropdown";
import ThemeSwitcher from "../components/Sections/Header/ThemeSwitcher";
import LanguageSwitcher from "../components/Sections/Header/LanguageSwitcher";

const Header = () => {
    const {t} = useTranslation('')
    const [navbar, setNavbar] = useState(false);


    return (
        <header className="relative w-full">
            <nav className="fixed z-50 -mt-16 w-full bg-white shadow dark:bg-black">
                <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
                    <div>
                        <div className="flex items-center justify-between py-3 md:block md:py-5">
                            <Logo/>
                            <div className="md:hidden">
                                <div className="flex">
                                    <button
                                        className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <Bars className="h-6 w-6 fill-black dark:fill-white" role="button"/>
                                        ) : (
                                            <Bars className="h-6 w-6 fill-black dark:fill-white" role="button"/>
                                        )}
                                    </button>
                                    <div className="my-2 ml-1 flex gap-3">
                                        <ThemeSwitcher/>
                                        <LanguageSwitcher/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                navbar ? 'block' : 'hidden'
                            }`}
                        >
                            <div className="flex">
                                <ul className="items-center justify-center space-y-2 md:flex md:space-x-6 md:space-y-0">
                                    <LinkItem href="/">
                                        {t('navigation:home')}
                                    </LinkItem>
                                    <Dropdown title="navigation:managementsysteem" href="#" subitems={[
                                        {
                                            "title": "navigation:iso9001",
                                            "href": "/managementsysteem/iso9001"
                                        },
                                        {
                                            "title": "navigation:as9100-as9110-as9120",
                                            "href": "/managementsysteem/as9100-as9110-as9120"
                                        }
                                    ]}/>
                                    <LinkItem href="/nadcap">
                                        {t('navigation:nadcap')}
                                    </LinkItem>
                                    <Dropdown title="navigation:interim-management" href="/interim-management"
                                              subitems={[
                                                  {
                                                      "href": "/interim-management/audit",
                                                      "title": "navigation:audit"
                                                  },
                                                  {
                                                      "title": "navigation:training",
                                                      "href": "/interim-management/training"
                                                  },
                                                  {
                                                      "title": "navigation:root-cause-analyse",
                                                      "href": "/interim-management/root-cause-analyse"
                                                  }
                                              ]}/>
                                    <LinkItem href="/customers">
                                        {t('navigation:customers')}
                                    </LinkItem>
                                    <LinkItem href="/contact">
                                        {t('navigation:contact')}
                                    </LinkItem>
                                </ul>
                                <div className="my-6 hidden md:block">
                                    <div className="ml-6 flex gap-3">
                                        <ThemeSwitcher/>
                                        <LanguageSwitcher/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </header>

    );
};

export default Header;
