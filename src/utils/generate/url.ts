import { GroupedRequest, Simulation } from "@src/interfaces/Request";

export const getBaseUrlCounts = (groupedRequests: GroupedRequest[]) => groupedRequests.reduce(
  (acc: Map<string, number>, groupedRequest: GroupedRequest) => {
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

export const addUrls = (groupedRequests: GroupedRequest[]): Simulation => {
  const baseUrlCounts = getBaseUrlCounts(groupedRequests);
  const baseUrl = getKeyWithHighestValue(baseUrlCounts);
  return ({
    baseUrl,
    groupedRequests
  });
}
