import { JSX } from 'react';
type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Main = (props: Props) => {
    return (
        <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            {props.children}
        </main>
    )
}
export default Main;