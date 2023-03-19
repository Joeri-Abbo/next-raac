import {render} from '@testing-library/react';
import Col3 from "../../components/Col3";

describe('Col3Test component', () => {
    it('renders its children', () => {
        const {getByText} = render(
            <Col3>
                <div>Child 1</div>
                <div>Child 2</div>
                <div>Child 3</div>
            </Col3>
        );

        expect(getByText('Child 1')).toBeInTheDocument();
        expect(getByText('Child 2')).toBeInTheDocument();
        expect(getByText('Child 3')).toBeInTheDocument();
    });
});
