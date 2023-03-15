import { type GroupedEntry, type SimpleEntry } from "@src/interfaces/Entry";

export const TIMESTAMP_100_MS = 250;

const createNewGroup = (entry: SimpleEntry): GroupedEntry => {
  const sendTime = new Date(entry.startedDateTime).getTime();
  return {
    root: entry,
    sendTime: sendTime,
    arrivalTime: sendTime + TIMESTAMP_100_MS,
    resources: [],
  };
};

export const groupRequests = (entries: SimpleEntry[]): GroupedEntry[] => {
  const groupedRequests: GroupedEntry[] = [];
  let currentGroupedRequest: GroupedEntry | null = null;

  entries.forEach((entry) => {
    if (currentGroupedRequest === null) {
      currentGroupedRequest = createNewGroup(entry);
    } else {
      const sendTime = new Date(entry.startedDateTime).getTime();
      if (sendTime <= currentGroupedRequest.arrivalTime) {
        currentGroupedRequest.resources.push(entry);
        currentGroupedRequest.arrivalTime = sendTime + TIMESTAMP_100_MS;
      } else {
        groupedRequests.push(currentGroupedRequest);
        currentGroupedRequest = createNewGroup(entry);
      }
    }
  });

  if (currentGroupedRequest) {
    groupedRequests.push(currentGroupedRequest);
  }

  return groupedRequests;
};
