import cloneDeep from "lodash-es/cloneDeep";

import { Simulation } from "@src/interfaces/Entry";

import { GROUPED_ENTRIES } from "./group.test";
import { addUrls, getKeyWithHighestValue, getBaseUrlCounts, rebaseUrlIfNeeded } from "./url";

const URL_MAP_COUNTS = new Map([["https://other-site-example.net", 1], ["https://pwn-association.org", 2]])

describe("getBaseUrlCounts", () => {
  it("should count urls", () => {
    expect(getBaseUrlCounts(GROUPED_ENTRIES)).toEqual(URL_MAP_COUNTS);
  });
});

describe("getKeyWithHighestValue", () => {
  it("should return most common base url", () => {
    expect(getKeyWithHighestValue(URL_MAP_COUNTS)).toEqual("https://pwn-association.org");
  });
});

describe("rebaseUrlIfNeeded", () => {
  it("should return same url", () => {
    expect(rebaseUrlIfNeeded("https://gatling.io/blog/article-random.html", "https://gatling.io")).toEqual("/blog/article-random.html");
  });
  it("should return url without baseUrl", () => {
    expect(rebaseUrlIfNeeded("https://fluflu.com/3615/test.php", "https://gatling.io")).toEqual("https://fluflu.com/3615/test.php");
  });
});


const REBASED_GROUPED_ENTRIES = cloneDeep(GROUPED_ENTRIES).map(entries => {
  entries.root.request.url = entries.root.request.url.includes("https://pwn-association") ? entries.root.request.url.slice(27) : entries.root.request.url
  entries.resources = entries.resources.map(entry => {
    entry.request.url = entry.request.url.includes("https://pwn-association") ? entry.request.url.slice(27) : entry.request.url;
    return entry
  })
  return entries;
})

const SIMULATION: Simulation = {
  baseUrl: "https://pwn-association.org",
  groupedRequests: REBASED_GROUPED_ENTRIES
}

describe("addUrls", () => {
  it("should return a simulation object", () => {
    expect(addUrls(GROUPED_ENTRIES)).toEqual(SIMULATION);
  });
});
