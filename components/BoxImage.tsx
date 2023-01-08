import Box from "./Box";
import Image from "next/image";

type Props = {
    src: string
    alt: string
    width: number
    height: number
};
const BoxImage = (props: Props) => {
    return (
        <Box>
            <Image src={props.src}
                   alt={props.alt}
                   width={props.width}
                   height={props.height}/>
        </Box>
    )
}
export default BoxImage;