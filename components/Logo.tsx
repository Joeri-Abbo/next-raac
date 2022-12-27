import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="my-2 flex items-center space-x-1 text-blue-500">
            <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap">
                Joeri Abbo
            </span>
        </Link>
    )
}

export default Logo;