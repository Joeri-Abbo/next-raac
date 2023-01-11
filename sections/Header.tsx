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
            <nav className="w-full bg-white dark:bg-black shadow fixed w-full z-50 -mt-16 ">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Logo/>
                            <div className="md:hidden">
                                <div className="flex">
                                    <button
                                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <Bars className="w-6 h-6 fill-black dark:fill-white" role="button"/>
                                        ) : (
                                            <Bars className="w-6 h-6 fill-black dark:fill-white" role="button"/>
                                        )}
                                    </button>
                                    <div className="flex ml-1 gap-3 my-2">
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
                                <div className="md:block hidden my-6">
                                    <div className="flex ml-6 gap-3">
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
