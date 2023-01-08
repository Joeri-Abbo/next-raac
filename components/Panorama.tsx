import Image from "next/image";
import Title from "./Title";

type Props = {
    image: string,
    alt: string,
    title?: string,
}
const Panorama = (props: Props) => {

    return (
        <>
            <div className="w-full border-b-4 border-blue-500">
                <Image src={props.image} alt={props.alt} width="1760" height="250" className="w-full"/>
            </div>

            {props.title != undefined && props.title.length > 0 &&
                <Title>
                    {props.title}
                </Title>
            }
        </>
    )
}
export default Panorama;