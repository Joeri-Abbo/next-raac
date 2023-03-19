import {render, screen} from "@testing-library/react";
import CTA from "../../components/CTA";

describe("CTA component", () => {
    const props = {
        image: "https://example.com/image.jpg",
        title: "Example Title",
        button: {
            href: "https://example.com",
            label: "Example Label",
        },
        children: <p>Example Children</p>,
    };

    test("renders title and image", () => {
        render(<CTA {...props} />);
        const titleElement = screen.getByText(props.title);
        expect(titleElement).toBeInTheDocument();
        const imageElement = screen.getByAltText(props.title);
        expect(imageElement).toBeInTheDocument();
    });

    test("renders children", () => {
        render(<CTA {...props} />);
        const childrenElement = screen.getByText("Example Children");
        expect(childrenElement).toBeInTheDocument();
    });

    test("does not render button when not provided", () => {
        const propsWithoutButton = {...props, button: undefined};
        render(<CTA {...propsWithoutButton} />);
        const buttonElement = screen.queryByRole("button", {name: "Example Label"});
        expect(buttonElement).not.toBeInTheDocument();
    });
});