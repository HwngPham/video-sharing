import { render } from "@testing-library/react";
import { SharedVideo } from "./sharedVideo";

describe("<SharedVideo />", () => {
  it("matches snapshot", () => {
    const container = render(
      <SharedVideo
        video={{
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "title",
          desc: "desc",
          html_text: "<p>html_text</p>",
          src: "https://foobar",
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
