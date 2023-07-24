import { render } from "@testing-library/react";
import { ModalSharing } from "./modalSharing";

describe("<ModalSharing />", () => {
  it("matches snapshot", () => {
    const container = render(<ModalSharing open toggleOpen={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });
});
