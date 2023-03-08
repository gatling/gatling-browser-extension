export type Request = chrome.devtools.network.Request;

export type SimpleRequest = Omit<Request, "getContent">;

export interface GroupedRequest extends Request {
  children?: GroupedRequest[]
}
