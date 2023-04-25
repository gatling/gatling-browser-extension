import cloneDeep from "lodash-es/cloneDeep";

import {
  type Header,
  type RebasedGroupedEntry,
  type SimulationsWithCommonRequestHeaders,
  type SimulationWithDefaultRequestHeaders,
} from "@src/interfaces/Entry";
import { handleRequestHeadersGroups } from "@src/utils/generate/requestHeadersGroups";

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
        { name: "foo", value: "bar" },
        { name: "test", value: "world" },
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
    {
      request: {
        method: "GET",
        url: "/",
        httpVersion: "2",
        cookies: [],
        headers: [
          { name: "content-type", value: "text/plain" },
          { name: "test", value: "world" },
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

const ENTRY3: RebasedGroupedEntry = {
  sendTime: 1,
  arrivalTime: 2,
  root: {
    request: {
      method: "GET",
      url: "/",
      httpVersion: "2",
      cookies: [],
      headers: [
        { name: "content-type", value: "text/plain" },
        { name: "test", value: "world" },
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

const SIMULATION: SimulationWithDefaultRequestHeaders = {
  baseUrl: "https://gatling.io",
  commonUrls: new Map(),
  defaultRequestHeaders: new Map(),
  elFileBodies: new Map(),
  groupedEntries: [ENTRY1, ENTRY2, ENTRY3],
  rawFileBodies: new Map(),
  stringBodies: new Map(),
};

const HEADERS_GROUP_1: Header[] = [
  { name: "content-type", value: "application/json" },
  { name: "test", value: "hello" },
];

const HEADERS_GROUP_2: Header[] = [
  { name: "content-type", value: "application/json" },
  { name: "foo", value: "bar" },
  { name: "test", value: "world" },
];

const HEADERS_GROUP_3: Header[] = [
  { name: "content-type", value: "text/plain" },
  { name: "test", value: "world" },
];

const EXPECTED_ENTRY1: RebasedGroupedEntry = cloneDeep(ENTRY1);
EXPECTED_ENTRY1.root.request.headersGroupId = 1;

const EXPECTED_ENTRY2: RebasedGroupedEntry = cloneDeep(ENTRY2);
EXPECTED_ENTRY2.root.request.headersGroupId = 2;
EXPECTED_ENTRY2.resources[0].request.headersGroupId = 1;
EXPECTED_ENTRY2.resources[1].request.headersGroupId = 3;

const EXPECTED_ENTRY3: RebasedGroupedEntry = cloneDeep(ENTRY3);
EXPECTED_ENTRY3.root.request.headersGroupId = 3;

const EXPECTED_SIMULATION: SimulationsWithCommonRequestHeaders = {
  baseUrl: "https://gatling.io",
  commonRequestHeaders: new Map([
    [1, HEADERS_GROUP_1],
    [2, HEADERS_GROUP_2],
    [3, HEADERS_GROUP_3],
  ]),
  commonUrls: new Map(),
  defaultRequestHeaders: new Map(),
  elFileBodies: new Map(),
  groupedEntries: [EXPECTED_ENTRY1, EXPECTED_ENTRY2, EXPECTED_ENTRY3],
  rawFileBodies: new Map(),
  stringBodies: new Map(),
};

describe("handleRequestHeadersGroups", () => {
  it("should return simulation with commons request headers", () => {
    expect(handleRequestHeadersGroups(SIMULATION)).toEqual(EXPECTED_SIMULATION);
  });
});
