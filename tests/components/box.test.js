import {render} from "@testing-library/react";
import "@testing-library/jest-dom";

import Box from "../../components/Box";

describe("Box component", () => {
    it("renders children correctly", () => {
        const {getByText} = render(<Box>Test children</Box>);
        expect(getByText("Test children")).toBeInTheDocument();
    });

    it("renders multiple children correctly", () => {
        const {getAllByText} = render(
            <Box>
                <div>Child 1</div>
                <div>Child 2</div>
            </Box>
        );
        expect(getAllByText(/Child/)).toHaveLength(2);
    });

    it("renders a single child correctly", () => {
        const {getByText} = render(<Box>Test child</Box>);
        expect(getByText("Test child")).toBeInTheDocument();
    });

    it("renders a string child correctly", () => {
        const {getByText} = render(<Box>Test string child</Box>);
        expect(getByText("Test string child")).toBeInTheDocument();
    });

    it("renders with the correct styles", () => {
        const {container} = render(<Box>Test child</Box>);
        expect(container.firstChild).toHaveClass("m-auto rounded py-10 px-6 dark:bg-gray-900");
    });
});
