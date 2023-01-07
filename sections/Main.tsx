import MainWrapper from "../components/Sections/Layout/Main";

type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Main = (props: Props) => {
    return (
        <MainWrapper>
            {props.children}
        </MainWrapper>
    );
};

export default Main;