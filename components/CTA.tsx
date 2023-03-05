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
        <div className="p-6 bg-white rounded dark:bg-gray-900 dark:text-white border-4 border-gray-300 rounded dark:border-gray-500 hover:scale-105 transition-all	">
            <div>
                <Image src={props.image} alt={props.title} width="1760" height="250" className="w-full"/>
                <h3 className="bg-gray-700 py-3 mt-1 text-center text-xs">
                    {props.title}
                </h3>
            </div>
            <div className="py-3 text-black text-center dark:text-white h-32">
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