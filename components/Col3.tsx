type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Col3 = (props: Props) => {
    return (
        <div className="mt-4 grid grid-cols-1 flex-col-reverse items-stretch gap-4 lg:grid-cols-3">
            {props.children}
        </div>
    )
}
export default Col3;