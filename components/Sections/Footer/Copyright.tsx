import {useTranslation} from "react-i18next";

const Copyright = () => {
    const {t} = useTranslation();

    return (
        <div className="text-center text-sm text-gray-500">
                <span className="mr-2 text-lg font-bold text-gray-900 dark:text-gray-100">
                    Joeri Abbo
                </span>
            &copy; {new Date().getFullYear()} {t('footer:copyright')}
        </div>
    )
}
export default Copyright;