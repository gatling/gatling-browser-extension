import {
  type Header,
  type RebasedGroupedEntry,
  type SimulationWithBodies,
  type SimulationWithDefaultRequestHeaders,
} from "@src/interfaces/Entry";
import { getKeyWithHighestValue } from "@src/utils/typescript";

const getPossibleHeaderNames = (
  groupedEntries: RebasedGroupedEntry[]
): string[] => {
  const possibleHeaderNames = new Set<string>();

  groupedEntries.forEach((entries) => {
    entries.root.request.headers.forEach((header) =>
      possibleHeaderNames.add(header.name)
    );
    entries.resources.forEach((resources) =>
      resources.request.headers.forEach((header) =>
        possibleHeaderNames.add(header.name)
      )
    );
  });
  return Array.from(possibleHeaderNames.values());
};

const isAvailableOnEveryRequest = (
  groupedEntries: RebasedGroupedEntry[],
  headerName: string
): boolean => {
  for (const entries of groupedEntries) {
    const rootRequestHeaderNames = entries.root.request.headers.map(
      (header) => header.name
    );

    if (!rootRequestHeaderNames.includes(headerName)) {
      return false;
    }

    for (const resources of entries.resources) {
      const resourceRequestHeaderNames = resources.request.headers.map(
        (header) => header.name
      );

      if (!resourceRequestHeaderNames.includes(headerName)) {
        return false;
      }
    }
  }

  return true;
};

export const getHeaderNamesAvailableOnAllRequest = (
  groupedEntries: RebasedGroupedEntry[]
): string[] =>
  getPossibleHeaderNames(groupedEntries).filter((headerName) =>
    isAvailableOnEveryRequest(groupedEntries, headerName)
  );

export const getDefaultHeaderCount = (
  headerName: string,
  headers: Header[]
): Map<string, number> =>
  headers.reduce((acc: Map<string, number>, { name, value }: Header) => {
    if (name === headerName) {
      return acc.has(value)
        ? acc.set(value, acc.get(value)! + 1)
        : acc.set(value, 1);
    } else {
      return acc;
    }
  }, new Map());

const computeDefaultHeader = (
  header: string,
  groupedEntries: RebasedGroupedEntry[]
): [string, string] => {
  const rootHeaders = groupedEntries.flatMap(
    (entry) => entry.root.request.headers
  );
  const resourcesHeaders = groupedEntries.flatMap((e) =>
    e.resources.flatMap((r) => r.request.headers)
  );
  const defaultHeaderCount = getDefaultHeaderCount(header, [
    ...rootHeaders,
    ...resourcesHeaders,
  ]);
  const defaultHeader = getKeyWithHighestValue(defaultHeaderCount);
  return [header, defaultHeader];
};

export const computeDefaultHeaders = (
  groupedEntries: RebasedGroupedEntry[],
  headerNamesAvailableOnAllRequest: string[]
): Map<string, string> => {
  return new Map(
    headerNamesAvailableOnAllRequest.map((header) =>
      computeDefaultHeader(header, groupedEntries)
    )
  );
};

export const removeDefaultHeaders = (
  headers: Header[],
  defaultRequestHeadersKeys: string[],
  defaultRequestHeaders: Map<string, string>
): Header[] =>
  headers.filter(
    (header) =>
      !defaultRequestHeadersKeys.includes(header.name) ||
      defaultRequestHeaders.get(header.name) !== header.value
  );

export const removeDefaultHeadersOnRequests = (
  groupedEntries: RebasedGroupedEntry[],
  defaultRequestHeaders: Map<string, string>
): RebasedGroupedEntry[] => {
  const defaultRequestHeadersKeys = Array.from(defaultRequestHeaders.keys());
  return groupedEntries.map((entry) => {
    entry.root.request.headers = removeDefaultHeaders(
      entry.root.request.headers,
      defaultRequestHeadersKeys,
      defaultRequestHeaders
    );
    entry.resources = entry.resources.map((resource) => {
      resource.request.headers = removeDefaultHeaders(
        resource.request.headers,
        defaultRequestHeadersKeys,
        defaultRequestHeaders
      );
      return resource;
    });
    return entry;
  });
};

export const handleDefaultRequestHeaders = ({
  groupedEntries,
  ...simulation
}: SimulationWithBodies): SimulationWithDefaultRequestHeaders => {
  const headerNamesAvailableOnAllRequest =
    getHeaderNamesAvailableOnAllRequest(groupedEntries);

  const defaultRequestHeaders = computeDefaultHeaders(
    groupedEntries,
    headerNamesAvailableOnAllRequest
  );

  const groupedEntriesWithoutDefaultHeaders = removeDefaultHeadersOnRequests(
    groupedEntries,
    defaultRequestHeaders
  );

  return {
    ...simulation,
    groupedEntries: groupedEntriesWithoutDefaultHeaders,
    defaultRequestHeaders,
  };
};
