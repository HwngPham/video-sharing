import { render } from "@testing-library/react";
import { Layout } from "./layout";

describe("<Button />", () => {
  it("matches snapshot", () => {
    const container = render(<Layout>content</Layout>);
    expect(container).toMatchSnapshot();
  });
});
