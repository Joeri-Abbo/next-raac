import {Button} from "flowbite-react";

type Props = {
    children: JSX.Element[] | JSX.Element | string
    className?: string
    href: string
};
const Primary = (props: Props) => {
    return (
        <Button href={props.href} className={props.className}>
            {props.children}
        </Button>
    )
}
export default Primary;