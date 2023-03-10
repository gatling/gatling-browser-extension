export type Request = chrome.devtools.network.Request;

export type SimpleRequest = Omit<Request, "getContent">;

export interface GroupedRequest {
  sendTime: number;
  arrivalTime: number;
  root: SimpleRequest;
  resources: SimpleRequest[]
}
