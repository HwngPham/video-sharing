import { render } from "@testing-library/react";
import { Navigation } from "./navigation";

describe("<Navigation />", () => {
  it("matches snapshot", () => {
    const container = render(<Navigation />);
    expect(container).toMatchSnapshot();
  });
});
