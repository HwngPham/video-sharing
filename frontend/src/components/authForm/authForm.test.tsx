import { render } from "@testing-library/react";
import { AuthForm } from "./authForm";

describe("<AuthForm />", () => {
  it("matches snapshot", () => {
    const container = render(<AuthForm />);
    expect(container).toMatchSnapshot();
  });
});
