import {render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Secondary from "../../../components/Button/Primary";

describe("Secondary component", () => {
    const testHref = "https://example.com";
    const testClassName = "test-class";
    const testChildren = "Test children";

    it("renders children correctly", () => {
        const {getByText} = render(<Secondary href={testHref}>{testChildren}</Secondary>);
        expect(getByText(testChildren)).toBeInTheDocument();
    });

    it("renders with the correct href and class", () => {
        const {container} = render(<Secondary href={testHref} className={testClassName}>
            {testChildren}
        </Secondary>);
        const buttonEl = container.firstChild;

        expect(buttonEl).toHaveAttribute("href", testHref);
        expect(buttonEl).toHaveClass(testClassName);
    });
});
