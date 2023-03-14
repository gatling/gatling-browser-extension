import cloneDeep from "lodash-es/cloneDeep";

import { GroupedEntry, Simulation } from "@src/interfaces/Entry";

export const getBaseUrlCounts = (groupedRequests: GroupedEntry[]) => groupedRequests.reduce(
  (acc: Map<string, number>, groupedRequest: GroupedEntry) => {
    const baseUrl = new URL(groupedRequest.root.request.url).origin;

    return acc.has(baseUrl)
      ? acc.set(baseUrl, acc.get(baseUrl)! + 1)
      : acc.set(baseUrl, 1);
  },
  new Map()
);

export const getKeyWithHighestValue = (map: Map<string, number>): string => {
  let highestKey: string = "";
  let highestValue = 0;

  for (const [key, value] of map) {
    if (value > highestValue) {
      highestKey = key;
      highestValue = value;
    }
  }

  return highestKey;
};

export const rebaseUrlIfNeeded = (url: string, baseUrl: string): string => {
  if (url.startsWith(baseUrl)) {
    return url.slice(baseUrl.length);
  } else {
    return url;
  }
};

const rebaseGroupedRequest = (groupedEntry: GroupedEntry, baseUrl: string): GroupedEntry => {
  const clonedGroupedEntry = cloneDeep(groupedEntry);
  clonedGroupedEntry.root.request.url = rebaseUrlIfNeeded(clonedGroupedEntry.root.request.url, baseUrl)
  clonedGroupedEntry.resources.map(r => {
    r.request.url = rebaseUrlIfNeeded(r.request.url, baseUrl)
    return r
  })

  return clonedGroupedEntry;
};

export const addUrls = (groupedRequests: GroupedEntry[]): Simulation => {
  const baseUrlCounts = getBaseUrlCounts(groupedRequests);
  const baseUrl = getKeyWithHighestValue(baseUrlCounts);
  const rebasedGroupedRequests = groupedRequests.map(r => rebaseGroupedRequest(r, baseUrl))
  return ({
    baseUrl,
    groupedRequests: rebasedGroupedRequests
  });
}
