import Home from "./Home.jsx";
import { render } from "../utils/test";

describe("Home", () => {
  test("Should render without crash", async () => {
    render(<Home />);
  });
});
