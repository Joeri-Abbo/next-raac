import {useState, useEffect} from 'react';
import {useTranslation, withTranslation} from 'react-i18next';
import FlagNl from "../../../public/flags/nl.svg"
import FlagEn from "../../../public/flags/en.svg"
import {useTheme} from "next-themes";
import SunIcon from "../../../public/icons/sun-bright-solid.svg";
import MoonIcon from "../../../public/icons/moon-solid.svg";

function ThemeSwitcher() {
    const dark = "dark";
    const light = "light";
    const [mounted, setMounted] = useState(false);
    const {systemTheme, theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;
        const classNames = "w-6 h-6 hover:scale-125 transform-gpu "
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


    return (
        <div>
            {renderThemeChanger()}
        </div>
    );
}

export default withTranslation()(ThemeSwitcher);