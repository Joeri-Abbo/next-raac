type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Main = (props: Props) => {
    return (
        <div className="mx-auto mb-8 flex max-w-6xl flex-col">
            <main className="container mx-auto mt-6 flex-grow px-4 sm:px-6">
                {props.children}
            </main>
        </div>
    )
}
export default Main;