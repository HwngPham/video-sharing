import { render } from "@testing-library/react";
import { UserAction } from "./userAction";

describe("<UserAction />", () => {
  it("matches snapshot", () => {
    const container = render(<UserAction />);
    expect(container).toMatchSnapshot();
  });
});
