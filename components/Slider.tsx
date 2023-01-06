import {Button, Carousel} from "flowbite-react";

type Slide = {
    href?: string
    image: string
}
type Props = {
    slides: Slide[]
}
const Slider = (props: Props) => {
    const items = [...Array(1)] // using spread syntax (produces the same as above)

    return (
        <>
            <div className="
            h-100 sm:h-64 xl:h-80 2xl:h-96
            ">
                <Carousel className="border-none">
                    {items.map(item =>
                        <div className="relative w-full h-full">
                            <img
                                className="w-full w-full border-none"
                                src={"https://placeimg.com/177/300/" + item}
                                alt="..."
                            />
                            <div className="absolute top-20 left-20 z-10">
                                Title
                            </div>
                            <Button className="absolute bottom-20 left-20 z-10">
                                test
                            </Button>
                        </div>
                    )}
                </Carousel>
            </div>
        </>
    )
}
export default Slider;