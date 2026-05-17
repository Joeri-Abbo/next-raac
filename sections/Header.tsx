import Logo from "../components/Sections/Header/Logo";
import {useState} from "react";
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
        <header>
            <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow dark:bg-black">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
                    <Logo/>

                    <div className="hidden items-center gap-8 md:flex">
                        <ul className="flex items-center gap-6">
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
                        <div className="flex items-center gap-3">
                            <ThemeSwitcher/>
                            <LanguageSwitcher/>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:hidden">
                        <ThemeSwitcher/>
                        <LanguageSwitcher/>
                        <button
                            type="button"
                            aria-label="Toggle navigation"
                            className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                            onClick={() => setNavbar(!navbar)}
                        >
                            <Bars className="h-6 w-6 fill-black dark:fill-white" role="button"/>
                        </button>
                    </div>
                </div>

                {navbar && (
                    <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-black md:hidden">
                        <ul className="flex flex-col gap-2">
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
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
