import {useTranslation} from 'react-i18next';
import FlagNl from "../../../public/flags/nl.svg"
import FlagEn from "../../../public/flags/en.svg"

const STORAGE_KEY = 'lang';

function LanguageSwitcher() {
    const {i18n} = useTranslation();

    const onToggleLanguageClick = (newLocale: string) => {
        i18n.changeLanguage(newLocale);
        if (typeof window !== 'undefined') {
            try {
                window.localStorage.setItem(STORAGE_KEY, newLocale);
            } catch {
                // localStorage unavailable (private mode, quota, etc.) — ignore
            }
        }
    };

    const classNames = "w-6 h-6 hover:scale-125 transform-gpu";
    const isDutch = i18n.language === "nl";

    return (
        <div>
            {isDutch ? (
                <FlagEn className={classNames} role="button" onClick={() => onToggleLanguageClick("en")}/>
            ) : (
                <FlagNl className={classNames} role="button" onClick={() => onToggleLanguageClick("nl")}/>
            )}
        </div>
    );
}

export default LanguageSwitcher;
