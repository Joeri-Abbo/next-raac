import HeadNext from "next/head";

type Props = {
    title?: string
    description?: string

}
const Head = (props: Props) => {
    return (
        <>
            <HeadNext>
                <title>{props.title + " - " + "RAAC"}</title>
                <meta name="description" content={props.description}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </HeadNext>
        </>
    )
};

export default Head;