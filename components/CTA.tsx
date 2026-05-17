import { JSX } from 'react';
import Image from "next/image";
import PrimaryButton from "../components/Button/Primary";

type Props = {
    children: JSX.Element[] | JSX.Element | string | null
    image: string
    title: string
    button?: {
        href: string
        label: string
    }
}
const CTA = (props: Props) => {
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white">
            <Image src={props.image} alt={props.title} width="1760" height="250" className="h-48 w-full object-cover"/>
            <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white whitespace-pre-wrap">
                    {props.title}
                </h3>
                <div className="flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
                    {props.children}
                </div>
                {props.button && (
                    <div className="mt-auto">
                        <PrimaryButton href={props.button?.href}>
                            {props.button?.label}
                        </PrimaryButton>
                    </div>
                )}
            </div>
        </div>
    )
}
export default CTA;