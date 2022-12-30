import Link from "next/link";
import Globe from "../public/layouts/globe.svg"
import Text from "../public/layouts/text.svg"

const Logo = () => {
    return (
        <Link href="/" className="my-2 flex items-center space-x-1 text-blue-500">
            <span className="flex">
                <Globe className="h-10 mr-3"/>
                <Text className="h-10"/>
            </span>
        </Link>
    )
}

export default Logo;