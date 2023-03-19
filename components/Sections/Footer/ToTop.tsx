import Link from "next/link";
import ArrowUp from "../../../public/icons/circle-arrow-up-solid.svg";

const ToTop = () => {
    return (
        <Link href="#top" className="absolute left-3">
            <ArrowUp className="h-8 w-8 fill-blue-500 dark:fill-white" role="button"/>
        </Link>
    )
}
export default ToTop;