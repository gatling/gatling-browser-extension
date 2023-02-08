export interface HarLegacy {
    log: Log;
}

export interface Creator {
  name: string;
  version: string;
}

interface Log {
  creator: Creator;
  version: string;
  entries: Entry[];
}

interface Entry {
  startedDateTime: string;
  time?: number;
  timings?: Timings;
  request: Request;
  response: Response;
}

interface Request {
  httpVersion?: string;
  method: string;
  url: string;
  headers: Header[];
  postData: RequestPostData | null | undefined;
}

interface Header {
  name: string;
  value?: string;
}

export interface RequestPostData {
  mimeType?: string;
  text?: string;
  params?: RequestPostParam[];
}

interface RequestPostParam {
  name: string;
  value: string;
}

interface Response {
  status: number;
  headers: Header[] | undefined;
  statusText: string;
  content: ResponseContent;
}

interface ResponseContent {
  mimeType?: string;
  encoding?: string;
  text?: string;
  comment?: string | null;
}

interface Timings {
  blocked: number;
  dns: number;
  connect: number;
  ssl: number;
  send: number;
  wait: number;
  receive: number;
}
