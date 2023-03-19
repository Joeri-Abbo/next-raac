import {render} from '@testing-library/react';
import Col4 from "../../components/Col4";

describe('Col4 component', () => {
    it('renders its children', () => {
        const {getByText} = render(
            <Col4>
                <div>Child 1</div>
                <div>Child 2</div>
                <div>Child 3</div>
                <div>Child 4</div>
            </Col4>
        );

        expect(getByText('Child 1')).toBeInTheDocument();
        expect(getByText('Child 2')).toBeInTheDocument();
        expect(getByText('Child 3')).toBeInTheDocument();
        expect(getByText('Child 4')).toBeInTheDocument();
    });
});