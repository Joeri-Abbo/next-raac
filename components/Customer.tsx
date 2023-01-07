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
                className=" rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1 h-full">
                <figure>
                    <Image src={customer.image} className="rounded-t h-72 w-full object-contain" alt="Me" width="600"
                           height="600"/>

                    <figcaption className="p-4">
                        <p
                            className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">

                            {t('customers:' + customer.title)}
                        </p>
                    </figcaption>
                </figure>
            </div>
        </>
    )
}
export default Customer;