type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Col2 = (props: Props) => {
    return (
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {props.children}
        </div>
    )
}
export default Col2;