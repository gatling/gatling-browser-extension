import cloneDeep from "lodash-es/cloneDeep";
import isEqual from "lodash-es/isEqual";

import {
  type Header,
  type RebasedEntry,
  type SimulationsWithCommonRequestHeaders,
  type SimulationWithDefaultRequestHeaders,
} from "@src/interfaces/Entry";

export const handleRequestGroup = (
  entry: RebasedEntry,
  commonRequestHeaders: Map<number, Header[]>
): RebasedEntry => {
  for (const [key, value] of Array.from(commonRequestHeaders)) {
    if (isEqual(entry.request.headers, value)) {
      entry.request.headersGroupId = key;
      return entry;
    }
  }

  const id = commonRequestHeaders.size + 1;
  entry.request.headersGroupId = id;
  commonRequestHeaders.set(id, entry.request.headers);
  return entry;
};

export const handleRequestHeadersGroups = (
  simulation: SimulationWithDefaultRequestHeaders
): SimulationsWithCommonRequestHeaders => {
  const commonRequestHeaders = new Map<number, Header[]>();

  const groupedEntries = cloneDeep(simulation.groupedEntries).map((entry) => {
    entry.root = handleRequestGroup(entry.root, commonRequestHeaders);
    entry.resources = entry.resources.map((resource) =>
      handleRequestGroup(resource, commonRequestHeaders)
    );
    return entry;
  });

  return {...simulation, commonRequestHeaders, groupedEntries};
};
