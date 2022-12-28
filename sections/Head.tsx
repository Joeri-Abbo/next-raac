import HeadNext from "next/head";

type Props = {
    children: JSX.Element[] | JSX.Element | string

}
const Head = (props: Props) => {
    return (
        <>
            <HeadNext>
                {props.children}
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </HeadNext>
        </>
    )
};

export default Head;