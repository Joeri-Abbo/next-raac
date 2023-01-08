type Props = {
    children: JSX.Element[] | JSX.Element | string | null
}
const Title = (props: Props) => {

    return (
        <>
            <div className="my-5 w-full text-black text-center dark:text-white mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {props.children}
            </div>
            <div className="border-b-2 w-3/5 border-gray-300 mx-auto mb-4"/>
        </>
    )
}
export default Title;