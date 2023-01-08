import Link from "next/link";
import {useRouter} from 'next/router'

type Props = {
    children: JSX.Element[] | JSX.Element | string | null,
    href: string
}
const LinkItem = (props: Props) => {
    const {asPath} = useRouter()
    let activeClass = asPath == props.href ? " text-blue-500" : "";
    return (
        <li className={"dark:text-white text-black hover:text-blue-500 dark:hover:text-blue-500" + activeClass}>
            <Link href={props.href}>
                {props.children}
            </Link>
        </li>
    )
}
export default LinkItem;