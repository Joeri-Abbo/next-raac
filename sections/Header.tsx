import Logo from "../components/Logo";
import {useTheme} from "next-themes";
import {useState, useEffect} from "react";
import SunIcon from "../public/icons/sun-bright-solid.svg"
import MoonIcon from "../public/icons/moon-solid.svg"
import FlagNl from "../public/flags/nl.svg"
import FlagEn from "../public/flags/en.svg"
import Bars from "../public/icons/bars-solid.svg"
import {useRouter} from 'next/router'
import {useTranslation} from "next-i18next";
import LinkItem from "../components/navigation/LinkItem";
import Dropdown from "../components/navigation/Dropdown";

const Header = () => {
    const {t} = useTranslation('')

    const dark = "dark";
    const light = "light";
    const router = useRouter();
    const {locale} = router

    const [mounted, setMounted] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const {systemTheme, theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])


    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;
        const classNames = " w-6 h-6 hover:scale-125 transform-gpu "
        const colorClass = currentTheme === dark ? "fill-yellow-500" : "fill-gray-900"

        if (currentTheme === dark) {
            return (
                <SunIcon className={classNames + colorClass} role="button" onClick={() => setTheme(light)}/>
            )
        } else {
            return (
                <MoonIcon className={classNames + colorClass} role="button" onClick={() => setTheme(dark)}/>
            )
        }
    };
    const renderLangChanger = () => {
        if (!mounted) return null;

        const classNames = " w-6 h-6 hover:scale-125 transform-gpu "

        if (locale === "nl") {
            return (
                <FlagEn className={classNames} role="button" onClick={() => onToggleLanguageClick("en")}/>
            )
        } else {
            return (
                <FlagNl className={classNames} role="button" onClick={() => onToggleLanguageClick("nl")}/>
            )
        }
    };

    const onToggleLanguageClick = (newLocale: string) => {
        const {pathname, asPath, query} = router;
        router.push({pathname, query}, router.asPath, {locale: newLocale});
    };

    return (
        <header>
            <nav className="w-full bg-white dark:bg-black shadow">
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
                                        {renderThemeChanger()}
                                        {renderLangChanger()}
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
                                    <Dropdown title="navigation:managementsysteem" href="/managementsysteem" subitems={[
                                        {
                                            "href": "/iso9001",
                                            "title": "navigation:iso9001"
                                        },
                                        {
                                            "title": "navigation:as9100-as9110-as9120",
                                            "href": "as9100-as9110-as9120"
                                        }
                                    ]}/>
                                    <LinkItem href="/nadcap">
                                        {t('navigation:nadcap')}
                                    </LinkItem>
                                    <Dropdown title="navigation:interim-management" href="/interim-management" subitems={[
                                        {
                                            "href": "/audit",
                                            "title": "navigation:audit"
                                        },
                                        {
                                            "title": "navigation:training",
                                            "href": "training"
                                        },
                                        {
                                            "title": "navigation:root-cause-analyse",
                                            "href": "root-cause-analyse"
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
                                        {renderThemeChanger()}
                                        {renderLangChanger()}
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
