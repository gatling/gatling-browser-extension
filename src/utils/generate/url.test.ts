import { Simulation } from "@src/interfaces/Request";

import { GROUPED_REQUESTS } from "./group.test";
import { addUrls, getKeyWithHighestValue, getBaseUrlCounts } from "./url";

const URL_MAP_COUNTS = new Map([["https://other-site-example.net", 1], ["https://pwn-association.org", 2]])

describe("getBaseUrlCounts", () => {
  it("should count urls", () => {
    expect(getBaseUrlCounts(GROUPED_REQUESTS)).toEqual(URL_MAP_COUNTS);
  });
});

describe("getKeyWithHighestValue", () => {
  it("should return most common base url", () => {
    expect(getKeyWithHighestValue(URL_MAP_COUNTS)).toEqual("https://pwn-association.org");
  });
});

const SIMULATION: Simulation = {
  baseUrl: "https://pwn-association.org",
  groupedRequests: GROUPED_REQUESTS
}

describe("addUrls", () => {
  it("should return a simulation object", () => {
    expect(addUrls(GROUPED_REQUESTS)).toEqual(SIMULATION);
  });
});
