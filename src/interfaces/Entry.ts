export type Entry = chrome.devtools.network.Request;

export type SimpleEntry = Omit<Entry, "getContent">;

export type RebasedEntry = SimpleEntry & {
  request: Entry & { origin?: string };
};

export interface GroupedItem<T> {
  sendTime: number;
  arrivalTime: number;
  root: T;
  resources: T[];
}

export type GroupedEntry = GroupedItem<SimpleEntry>;

export type RebasedGroupedEntry = GroupedItem<RebasedEntry>;

export interface Simulation {
  baseUrl: string;
  commonUrls: Map<string, string>;
  groupedEntries: RebasedGroupedEntry[];
}
