import { getKeyWithHighestValue } from "./typescript";

const URL_MAP_COUNTS = new Map([
  ["https://other-site-example.net", 1],
  ["https://pwn-association.org", 2],
]);

describe("getKeyWithHighestValue", () => {
  it("should return most common base url", () => {
    expect(getKeyWithHighestValue(URL_MAP_COUNTS)).toEqual(
      "https://pwn-association.org"
    );
  });
});
