import Hero from "./";
import { render } from "../../utils/test";

describe("Hero", () => {
  test("Should render without crash", async () => {
    render(<Hero />);
  });
});
