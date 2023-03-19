import Link from "next/link";
import Globe from "../../../public/layouts/globe.svg"
import Text from "../../../public/layouts/text.svg"

const Logo = () => {
    return (
        <Link href="/" className="my-2 flex items-center space-x-1 text-blue-500">
            <span className="flex">
                <Globe className="mr-3 h-10"/>
                <Text className="h-10"/>
            </span>
        </Link>
    )
}

export default Logo;