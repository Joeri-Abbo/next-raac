type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Box = (props: Props) => {
    return (
        <div className="m-auto rounded py-10 px-6 dark:bg-gray-900">
            {props.children}
        </div>
    )
}
export default Box;