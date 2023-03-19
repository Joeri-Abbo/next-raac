import HeadNext from "next/head";
import {useRouter} from "next/router";

type Props = {
    title?: string
    description?: string

}
const Head = (props: Props) => {
    const router = useRouter()

    return (
        <>
            <HeadNext>
                <title>{props.title}</title>
                <meta name="description" content={props.description}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="og:title" content={props.title}/>
                <meta name="og:description" content={props.description}/>
                <meta name="og:type" content="website"/>
                <meta name="og:url" content={router.asPath}/>
                <meta name="og:image" content={"/og-image.jpg"}/>
                <link rel="icon" href="/favicon.ico"/>
            </HeadNext>
        </>
    )
};

export default Head;