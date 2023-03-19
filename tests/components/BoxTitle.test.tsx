import {render} from "@testing-library/react";
import BoxTitle from "../../components/BoxTitle";

describe("BoxTitle", () => {
    it("should render children", () => {
        const {getByText} = render(<BoxTitle>Test Title</BoxTitle>);
        expect(getByText("Test Title")).toBeInTheDocument();
    });

    it("should render with correct class name", () => {
        const {container} = render(<BoxTitle>Test Title</BoxTitle>);
        expect(container.firstChild).toHaveClass(
            "mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        );
    });
});
