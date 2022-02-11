import Login from "./Home.jsx";
import { render } from "../utils/test";

describe("Login", () => {
  test("Should render without crash", async () => {
    render(<Login />);
  });
});
