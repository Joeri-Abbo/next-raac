import {useId} from "react";

type Props = {
    children: JSX.Element[] | JSX.Element | string
}
const Slide = (props: Props) => {
    const id = useId()
    return (
        <div key={id} className="relative w-full h-full">
            {props.children}
        </div>
    )
}
export default Slide;