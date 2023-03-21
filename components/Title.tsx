type Props = {
    children: JSX.Element[] | JSX.Element | string | null
}
const Title = (props: Props) => {

    return (
        <>
            <div
                className="my-5 mb-4 w-full text-center text-4xl font-extrabold tracking-tight text-black text-gray-900 dark:text-white whitespace-pre-wrap">
                {props.children}
            </div>
            <div className="mx-auto mb-4 w-3/5 border-b-2 border-gray-300"/>
        </>
    )
}
export default Title;