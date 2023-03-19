type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Col4 = (props: Props) => {
    return (
        <div className="mt-4 grid grid-cols-1 flex-col-reverse items-stretch gap-4 md:grid-cols-2 lg:grid-cols-4">
            {props.children}
        </div>
    )
}
export default Col4;