export type Entry = chrome.devtools.network.Request;

export type SimpleEntry = Omit<Entry, "getContent">;

export interface Credentials {
  username: string;
  password: string;
}

export type RebasedEntry = SimpleEntry & {
  request: {
    origin?: string;
    rawFileBodyId?: number;
    elFileBodyId?: number;
    stringBodyId?: number;
    headersGroupId?: number;
  };
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

export interface AuthenticatedSimulation extends Simulation {
  basicAuth?: Credentials;
}

export interface SimulationWithBodies extends AuthenticatedSimulation {
  elFileBodies: Map<number, string>;
  rawFileBodies: Map<number, string>;
  stringBodies: Map<number, string>;
}

export interface SimulationWithDefaultRequestHeaders
  extends SimulationWithBodies {
  defaultRequestHeaders: Map<string, string>;
}

export interface SimulationsWithCommonRequestHeaders
  extends SimulationWithDefaultRequestHeaders {
  commonRequestHeaders: Map<number, Header[]>;
}

export interface Header {
  name: string;
  value: string;
}
