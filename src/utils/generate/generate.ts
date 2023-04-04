import { type SimpleEntry } from "@src/interfaces/Entry";
import { type RecorderConfiguration } from "@src/interfaces/RecorderConfiguration";
import { sortRequestsByDate } from "@src/utils/date";
import { handleBasicAuth } from "@src/utils/generate/basicAuth";
import { handleDefaultRequestHeaders } from "@src/utils/generate/defaultRequestHeaders";
import { filterHeaders } from "@src/utils/generate/filterHeaders";
import { groupRequests } from "@src/utils/generate/group";
import { interResources } from "@src/utils/generate/inferHtmlResources";
import { lowerCaseHeaderNames } from "@src/utils/generate/lowerCaseHeaderName";
import { mergeRedirectionRequests } from "@src/utils/generate/redirection";
import { handleRequestBodies } from "@src/utils/generate/requestBody";
import { handleRequestHeadersGroups } from "@src/utils/generate/requestHeadersGroups";
import { addUrls } from "@src/utils/generate/url";

const generate = (
  entries: SimpleEntry[],
  configuration: RecorderConfiguration
): string => {
  // Specifications: https://gatlingcorp.atlassian.net/browse/RND-17

  // Step #0: convert all header names to lower case
  const lowerCaseEntries = lowerCaseHeaderNames(entries);

  // Step #1: sort
  // Sort all requests by start timestamp asc
  const sortedEntries = [...lowerCaseEntries].sort(sortRequestsByDate);

  // Step #2: merge redirects
  // If the followRedirect option is enabled (default behavior), merge redirect chains into 1 single request:
  //   - url, request headers and request body of the first request
  //   - status and response body of the last one
  const filteredRedirection = configuration.http.followRedirect
    ? mergeRedirectionRequests(sortedEntries)
    : sortedEntries;

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
  const groupedEntries = groupRequests(filteredRedirection);

  // Step #4: handle HTML resources
  // Note sure if it’s (easy) feasible.
  // If the inferHtmlResources option is enabled (NON default behavior), filter out requests of resources that are present in the HTML response bodies.
  // This requires being able to parse HTML and CSS payloads. I expect that we won’t be able to implement this at first and might be saved for later.
  const filteredGroupedEntries = configuration.http.inferHtmlResources
    ? interResources(groupedEntries)
    : groupedEntries;

  // Step #5: determine the baseUrl
  // For each requests block, the head is the root request and the tail is the resources.
  // The baseUrl is the most frequent scheme + domain of all the root requests.
  // Store this baseUrl and turn all the requests that start with it into relative ones.
  // Step #6: determine common urls
  // For each remaining requests, extract scheme + domain strings.
  // The urls of these requests will have to be rendered as a String concatenation with a reference to the corresponding url.
  const simulation = addUrls(filteredGroupedEntries);

  // Step #7: Filter out automatic headers
  // Gatling computes automatically some headers, so they must be removed:
  //   - cookie
  //   - content-length
  //   - host
  //   - connection only if its value is true
  //   - referer (only if the automaticReferer option is enabled, which is the default)
  //   - cache-control , if-match, if-modified-since, if-none-match, if-unmodified-since, if-unmodified-since (only if removeCacheHeaders option is enable, which is the default)
  //   - all HTTP/2 pseudo headers: names start with :
  // Beware that header names are case-insensitive.                                                                                                                                              return "";
  const simulationWithFilteredHeaders = filterHeaders(
    simulation,
    configuration.http.automaticReferer,
    configuration.http.removeCacheHeaders
  );

  // Step #8: handle Basic Auth
  // Collect all the authorization (case-insensitive) header values from all the requests that start with Basic.
  // If there’s only one value, remove these headers from the requests and parse and store the credentials.
  const authenticatedSimulation = handleBasicAuth(
    simulationWithFilteredHeaders
  );

  // Step #9: handle request bodies
  // In the presence of request bodies, the content-type header should be present.
  //   - If its value is application/x-www-form-urlencoded
  //     - remove the content-type header
  //     - code the request body into (key, value) pairs
  //   - If the value is text based (starts with text/ or is application/json or application/xhtml+xml or application/xml)
  //     - if the text length is 100 or less, generate a StringBody
  //     - otherwise, dump the content into a file and generate a ElFileBody
  //   - otherwise dump the content into a file and generate a RawFileBody
  const simulationWithBodies = handleRequestBodies(authenticatedSimulation);

  // Step #10: determine default request headers
  // Determine the header names that are available on all the requests.
  // For each of these header names, determine the most frequent value.
  // Store these header (name, value) pairs and remove them from all the requests (meaning that headers with a different value will remain)
  const simulationWithDefaultHeaders =
    handleDefaultRequestHeaders(simulationWithBodies);

  // Step #11: compute request headers groups
  // Collect identical header groups and sort them by first occurrence.
  // Make each request point to its corresponding group.
  const simulationWithRequestHeadersGroups = handleRequestHeadersGroups(
    simulationWithDefaultHeaders
  );

  return "";
};
