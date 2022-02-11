import ProfilHero from "./";
import { render } from "../../utils/test";

describe("ProfilHero", () => {
  test("Should render without crash", async () => {
    render(<ProfilHero />);
  });
});
