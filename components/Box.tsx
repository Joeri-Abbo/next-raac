type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Col2 = (props: Props) => {
    return (
        <div className=" rounded p-6">
            {props.children}
        </div>
    )
}
export default Col2;