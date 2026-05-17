import { JSX } from 'react';
type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Col3 = (props: Props) => {
    return (
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {props.children}
        </div>
    )
}
export default Col3;