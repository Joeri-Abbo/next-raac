import Logo from "../components/Logo";
import {useTheme} from "next-themes";
import {useState, useEffect} from "react";
import SunIcon from "../public/icons/sun-bright-solid.svg"
import MoonIcon from "../public/icons/moon-solid.svg"


const Header = () => {

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
        const classNames = "my-2 w-6 h-6 hover:scale-125 transform-gpu "
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
        <header
            className="h-15 shadow-sm sticky top-0 z-30 w-full px-2 py-4 sm:px-4 shadow-xl relative dark:bg-black bg-white ">
            <div className="px-2 sm:px-3 py-2 flex justify-between items-center z-100">
                <Logo/>
                <div className="flex gap-6 items-center">
                    {renderThemeChanger()}
                </div>
            </div>
        </header>
    );
};

export default Header;