import BoxTitle from "./BoxTitle";
import Box from "./Box";
import BoxText from "./BoxText";

type Props = {
    title: JSX.Element[] | JSX.Element | string
    text: JSX.Element[] | JSX.Element | string
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
        </Box>
    )
}
export default BoxContent;