import {Button, Carousel} from "flowbite-react";
import Image from "next/image";
import Slide from "./Slide";

type ButtonData = {
    href: string
    label: string
}
type SlideData = {
    button?: ButtonData
    title?: string
    text?: string
    image: string

}
type Props = {
    slides: SlideData[]
}
const Slider = (props: Props) => {
    return (
        <>
            <div className="
            h-[500px]
            ">
                <Carousel className="border-none">
                    {props.slides.map((item, index) =>
                        <Slide key={index}>
                            <Image
                                className=" border-none h-full w-full object-cover"
                                src={item.image}
                                alt="..."
                                width={1920}
                                height={1000}
                            />
                            <div className="absolute top-20 left-20 z-10 drop-shadow">
                                {item.title}
                            </div>
                            <div className="absolute top-40 left-20 z-10 drop-shadow">
                                {item.text}
                            </div>

                            <Button className="absolute bottom-20 left-20 z-10" href={item.button?.href}>
                                {item.button?.label}
                            </Button>
                            <Button className="absolute bottom-20 left-20 z-10" href={item.button?.href}>
                                {item.button?.label}
                            </Button>
                        </Slide>
                    )}
                </Carousel>
            </div>
        </>
    )
}
export default Slider;