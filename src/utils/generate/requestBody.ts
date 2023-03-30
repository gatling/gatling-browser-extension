import {
  type AuthenticatedSimulation,
  type GroupedItem,
  type Header,
  type RebasedEntry,
  type RebasedGroupedEntry,
  type SimulationWithBodies,
} from "@src/interfaces/Entry";
import {
  isContentTypeFormUrlEncoded,
  isContentTypeTextBase,
} from "@src/utils/generate/header";

export const removeContentTypeIfFormData = (headers: Header[]): Header[] =>
  headers.filter((header) => !isContentTypeFormUrlEncoded(header));

export const removeFormDataHeaders = (
  entries: RebasedGroupedEntry
): GroupedItem<RebasedEntry> => {
  entries.root.request.headers = removeContentTypeIfFormData(
    entries.root.request.headers
  );
  entries.resources.map((resources) => {
    resources.request.headers = removeContentTypeIfFormData(
      resources.request.headers
    );
    return resources;
  });
  return entries;
};

export const hasContentTypeTextBase = (headers: Header[]): boolean =>
  headers.find(isContentTypeTextBase) !== undefined;

export const extractBodies = (
  simulation: AuthenticatedSimulation
): SimulationWithBodies => {
  const elFileBodies: Map<number, string> = new Map();
  const rawFileBodies: Map<number, string> = new Map();
  const stringBodies: Map<number, string> = new Map();

  const extractRequestBodies = (entry: RebasedEntry): RebasedEntry => {
    if (entry.request.postData?.text) {
      if (hasContentTypeTextBase(entry.request.headers)) {
        const bodyLength = entry.request.postData?.text?.length || 0;
        if (bodyLength <= 100) {
          const id = stringBodies.size + 1;
          stringBodies.set(id, entry.request.postData.text);
          entry.request.stringBodyId = id;
        } else {
          const id = elFileBodies.size + 1;
          elFileBodies.set(id, entry.request.postData.text);
          entry.request.elFileBodyId = id;
        }
      } else {
        const id = rawFileBodies.size + 1;
        rawFileBodies.set(id, entry.request.postData.text);
        entry.request.rawFileBodyId = id;
      }
    }

    return entry;
  };

  simulation.groupedEntries = simulation.groupedEntries.map((entry) => {
    entry.root = extractRequestBodies(entry.root);
    entry.resources = entry.resources.map(extractRequestBodies);
    return entry;
  });

  return { ...simulation, elFileBodies, rawFileBodies, stringBodies };
};

export const handleRequestBodies = (
  simulation: AuthenticatedSimulation
): SimulationWithBodies => {
  simulation.groupedEntries = simulation.groupedEntries.map(
    removeFormDataHeaders
  );
  return extractBodies(simulation);
};
