import Image from "next/image";
import {useTranslation} from "react-i18next";

type CustomerType = {
    image: string,
    title: string,
}
const Customer = (customer: CustomerType) => {
    const { t } = useTranslation('')

    return (
        <>
            <div
                className="h-full rounded bg-white shadow-lg shadow-gray-200 duration-300 hover:-translate-y-1 dark:bg-gray-800 dark:shadow-gray-900">
                <figure>
                    <div className="p-4">
                        <Image src={customer.image} className="h-72 w-full rounded-t object-contain" alt="Me" width="600"
                               height="600"/>
                    </div>

                    <figcaption className="p-4">
                        <p
                            className="mb-4 text-lg font-bold leading-relaxed text-gray-800 dark:text-gray-300">

                            {t('customers:' + customer.title)}
                        </p>
                    </figcaption>
                </figure>
            </div>
        </>
    )
}
export default Customer;