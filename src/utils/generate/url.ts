import cloneDeep from "lodash-es/cloneDeep";

import {
  type GroupedEntry,
  type RebasedGroupedEntry,
  type Simulation,
} from "@src/interfaces/Entry";

export const getBaseUrlCounts = (
  groupedRequests: GroupedEntry[]
): Map<string, number> =>
  groupedRequests.reduce(
    (acc: Map<string, number>, groupedRequest: GroupedEntry) => {
      const baseUrl = new URL(groupedRequest.root.request.url).origin;

      return acc.has(baseUrl)
        ? acc.set(baseUrl, acc.get(baseUrl)! + 1)
        : acc.set(baseUrl, 1);
    },
    new Map()
  );

export const getKeyWithHighestValue = (map: Map<string, number>): string => {
  let highestKey = "";
  let highestValue = 0;

  for (const [key, value] of map) {
    if (value > highestValue) {
      highestKey = key;
      highestValue = value;
    }
  }

  return highestKey;
};

export const rebaseUrlIfNeeded = (
  url: string,
  baseUrl: string,
  commonsUrl: Map<string, string>
): { url: string; origin?: string } => {
  if (url.startsWith(baseUrl)) {
    return { url: url.slice(baseUrl.length) };
  } else {
    const origin = Array.from(commonsUrl.keys()).find((commonUrl) =>
      url.startsWith(commonUrl)
    );
    if (origin && url.startsWith(origin)) {
      return { url: url.slice(origin.length), origin };
    } else {
      return { url };
    }
  }
};

const rebaseGroupedEntry = (
  groupedEntry: GroupedEntry,
  baseUrl: string,
  commonUrls: Map<string, string>
): RebasedGroupedEntry => {
  const clonedGroupedEntry = cloneDeep(groupedEntry) as RebasedGroupedEntry;
  const { url, origin } = rebaseUrlIfNeeded(
    clonedGroupedEntry.root.request.url,
    baseUrl,
    commonUrls
  );

  clonedGroupedEntry.root.request.url = url;
  clonedGroupedEntry.root.request.origin = origin;

  clonedGroupedEntry.resources.map((r) => {
    const { url, origin } = rebaseUrlIfNeeded(
      r.request.url,
      baseUrl,
      commonUrls
    );

    r.request.url = url;
    r.request.origin = origin;

    return r;
  });

  return clonedGroupedEntry;
};

export const getCommonUrls = (
  groupedEntries: GroupedEntry[],
  baseUrl: string,
  baseUrlCounts: Map<string, number>
): Map<string, string> => {
  const baseUrlCountsWithoutBaseUrl = new Map(baseUrlCounts);
  const commonUrlsSet = new Set(baseUrlCountsWithoutBaseUrl.keys());

  groupedEntries.forEach((groupedEntry) => {
    groupedEntry.resources.forEach((entry) => {
      commonUrlsSet.add(new URL(entry.request.url).origin);
    });
  });

  commonUrlsSet.delete(baseUrl);

  const commonUrls = new Map<string, string>();
  Array.from(commonUrlsSet).forEach((url, index, array) => {
    commonUrls.set(
      url,
      "url" +
        (index + 1).toString().padStart(array.length.toString().length, "0")
    );
  });

  return commonUrls;
};

export const addUrls = (groupedEntries: GroupedEntry[]): Simulation => {
  const baseUrlCounts = getBaseUrlCounts(groupedEntries);
  const baseUrl = getKeyWithHighestValue(baseUrlCounts);

  const commonUrls = getCommonUrls(groupedEntries, baseUrl, baseUrlCounts);

  const rebasedGroupedEntries = groupedEntries.map((groupedEntry) =>
    rebaseGroupedEntry(groupedEntry, baseUrl, commonUrls)
  );

  return {
    baseUrl,
    commonUrls,
    groupedEntries: rebasedGroupedEntries,
  };
};
