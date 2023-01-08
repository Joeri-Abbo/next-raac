import {Button, Carousel} from "flowbite-react";
import Image from "next/image";
import Slide from "./Slide";

type SlideData = {
    href?: string
    image: string
}
type Props = {
    slides: SlideData[]
}
const Slider = (props: Props) => {
    return (
        <>
            <div className="
            h-100 sm:h-64 xl:h-80 2xl:h-96
            ">
                <Carousel className="border-none">
                    {props.slides.map((item, index) =>
                        <Slide key={index}>
                            <Image
                                className="w-full w-full border-none"
                                src={"https://placeimg.com/177/300/" + item}
                                alt="..."
                                width={177}
                                height={300}
                            />
                            <div className="absolute top-20 left-20 z-10">
                                Title
                            </div>
                            <Button className="absolute bottom-20 left-20 z-10">
                                test
                            </Button>
                        </Slide>
                    )}
                </Carousel>
            </div>
        </>
    )
}
export default Slider;