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
        <div className="h-[420px] md:h-[520px]">
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
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"/>
                        <div className="absolute inset-0 flex items-center">
                            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="max-w-xl text-white drop-shadow-md">
                                    <h2 className="mb-4 text-3xl font-bold leading-tight whitespace-pre-wrap md:text-4xl">
                                        {item.title}
                                    </h2>
                                    <p className="mb-6 text-base leading-relaxed whitespace-pre-wrap md:text-lg">
                                        {item.text}
                                    </p>
                                    <PrimaryButton href={item.button?.href ?? ""}>
                                        {item.button?.label ?? ""}
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </Slide>
                )}
            </Carousel>
        </div>
    )
}
export default Slider;