import {render, screen} from '@testing-library/react';
import Panorama from "../../components/Panorama";

describe('Panorama', () => {

    it('renders a title if provided', () => {
        const titleText = 'Example Title';
        render(<Panorama image="https://example.com/image.jpg" alt="Example Image" title={titleText}/>);

        const title = screen.getByText(titleText);
        expect(title).toBeInTheDocument();
    });

    it('does not render a title if not provided', () => {
        render(<Panorama image="https://example.com/image.jpg" alt="Example Image"/>);

        const title = screen.queryByRole('heading');
        expect(title).not.toBeInTheDocument();
    });
});
