type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const BoxTitle = (props: Props) => {
    return (
        <div className="text-black dark:text-white text-xl mb-2">
            {props.children}
        </div>
    )
}
export default BoxTitle;