type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const BoxTitle = (props: Props) => {
    return (
        <div className="dark:text-white mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {props.children}
        </div>
    )
}
export default BoxTitle;