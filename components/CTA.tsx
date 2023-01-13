import {Button} from "flowbite-react";
import Image from "next/image";

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
        <div className="p-6 bg-white rounded">
            <div>
                <Image src={props.image} alt={props.title} width="1760" height="250" className="w-full"/>
                <h3 className="bg-gray-700 py-3 px-7 mt-1 text-center">
                    {props.title}
                </h3>
            </div>
            <p className="py-3 text-black text-center">
                {props.children}
            </p>
            {props.button && (
                <Button className="" href={props.button?.href}>
                    {props.button?.label}
                </Button>
            )}
        </div>
    )
}
export default CTA;