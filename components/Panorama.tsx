import Image from "next/image";

type Props = {
    image: string,
    alt: string,
}
const Panorama = (props: Props) => {

    return (
        <>
            <div className="w-full">
                <Image src={props.image} alt={props.alt} width="1760" height="250" className="w-full"/>
            </div>
        </>
    )
}
export default Panorama;