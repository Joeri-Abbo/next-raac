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
                {props.text}
            </BoxText>
            {props.items ? (
                <ul className="list-disc list-inside dark:text-white text-black mt-4">
                    {props.items.map((item: string, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : <span/>}
        </Box>
    )
}
export default BoxContent;