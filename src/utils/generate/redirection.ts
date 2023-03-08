import { type SimpleRequest } from "@src/interfaces/Request";
import { isRedirection } from "@src/utils/generate/http";

export const groupRedirectionRequests = (entries: SimpleRequest[]): SimpleRequest[][] => {

  const mergedEntries: SimpleRequest[][] = [];
  let redirectionGroup: SimpleRequest[] = []

  entries.forEach((entry) => {
    if (isRedirection(entry.response.status)) {
      redirectionGroup.push(entry)
    } else {
      if (redirectionGroup.length > 0) {
        redirectionGroup.push(entry)
        mergedEntries.push(redirectionGroup);
        redirectionGroup = []
      } else {
        mergedEntries.push([entry])
      }
    }
  })

  return mergedEntries
}

export const mergeRedirectionRequests = (entries: SimpleRequest[]): SimpleRequest[] => {

  const groupedRedirectionRequests = groupRedirectionRequests(entries)

  return groupedRedirectionRequests.map((items) => {
    return {...items[0], response: items[items.length - 1].response}
  })

}
