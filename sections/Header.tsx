import Logo from "../components/Logo";
import {useTheme} from "next-themes";
import {useState, useEffect} from "react";
import SunIcon from "../public/icons/sun-bright-solid.svg"
import MoonIcon from "../public/icons/moon-solid.svg"
import FlagNl from "../public/flags/nl.svg"
import FlagEn from "../public/flags/en.svg"
import Link from "next/link";
import {useRouter} from 'next/router'
import {useTranslation} from "next-i18next";


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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 dark:text-white text-black"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 dark:text-white text-black"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </svg>
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
                                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                    <li className="dark:text-white text-black">
                                        <Link href="/">
                                            {t('navigation:home')}
                                        </Link>
                                    </li>
                                    <li className="dark:text-white text-black">
                                        <Link href="/customers">
                                            {t('navigation:customers')}
                                        </Link>
                                    </li>
                                    <li className="dark:text-white text-black">
                                        <Link href="/contact">
                                            {t('navigation:contact')}
                                        </Link>
                                    </li>
                                </ul>
                                <div className="md:block hidden">
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
