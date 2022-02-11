import Header from "./";
import { screen } from "@testing-library/react";
import { render } from "../../utils/test";

describe("Header", () => {
  test("Should render without crash", async () => {
    render(<Header />);
    expect(screen.getByText("Sign In").closest("a")).toHaveAttribute(
      "href",
      "/login"
    );
  });
});
