import App from "./";
import { render } from "../../utils/test";

describe("App", () => {
  test("Should render without crash", async () => {
    render(<App />);
  });
});
