import { render } from '@testing-library/react';
import Main from "../../../../sections/Main";

describe('Main component', () => {
    it('renders children', () => {
        const { getByText } = render(<Main><h1>Hello World</h1></Main>);
        expect(getByText('Hello World')).toBeInTheDocument();
    });
});