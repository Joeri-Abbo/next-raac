type Props = {
    children: JSX.Element[] | JSX.Element | string | null
}
const Title = (props: Props) => {

    return (
        <>
            <div className="w-full dark:text-white text-black text-center my-4 text-3xl">
                {props.children}
            </div>
        </>
    )
}
export default Title;