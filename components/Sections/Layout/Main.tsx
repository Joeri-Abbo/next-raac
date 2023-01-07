type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Main = (props: Props) => {
    return (
        <div className="min-h-screen mx-auto max-w-6xl flex flex-col">
            <main className="flex-grow container mx-auto px-4 sm:px-6 mt-6">
                {props.children}
            </main>
        </div>
    )
}
export default Main;