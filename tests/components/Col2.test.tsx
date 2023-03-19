import {render} from "@testing-library/react";
import Col2 from "../../components/Col2";

describe("Col2Test", () => {
    it("should render children", () => {
        const {getByText} = render(
            <Col2>
                <div>Child 1</div>
                <div>Child 2</div>
            </Col2>
        );

        expect(getByText("Child 1")).toBeInTheDocument();
        expect(getByText("Child 2")).toBeInTheDocument();
    });
});
