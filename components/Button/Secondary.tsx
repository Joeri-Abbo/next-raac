import {Button} from "flowbite-react";

type Props = {
    children: JSX.Element[] | JSX.Element | string
    className?: string
    href: string
};
const Secondary = (props: Props) => {
    return (
        <Button color="gray" href={props.href} className={props.className}>
            {props.children}
        </Button>
    )
}
export default Secondary;