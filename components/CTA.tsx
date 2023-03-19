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
        <div className="rounded border-4 border-gray-300 bg-white p-6 transition-all hover:scale-105 dark:border-gray-500 dark:bg-gray-900 dark:text-white">
            <div>
                <Image src={props.image} alt={props.title} width="1760" height="250" className="w-full"/>
                <h3 className="mt-1 bg-gray-700 py-3 text-center text-xs">
                    {props.title}
                </h3>
            </div>
            <div className="h-32 py-3 text-center text-black dark:text-white">
                {props.children}
            </div>
            {props.button && (
                <PrimaryButton href={props.button?.href}>
                    {props.button?.label}
                </PrimaryButton>
            )}
        </div>
    )
}
export default CTA;