import { render } from "@testing-library/react";
import { TextInput } from "./textInput";

describe("<TextInput />", () => {
  it("matches snapshot", () => {
    const container = render(<TextInput />);
    expect(container).toMatchSnapshot();
  });
});
