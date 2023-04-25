import { type Header, type RebasedGroupedEntry } from "@src/interfaces/Entry";

import {
  computeDefaultHeaders,
  removeDefaultHeaders,
  getHeaderNamesAvailableOnAllRequest,
  removeDefaultHeadersOnRequests,
} from "./defaultRequestHeaders";

const RESPONSE = {
  status: 200,
  statusText: "200 OK",
  httpVersion: "2",
  cookies: [],
  headers: [],
  content: {
    size: 0,
    mimeType: "text/html",
  },
  redirectURL: "",
  headersSize: 2,
  bodySize: -1,
};

const ENTRY1: RebasedGroupedEntry = {
  sendTime: 1,
  arrivalTime: 2,
  root: {
    request: {
      method: "GET",
      url: "/",
      httpVersion: "2",
      cookies: [],
      headers: [
        { name: "content-type", value: "application/x-www-form-urlencoded" },
        { name: "test", value: "hello" },
      ],
      headersSize: 25,
      bodySize: 12,
      queryString: [],
    },
    response: RESPONSE,
    cache: {},
    startedDateTime: "start",
    time: 22,
    timings: {
      wait: 22,
      receive: 0,
    },
  },
  resources: [],
};

const ENTRY2: RebasedGroupedEntry = {
  sendTime: 1,
  arrivalTime: 2,
  root: {
    request: {
      method: "GET",
      url: "/",
      httpVersion: "2",
      cookies: [],
      headers: [
        { name: "content-type", value: "application/json" },
        { name: "test", value: "world" },
        { name: "foo", value: "bar" },
      ],
      headersSize: 25,
      bodySize: 12,
      queryString: [],
    },
    response: RESPONSE,
    cache: {},
    startedDateTime: "start",
    time: 22,
    timings: {
      wait: 22,
      receive: 0,
    },
  },
  resources: [
    {
      request: {
        method: "GET",
        url: "/",
        httpVersion: "2",
        cookies: [],
        headers: [
          { name: "content-type", value: "application/json" },
          { name: "test", value: "hello" },
        ],
        headersSize: 25,
        bodySize: 12,
        queryString: [],
      },
      response: RESPONSE,
      cache: {},
      startedDateTime: "start",
      time: 22,
      timings: {
        wait: 22,
        receive: 0,
      },
    },
  ],
};

const HEADER_NAMES: string[] = ["content-type", "test"];

describe("getHeaderNamesAvailableOnAllRequest", () => {
  it("should return header names", () => {
    expect(getHeaderNamesAvailableOnAllRequest([ENTRY1, ENTRY2])).toEqual(
      HEADER_NAMES
    );
  });
});

const DEFAULT_HEADERS: Map<string, string> = new Map([
  ["content-type", "application/json"],
  ["test", "hello"],
]);

describe("computeDefaultHeaders", () => {
  it("should return default headers", () => {
    expect(computeDefaultHeaders([ENTRY1, ENTRY2], HEADER_NAMES)).toEqual(
      DEFAULT_HEADERS
    );
  });
});

const HEADERS: Header[] = [
  { name: "content-type", value: "application/json" },
  { name: "test", value: "hello" },
  { name: "test", value: "world" },
  { name: "foo", value: "foo" },
];

const DEFAULT_HEADER_KEYS: string[] = Array.from(DEFAULT_HEADERS.keys());

const EXPECTED_HEADERS: Header[] = [
  { name: "test", value: "world" },
  { name: "foo", value: "foo" },
];

describe("removeDefaultHeaders", () => {
  it("should return headers without default headers", () => {
    expect(
      removeDefaultHeaders(HEADERS, DEFAULT_HEADER_KEYS, DEFAULT_HEADERS)
    ).toEqual(EXPECTED_HEADERS);
  });
});

const ENTRY1_WITHOUT_DEFAULT_HEADERS: RebasedGroupedEntry = {
  sendTime: 1,
  arrivalTime: 2,
  root: {
    request: {
      method: "GET",
      url: "/",
      httpVersion: "2",
      cookies: [],
      headers: [
        { name: "content-type", value: "application/x-www-form-urlencoded" },
      ],
      headersSize: 25,
      bodySize: 12,
      queryString: [],
    },
    response: RESPONSE,
    cache: {},
    startedDateTime: "start",
    time: 22,
    timings: {
      wait: 22,
      receive: 0,
    },
  },
  resources: [],
};

const ENTRY2_WITHOUT_DEFAULT_HEADERS: RebasedGroupedEntry = {
  sendTime: 1,
  arrivalTime: 2,
  root: {
    request: {
      method: "GET",
      url: "/",
      httpVersion: "2",
      cookies: [],
      headers: [
        { name: "test", value: "world" },
        { name: "foo", value: "bar" },
      ],
      headersSize: 25,
      bodySize: 12,
      queryString: [],
    },
    response: RESPONSE,
    cache: {},
    startedDateTime: "start",
    time: 22,
    timings: {
      wait: 22,
      receive: 0,
    },
  },
  resources: [
    {
      request: {
        method: "GET",
        url: "/",
        httpVersion: "2",
        cookies: [],
        headers: [],
        headersSize: 25,
        bodySize: 12,
        queryString: [],
      },
      response: RESPONSE,
      cache: {},
      startedDateTime: "start",
      time: 22,
      timings: {
        wait: 22,
        receive: 0,
      },
    },
  ],
};

describe("removeDefaultHeadersOnRequests", () => {
  it("should return default headers", () => {
    expect(
      removeDefaultHeadersOnRequests([ENTRY1, ENTRY2], DEFAULT_HEADERS)
    ).toEqual([ENTRY1_WITHOUT_DEFAULT_HEADERS, ENTRY2_WITHOUT_DEFAULT_HEADERS]);
  });
});
