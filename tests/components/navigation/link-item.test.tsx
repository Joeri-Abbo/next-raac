import {render} from "@testing-library/react";
import LinkItem from "../../../components/navigation/LinkItem";
import "@testing-library/jest-dom/extend-expect";

jest.mock("next/router", () => ({
    useRouter: jest.fn(() => ({asPath: "/home"})),
}));

describe("LinkItem component", () => {
    it("should render correctly", () => {
        const {getByText} = render(
            <LinkItem href="/about">About</LinkItem>
        );
        const linkElement = getByText(/About/);
        expect(linkElement).not.toHaveClass("text-blue-500");
    });
});
