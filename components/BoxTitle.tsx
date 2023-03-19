type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const BoxTitle = (props: Props) => {
    return (
        <div className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {props.children}
        </div>
    )
}
export default BoxTitle;