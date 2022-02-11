import Profile from "./profile";
import { render } from "../utils/test";

describe("Profile", () => {
  test("Should render without crash", async () => {
    render(<Profile />);
  });
});
