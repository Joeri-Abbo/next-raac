import {render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Primary from "../../../components/Button/Primary";

describe("Primary component", () => {
    const testHref = "https://example.com";
    const testClassName = "test-class";
    const testChildren = "Test children";

    it("renders children correctly", () => {
        const {getByText} = render(<Primary href={testHref}>{testChildren}</Primary>);
        expect(getByText(testChildren)).toBeInTheDocument();
    });

    it("renders with the correct href and class", () => {
        const {container} = render(<Primary href={testHref} className={testClassName}>
            {testChildren}
        </Primary>);
        const buttonEl = container.firstChild;

        expect(buttonEl).toHaveAttribute("href", testHref);
        expect(buttonEl).toHaveClass(testClassName);
    });
});
