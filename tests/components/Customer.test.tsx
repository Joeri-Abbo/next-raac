import {render} from "@testing-library/react";
import Customer from "../../components/Customer";

describe("Customer", () => {
    const customer = {
        image: "/path/to/image.jpg",
        title: "customerTitle",
        href: "https://example.com",
    };

    it("renders image with correct alt text", () => {
        const {getByAltText} = render(<Customer {...customer} />);
        const imageElement = getByAltText("Me");
        expect(imageElement).toBeInTheDocument();
    });

    it("renders title with correct translation key", () => {
        const {getByText} = render(<Customer {...customer} />);
        const titleElement = getByText("customers:customerTitle");
        expect(titleElement).toBeInTheDocument();
    });

    it("renders link with correct href", () => {
        const {getByRole} = render(<Customer {...customer} />);

        // @ts-ignore
        const linkElement = getByRole("link", {href: "https://example.com"});
        expect(linkElement).toBeInTheDocument();
    });
});
