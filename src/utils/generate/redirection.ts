import { type SimpleEntry } from "@src/interfaces/Entry";
import { isRedirection } from "@src/utils/generate/http";

export const groupRedirectionRequests = (
  entries: SimpleEntry[]
): SimpleEntry[][] => {
  const mergedEntries: SimpleEntry[][] = [];
  let redirectionGroup: SimpleEntry[] = [];

  entries.forEach((entry) => {
    if (isRedirection(entry.response.status)) {
      redirectionGroup.push(entry);
    } else {
      if (redirectionGroup.length > 0) {
        redirectionGroup.push(entry);
        mergedEntries.push(redirectionGroup);
        redirectionGroup = [];
      } else {
        mergedEntries.push([entry]);
      }
    }
  });

  return mergedEntries;
};

export const mergeRedirectionRequests = (
  entries: SimpleEntry[]
): SimpleEntry[] => {
  const groupedRedirectionRequests = groupRedirectionRequests(entries);

  return groupedRedirectionRequests.map((items) => {
    return { ...items[0], response: items[items.length - 1].response };
  });
};
