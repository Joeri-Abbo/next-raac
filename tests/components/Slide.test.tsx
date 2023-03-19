import { render } from '@testing-library/react';
import { useId } from 'react';
import Slide from "../../components/Slide";

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useId: jest.fn(),
}));

describe('Slide', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders children correctly', () => {
        const children = <div>Some content</div>;
        const { getByText } = render(<Slide>{children}</Slide>);
        expect(getByText('Some content')).toBeInTheDocument();
    });
});
