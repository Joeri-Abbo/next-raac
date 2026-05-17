import LinkItem from "./LinkItem";
import {useRouter} from 'next/router'
import {useTranslation} from "react-i18next";
import Chevron from "../../public/icons/chevron-down-solid.svg";
import DropdownProps from "./DropdownProps";
import DropdownLinkItemType from "./DropdownLinkItemType";

const Dropdown = (props: DropdownProps) => {
    const {t} = useTranslation('')
    const {asPath} = useRouter()
    let active = asPath == props.href;
    if (!active && props.subitems) {
        props.subitems.forEach((item) => {
            if (asPath == item.href) {
                active = true;
            }
        })
    }
    let activeClass = active ? " text-blue-500" : "";
    let activeChevronClass = active ? activeClass + " rotate-90 fill-blue-500" : "";
    return (
        <li className="text-black dark:text-white">
            {/* START DESKTOP DROPDOWN*/}
            <div className="group relative hidden md:block">
                <a href={props.href}
                   className={activeClass + " flex items-center gap-1 hover:text-blue-500 focus:outline-none"}>
                    {t(props.title)}
                    <Chevron
                        className={activeChevronClass + " w-4 h-4 fill-black dark:fill-white group-hover:fill-blue-500 group-hover:rotate-90 transform-gpu"}
                        role="button"/>
                </a>
                <div className="absolute left-0 top-full z-10 hidden pt-2 group-hover:block">
                    <div className="w-64 rounded-lg bg-white px-4 pt-2 pb-4 shadow-lg dark:bg-black">
                        <ul className="flex flex-col gap-2">
                            {props.subitems && Object.keys(props.subitems).length > 0 && props.subitems.map((item: DropdownLinkItemType) => (
                                <LinkItem key={item.title} href={item.href}>
                                    {t(item.title)}
                                </LinkItem>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* END DESKTOP DROPDOWN*/}

            {/* START MOBILE DROPDOWN*/}
            <div className="md:hidden">
                <ul>
                    <LinkItem href={props.href}>
                        {t(props.title)}
                    </LinkItem>
                </ul>
                <ul className="ml-3">
                    {props.subitems && Object.keys(props.subitems).length > 0 && props.subitems.map((item: DropdownLinkItemType) => (
                        <LinkItem key={item.title} href={item.href}>
                            {t(item.title)}
                        </LinkItem>
                    ))}
                </ul>
            </div>
            {/* END MOBILE DROPDOWN*/}
        </li>
    )
}
export default Dropdown;