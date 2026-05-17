import Link from "next/link";
import Globe from "../../../public/layouts/globe.svg"
import Text from "../../../public/layouts/text.svg"

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-3 text-blue-500">
            <Globe className="h-10"/>
            <Text className="h-10"/>
        </Link>
    )
}

export default Logo;