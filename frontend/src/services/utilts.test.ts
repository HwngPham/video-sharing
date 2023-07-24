import { getResponseData } from "./utils";

describe("getResponseData()", () => {
  it("extracts message attribute from response body", async () => {
    const mockResponse = {
      json: () => Promise.resolve({ message: "expected" }),
    };
    // @ts-expect-error skip type checking for other attributes of response
    expect(await getResponseData(mockResponse)).toBe("expected");
  });
});
