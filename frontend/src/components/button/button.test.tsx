import { render } from "@testing-library/react";
import { Button } from "./button";

describe("<AuthForm />", () => {
  it("matches snapshot", () => {
    const container = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
