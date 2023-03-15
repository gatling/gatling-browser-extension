export type Entry = chrome.devtools.network.Request;

export type SimpleEntry = Omit<Entry, "getContent">;

export interface GroupedEntry {
  sendTime: number;
  arrivalTime: number;
  root: SimpleEntry;
  resources: SimpleEntry[];
}

export interface Simulation {
  baseUrl: string;
  groupedRequests: GroupedEntry[];
}
