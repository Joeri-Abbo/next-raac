type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Box = (props: Props) => {
    return (
        <div className="rounded py-10 px-6 dark:bg-gray-900 m-auto">
            {props.children}
        </div>
    )
}
export default Box;