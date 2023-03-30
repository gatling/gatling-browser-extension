import cloneDeep from "lodash-es/cloneDeep";

import {
  type Header,
  type RebasedGroupedEntry,
  type Simulation,
} from "@src/interfaces/Entry";
import {
  isCacheHeader,
  isConnectionTrue,
  isContentLength,
  isCookie,
  isHost,
  isHttpPseudoHeader,
  isReferer,
} from "@src/utils/generate/header";

export const removeHeadersFromRequest = (
  headers: Header[],
  automaticReferer: boolean,
  removeCacheHeaders: boolean
): Header[] =>
  headers.filter(
    (header) =>
      !isCookie(header) &&
      !isContentLength(header) &&
      !isHost(header) &&
      !isConnectionTrue(header) &&
      (!automaticReferer || !isReferer(header)) &&
      (!removeCacheHeaders || !isCacheHeader(header)) &&
      !isHttpPseudoHeader(header)
  );

export const removeHeaders = (
  groupedEntry: RebasedGroupedEntry,
  automaticReferer: boolean,
  removeCacheHeaders: boolean
): RebasedGroupedEntry => {
  groupedEntry.root.request.headers = removeHeadersFromRequest(
    groupedEntry.root.request.headers,
    automaticReferer,
    removeCacheHeaders
  );

  groupedEntry.resources.map((entry) => {
    entry.request.headers = removeHeadersFromRequest(
      entry.request.headers,
      automaticReferer,
      removeCacheHeaders
    );
    return entry;
  });

  return groupedEntry;
};

export const filterHeaders = (
  simulation: Simulation,
  automaticReferer: boolean,
  removeCacheHeaders: boolean
): Simulation => {
  const clonedSimulation = cloneDeep(simulation);
  clonedSimulation.groupedEntries = clonedSimulation.groupedEntries.map((g) =>
    removeHeaders(g, automaticReferer, removeCacheHeaders)
  );
  return simulation;
};
