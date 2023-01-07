import {useState, useEffect} from 'react';
import {useTranslation, withTranslation} from 'react-i18next';
import FlagNl from "../../../public/flags/nl.svg"
import FlagEn from "../../../public/flags/en.svg"

function LanguageSwitcher() {
    const {i18n} = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    useEffect(() => {
        setLanguage(language);
        i18n.changeLanguage(language);
    }, [language, i18n]);


    const renderLangChanger = () => {

        const classNames = "w-6 h-6 hover:scale-125 transform-gpu"

        if (language === "nl") {
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
        i18n.changeLanguage(newLocale).then(r => setLanguage(newLocale));
        setLanguage(newLocale);
    };


    return (
        <div>
            {renderLangChanger()}
        </div>
    );
}

export default withTranslation()(LanguageSwitcher);