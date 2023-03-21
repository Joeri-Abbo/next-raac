type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const BoxText = (props: Props) => {
    return (
        <div className="text-black dark:text-white whitespace-pre-wrap">
            {props.children}
        </div>
    )
}
export default BoxText;