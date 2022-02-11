import Footer from "./";
import { render } from "../../utils/test";

describe("Footer", () => {
  test("Should render without crash", async () => {
    render(<Footer />);
  });
});
