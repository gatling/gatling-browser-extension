import { Request } from "@src/interfaces/Request";
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

export const groupRequests = (entries: Request) => {

}
