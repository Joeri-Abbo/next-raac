import {useTranslation} from "react-i18next";

const Copyright = () => {
    const {t} = useTranslation();

    return (
        <div className="text-center text-sm text-gray-500">
                <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
                    Joeri Abbo
                </span>
            &copy; {new Date().getFullYear()} {t('footer:copyright')}
        </div>
    )
}
export default Copyright;