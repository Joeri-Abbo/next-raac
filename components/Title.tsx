import { JSX } from 'react';
type Props = {
    children: JSX.Element[] | JSX.Element | string | null
}
const Title = (props: Props) => {

    return (
        <div className="mb-8 text-center">
            <div className="mb-4 w-full text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white whitespace-pre-wrap sm:text-4xl">
                {props.children}
            </div>
            <div className="mx-auto h-1 w-24 rounded bg-blue-500"/>
        </div>
    )
}
export default Title;