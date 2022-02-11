import LoginForm from "./";
import { render } from "../../utils/test";

describe("LoginForm", () => {
  test("Should render without crash", async () => {
    render(<LoginForm />);
  });
});
