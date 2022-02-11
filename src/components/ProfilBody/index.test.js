import ProfilBody from "./";
import { render } from "../../utils/test";

describe("ProfilBody", () => {
  test("Should render without crash", async () => {
    render(<ProfilBody />);
  });
});
