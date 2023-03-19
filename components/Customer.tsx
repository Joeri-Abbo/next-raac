import Image from "next/image";
import {useTranslation} from "react-i18next";

type CustomerType = {
    image: string,
    title: string,
    href: string,
}
const Customer = (customer: CustomerType) => {
    const {t} = useTranslation('')

    return (
        <>
            <a href={customer.href} target="_blank" rel={"noreferrer"}
               className="rounded bg-white shadow-lg shadow-gray-200 duration-300 hover:-translate-y-1 dark:bg-gray-800 dark:shadow-gray-900 h-full flex flex-col justify-between border-4 border-gray-300
               ">
                <figure>
                    <div className="p-4">
                        <Image src={customer.image} className="h-36 w-full rounded-t object-contain" alt="Me"
                               width="200"
                               height="144"/>
                    </div>

                    <figcaption className="p-4">
                        <p
                            className="mb-4 text-lg font-bold leading-relaxed text-gray-800 dark:text-gray-300">

                            {t('customers:' + customer.title)}
                        </p>
                    </figcaption>
                </figure>
            </a>
        </>
    )
}
export default Customer;