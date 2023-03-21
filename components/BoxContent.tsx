import BoxTitle from "./BoxTitle";
import Box from "./Box";
import BoxText from "./BoxText";

type Props = {
    title: JSX.Element[] | JSX.Element | string
    text: JSX.Element[] | JSX.Element | string
    items?: string[] | undefined | null
};
const BoxContent = (props: Props) => {
    return (
        <Box>
            <BoxTitle>
                {props.title}
            </BoxTitle>
            <BoxText>
                <p className="whitespace-pre-wrap">
                    {props.text}
                </p>
            </BoxText>
            {props.items ? (
                <ul className="mt-4 list-inside list-disc text-black dark:text-white">
                    {props.items.map((item: string, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : <span/>}
        </Box>
    )
}
export default BoxContent;