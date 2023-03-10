import { GroupedRequest, SimpleRequest } from "@src/interfaces/Request";
// Step #3: group requests by blocks
// We need to determine what’s a root request and what is a resources.
// As we have no way to tell exactly, we use an empirical (hence non-perfect) algorithm:
// - make the current group end as first request end timestamp +  100ms
// - move to the next request
//   - if this request start is <= current group end, this request belongs to the group
//     - add it to the group
//     - move the current group end to this request’s end + 100ms
//
//   - else, this request is the start of a new group
// - move to the next request and so on
// TODO

export const TIMESTAMP_100_MS = 250;

const createNewGroup = (entry: SimpleRequest): GroupedRequest => {
  const sendTime = new Date(entry.startedDateTime).getTime();
  return {
    root: entry,
    sendTime: sendTime,
    arrivalTime: sendTime + TIMESTAMP_100_MS,
    resources: []
  }
};

export const groupRequests = (entries: SimpleRequest[]): GroupedRequest[] => {
  const groupedRequests: GroupedRequest[] = [];
  let currentGroupedRequest: GroupedRequest | null = null;

  entries.forEach(entry => {
    if (currentGroupedRequest === null) {
      console.log("currentGroupedRequest === null")
      currentGroupedRequest = createNewGroup(entry);
    } else {
      console.log("currentGroupedRequest !== null")
      const sendTime = new Date(entry.startedDateTime).getTime();
      console.log("sendTime:", sendTime)
      console.log("currentGroupedRequest.arrivalTime:", currentGroupedRequest.arrivalTime)
      if (sendTime <= currentGroupedRequest.arrivalTime) {
        console.log("sendTime <= currentGroupedRequest.arrivalTime")
        currentGroupedRequest.resources.push(entry)
        currentGroupedRequest.arrivalTime = sendTime + TIMESTAMP_100_MS
      } else {
        console.log("else else")
        groupedRequests.push(currentGroupedRequest)
        currentGroupedRequest = createNewGroup(entry);
      }
    }
  })

  if (currentGroupedRequest) {
    groupedRequests.push(currentGroupedRequest)
  }

  return groupedRequests;
}
