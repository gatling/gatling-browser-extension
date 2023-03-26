import cloneDeep from "lodash-es/cloneDeep";

import {
  type RebasedGroupedEntry,
  type Simulation,
} from "@src/interfaces/Entry";

import { GROUPED_ENTRIES } from "./group.test";
import {
  addUrls,
  getKeyWithHighestValue,
  getBaseUrlCounts,
  rebaseUrlIfNeeded,
} from "./url";

const URL_MAP_COUNTS = new Map([
  ["https://other-site-example.net", 1],
  ["https://pwn-association.org", 2],
]);

describe("getBaseUrlCounts", () => {
  it("should count urls", () => {
    expect(getBaseUrlCounts(GROUPED_ENTRIES)).toEqual(URL_MAP_COUNTS);
  });
});

describe("getKeyWithHighestValue", () => {
  it("should return most common base url", () => {
    expect(getKeyWithHighestValue(URL_MAP_COUNTS)).toEqual(
      "https://pwn-association.org"
    );
  });
});

describe("rebaseUrlIfNeeded", () => {
  it("should return same url", () => {
    expect(
      rebaseUrlIfNeeded(
        "https://gatling.io/blog/article-random.html",
        "https://gatling.io",
        new Map()
      )
    ).toEqual({ url: "/blog/article-random.html" });
  });
  it("should return url with origin", () => {
    expect(
      rebaseUrlIfNeeded(
        "https://fluflu.com/3615/test.php",
        "https://gatling.io",
        new Map([["https://fluflu.com", "url5"]])
      )
    ).toEqual({ url: "/3615/test.php", origin: "https://fluflu.com" });
  });
  it("should return url without baseUrl or origin", () => {
    expect(
      rebaseUrlIfNeeded(
        "https://fluflu.com/3615/test.php",
        "https://gatling.io",
        new Map()
      )
    ).toEqual({ url: "https://fluflu.com/3615/test.php" });
  });
});

const REBASED_GROUPED_ENTRIES = (
  cloneDeep(GROUPED_ENTRIES) as RebasedGroupedEntry[]
).map((entries) => {
  if (entries.root.request.url.startsWith("https://other-site-example.net")) {
    entries.root.request.origin = "https://other-site-example.net";
    entries.root.request.url = entries.root.request.url.slice(30);
  } else if (
    entries.root.request.url.startsWith("https://www.google-analytics.com")
  ) {
    entries.root.request.origin = "https://www.google-analytics.com";
    entries.root.request.url = entries.root.request.url.slice(32);
  } else if (entries.root.request.url.startsWith("https://pwn-association")) {
    entries.root.request.url = entries.root.request.url.slice(27);
  } else {
    entries.root.request.origin = undefined;
  }

  entries.resources = entries.resources.map((entry) => {
    if (entry.request.url.startsWith("https://other-site-example.net")) {
      entry.request.origin = "https://other-site-example.net";
      entry.request.url = entry.request.url.slice(30);
    } else if (
      entry.request.url.startsWith("https://www.google-analytics.com")
    ) {
      entry.request.origin = "https://www.google-analytics.com";
      entry.request.url = entry.request.url.slice(32);
    } else if (entry.request.url.startsWith("https://pwn-association")) {
      entry.request.url = entry.request.url.slice(27);
    } else {
      entry.request.origin = undefined;
    }

    return entry;
  });
  return entries;
});

const SIMULATION: Simulation = {
  baseUrl: "https://pwn-association.org",
  commonUrls: new Map([
    ["https://other-site-example.net", "url1"],
    ["https://www.google-analytics.com", "url2"],
  ]),
  groupedEntries: REBASED_GROUPED_ENTRIES,
};

describe("addUrls", () => {
  it("should return a simulation object", () => {
    expect(addUrls(GROUPED_ENTRIES)).toEqual(SIMULATION);
  });
});
