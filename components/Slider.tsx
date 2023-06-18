import {Carousel} from "flowbite-react";
import PrimaryButton from "../components/Button/Primary";

import Image from "next/image";
import Slide from "./Slide";

type ButtonData = {
    href: string
    label: string
}
type SlideData = {
    button?: ButtonData
    title?: string | null
    text?: string | null
    image: string

}
type Props = {
    slides: SlideData[]
}
const Slider = (props: Props) => {
    return (
        <>
            <div className="h-[500px]">
                <Carousel className="border-none" slideInterval={5000}>
                    {props.slides.map((item, index) =>
                        <Slide key={index}>
                            <Image
                                className="h-full w-full border-none object-cover"
                                src={item.image}
                                alt="..."
                                width={1920}
                                height={1000}
                            />
                            <div
                                className="max-w-90 absolute top-10 left-5 z-10 text-2xl opacity-70 drop-shadow md:top-20 md:left-20 md:max-w-80 overflow-hidden inline-block">
                                <div className="mb-4 bg-black px-4 py-4 inline-block whitespace-pre-wrap text-white">
                                    {item.title}
                                </div>

                                <div>

                                    <div className="px-4 py-4 bg-black inline-block whitespace-pre-wrap text-white">
                                        {item.text}
                                    </div>
                                </div>
                            </div>

                            <PrimaryButton className="absolute bottom-20 z-10 left-5 md:left-20"
                                           href={item.button?.href ?? ""}>
                                {item.button?.label ?? ""}
                            </PrimaryButton>
                        </Slide>
                    )}
                </Carousel>
            </div>
        </>
    )
}
export default Slider;