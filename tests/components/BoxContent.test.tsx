import {render, screen} from "@testing-library/react";
import BoxContent from "../../components/BoxContent";

describe("BoxContent component", () => {
    const title = "Test Title";
    const text = "Test Text";
    const items = ["Test Item 1", "Test Item 2"];

    it("renders title and text", () => {
        render(<BoxContent title={title} text={text}/>);
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    it("renders list of items when provided", () => {
        render(<BoxContent title={title} text={text} items={items}/>);
        items.forEach((item) => expect(screen.getByText(item)).toBeInTheDocument());
    });

    it("does not render list of items when not provided", () => {
        render(<BoxContent title={title} text={text}/>);
        expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });
});
