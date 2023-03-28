import cloneDeep from "lodash-es/cloneDeep";

import {
  type AuthenticatedSimulation,
  type Credentials,
  type Header,
  type RebasedGroupedEntry,
  type Simulation,
} from "@src/interfaces/Entry";

export const isAuthorization = (header: Header): boolean =>
  "authorization" === header.name.toLowerCase();

export const isBasicAuth = (header: Header): boolean =>
  isAuthorization(header) && header.value.startsWith("Basic ");

export const getBasicAuthList = (headers: Header[]): string[] =>
  headers.filter(isBasicAuth).map((header) => header.value);

const collectBasicAuthList = (entry: RebasedGroupedEntry): string[] => {
  const rootBasicAuthList = getBasicAuthList(entry.root.request.headers);
  const resourcesBasicAuthList = entry.resources.flatMap((resource) =>
    getBasicAuthList(resource.request.headers)
  );
  return [...rootBasicAuthList, ...resourcesBasicAuthList].filter(Boolean);
};

const filterBasicAuth = (headers: Header[]): Header[] =>
  headers.filter((header) => !isAuthorization(header));

export const removeBasicAuthHeaders = (
  entry: RebasedGroupedEntry
): RebasedGroupedEntry => {
  entry.root.request.headers = filterBasicAuth(entry.root.request.headers);
  entry.resources = entry.resources.map((resource) => {
    resource.request.headers = filterBasicAuth(resource.request.headers);
    return resource;
  });
  return entry;
};

export const computeCredentials = (value: string): Credentials => {
  const decodedCredentials = atob(value.split(" ")[1]);
  const [username, password] = decodedCredentials.split(":");
  return { username, password };
};

export const handleBasicAuth = (
  simulation: Simulation
): AuthenticatedSimulation => {
  const authorizationList =
    simulation.groupedEntries.flatMap(collectBasicAuthList);
  const authorizationSet = new Set(authorizationList);

  if (authorizationSet.size === 1) {
    const groupedEntriesWithoutBasicAuthHeaders = cloneDeep(
      simulation.groupedEntries
    ).map(removeBasicAuthHeaders);

    return {
      ...simulation,
      groupedEntries: groupedEntriesWithoutBasicAuthHeaders,
      basicAuth: computeCredentials(authorizationSet.values().next().value),
    };
  } else {
    return simulation;
  }
};
