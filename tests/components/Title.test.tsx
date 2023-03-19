import {render} from "@testing-library/react";
import Title from "../../components/Title";

describe("Title component", () => {
    it("renders title text correctly", () => {
        const {getByText} = render(<Title>Test Title</Title>);
        expect(getByText("Test Title")).toBeInTheDocument();
    });
});
