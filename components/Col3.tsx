type Props = {
    children: JSX.Element[] | JSX.Element | string

};
const Col3 = (props: Props) => {
    return (
        <div className="grid grid-cols-1 gap-4 flex-col-reverse mt-4 lg:grid-cols-3">
            {props.children}
        </div>
    )
}
export default Col3;