import cloneDeep from "lodash-es/cloneDeep";

import { type SimpleEntry } from "@src/interfaces/Entry";
import { lowerCaseHeaderNames } from "@src/utils/generate/lowerCaseHeaderName";

const RESPONSE = {
  status: 200,
  statusText: "200 OK",
  httpVersion: "2",
  cookies: [],
  headers: [
    {
      name: "Content-Type",
      value: "application/json",
    },
  ],
  content: {
    size: 0,
    mimeType: "application/json",
  },
  redirectURL: "",
  headersSize: 2,
  bodySize: -1,
};

const RESPONSE2 = {
  status: 200,
  statusText: "200 OK",
  httpVersion: "2",
  cookies: [],
  headers: [
    {
      value: "text/plain",
      name: "ContEnt-Type",
    },
  ],
  content: {
    size: 0,
    mimeType: "text/html",
  },
  redirectURL: "",
  headersSize: 2,
  bodySize: -1,
};

const ENTRY1: SimpleEntry = {
  request: {
    method: "GET",
    url: "/",
    httpVersion: "2",
    cookies: [],
    headers: [
      { name: "Content-Type", value: "application/x-www-form-urlencoded" },
      { name: "TeSt", value: "hello" },
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
};

const ENTRY2: SimpleEntry = {
  request: {
    method: "GET",
    url: "/",
    httpVersion: "2",
    cookies: [],
    headers: [
      { name: "conTent-type", value: "application/json" },
      { name: "tEst", value: "world" },
      { name: "fOo", value: "bar" },
    ],
    headersSize: 25,
    bodySize: 12,
    queryString: [],
  },
  response: RESPONSE2,
  cache: {},
  startedDateTime: "start",
  time: 22,
  timings: {
    wait: 22,
    receive: 0,
  },
};

const EXPECTED_ENTRY1: SimpleEntry = cloneDeep(ENTRY1);
EXPECTED_ENTRY1.request.headers = [
  { name: "content-type", value: "application/x-www-form-urlencoded" },
  { name: "test", value: "hello" },
];
EXPECTED_ENTRY1.response.headers = [
  {
    name: "content-type",
    value: "application/json",
  },
];

const EXPECTED_ENTRY2: SimpleEntry = cloneDeep(ENTRY2);
EXPECTED_ENTRY2.request.headers = [
  { name: "content-type", value: "application/json" },
  { name: "foo", value: "bar" },
  { name: "test", value: "world" },
];
EXPECTED_ENTRY2.response.headers = [
  {
    name: "content-type",
    value: "text/plain",
  },
];

describe("lowerCaseHeaderNames", () => {
  it("should return headers with lowercase names", () => {
    expect(lowerCaseHeaderNames([ENTRY1, ENTRY2])).toEqual([
      EXPECTED_ENTRY1,
      EXPECTED_ENTRY2,
    ]);
  });
});
