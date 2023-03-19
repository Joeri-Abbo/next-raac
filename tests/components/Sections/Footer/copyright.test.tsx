import {render} from "@testing-library/react";
import Copyright from "../../../../components/Sections/Footer/Copyright";

jest.mock("react-i18next", () => ({
    // @ts-ignore
    useTranslation: () => ({t: key => key}),
}));

describe("Copyright component", () => {
    test("renders the author name", () => {
        const {getByText} = render(<Copyright/>);
        expect(getByText("Joeri Abbo")).toBeInTheDocument();
    });
});
