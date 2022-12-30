type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Col2 = (props: Props) => {
    return (
        <div className="border-2 rounded border-black p-6">
            {props.children}
        </div>
    )
}
export default Col2;