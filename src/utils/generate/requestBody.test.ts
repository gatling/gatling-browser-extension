import {
  type AuthenticatedSimulation,
  type Header,
  type RebasedGroupedEntry,
  type SimulationWithBodies,
} from "@src/interfaces/Entry";

import {
  handleRequestBodies,
  removeContentTypeIfFormData,
} from "./requestBody";

const HEADERS: Header[] = [
  {
    name: "contenT-type",
    value: "application/x-www-form-urlencodeD",
  },
  {
    name: "testName",
    value: "testValue",
  },
];

const EXPECTED: Header[] = [
  {
    name: "testName",
    value: "testValue",
  },
];

describe("removeContentTypeIfFormData", () => {
  it("should remove x-www-form-urlencoded header", () => {
    expect(removeContentTypeIfFormData(HEADERS)).toEqual(EXPECTED);
  });
});

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

const SIMULATION: AuthenticatedSimulation = {
  baseUrl: "https://gatling.io",
  commonUrls: new Map(),
  groupedEntries: [ENTRY1],
};

const EXPECTED_ENTRY1: RebasedGroupedEntry = {
  ...ENTRY1,
  root: { ...ENTRY1.root, request: { ...ENTRY1.root.request, headers: [] } },
};

const EXPECTED_SIMULATION: SimulationWithBodies = {
  baseUrl: "https://gatling.io",
  commonUrls: new Map(),
  groupedEntries: [EXPECTED_ENTRY1],
  elFileBodies: new Map(),
  stringBodies: new Map(),
  rawFileBodies: new Map(),
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
      headers: [{ name: "content-type", value: "application/json" }],
      headersSize: 25,
      bodySize: 12,
      queryString: [],
      postData: {
        text: "test",
        mimeType: "application/json",
      },
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

const SIMULATION2: AuthenticatedSimulation = {
  baseUrl: "https://gatling.io",
  commonUrls: new Map(),
  groupedEntries: [ENTRY2],
};

const EXPECTED_ENTRY2: RebasedGroupedEntry = {
  ...ENTRY2,
  root: {
    ...ENTRY2.root,
    request: { ...ENTRY2.root.request, stringBodyId: 1 },
  },
};

const EXPECTED_SIMULATION2: SimulationWithBodies = {
  baseUrl: "https://gatling.io",
  commonUrls: new Map(),
  groupedEntries: [EXPECTED_ENTRY2],
  elFileBodies: new Map(),
  stringBodies: new Map([[1, "test"]]),
  rawFileBodies: new Map(),
};

const EL_FILE_BODY =
  "aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmm";

const ENTRY3: RebasedGroupedEntry = {
  sendTime: 1,
  arrivalTime: 2,
  root: {
    request: {
      method: "GET",
      url: "/",
      httpVersion: "2",
      cookies: [],
      headers: [{ name: "content-type", value: "text/plip" }],
      headersSize: 25,
      bodySize: 12,
      queryString: [],
      postData: {
        text: EL_FILE_BODY,
        mimeType: "text/plop",
      },
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

const SIMULATION3: AuthenticatedSimulation = {
  baseUrl: "https://gatling.io",
  commonUrls: new Map(),
  groupedEntries: [ENTRY3],
};

const EXPECTED_ENTRY3: RebasedGroupedEntry = {
  ...ENTRY3,
  root: {
    ...ENTRY3.root,
    request: { ...ENTRY3.root.request, elFileBodyId: 1 },
  },
};

const EXPECTED_SIMULATION3: SimulationWithBodies = {
  baseUrl: "https://gatling.io",
  commonUrls: new Map(),
  groupedEntries: [EXPECTED_ENTRY3],
  elFileBodies: new Map([[1, EL_FILE_BODY]]),
  stringBodies: new Map(),
  rawFileBodies: new Map(),
};

const RAW_FILE_BODY = "abcde";
const RAW_FILE_BODY2 = "zzz";

const ENTRY4: RebasedGroupedEntry = {
  sendTime: 1,
  arrivalTime: 2,
  root: {
    request: {
      method: "GET",
      url: "/",
      httpVersion: "2",
      cookies: [],
      headers: [{ name: "content-type", value: "test" }],
      headersSize: 25,
      bodySize: 12,
      queryString: [],
      postData: {
        text: RAW_FILE_BODY,
        mimeType: "text/plop",
      },
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
        headers: [{ name: "content-type", value: "aaa" }],
        headersSize: 25,
        bodySize: 12,
        queryString: [],
        postData: {
          text: RAW_FILE_BODY2,
          mimeType: "text/plop",
        },
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

const SIMULATION4: AuthenticatedSimulation = {
  baseUrl: "https://gatling.io",
  commonUrls: new Map(),
  groupedEntries: [ENTRY4],
};

const EXPECTED_ENTRY4: RebasedGroupedEntry = {
  ...ENTRY4,
  root: {
    ...ENTRY4.root,
    request: { ...ENTRY4.root.request, rawFileBodyId: 1 },
  },
};

const EXPECTED_SIMULATION4: SimulationWithBodies = {
  baseUrl: "https://gatling.io",
  commonUrls: new Map(),
  groupedEntries: [EXPECTED_ENTRY4],
  elFileBodies: new Map(),
  stringBodies: new Map(),
  rawFileBodies: new Map([
    [1, RAW_FILE_BODY],
    [2, RAW_FILE_BODY2],
  ]),
};

describe("handleRequestBodies", () => {
  it("should return simulation without application/x-www-form-urlencoded content-type", () => {
    expect(handleRequestBodies(SIMULATION)).toEqual(EXPECTED_SIMULATION);
  });
  it("should return simulation with stringBody", () => {
    expect(handleRequestBodies(SIMULATION2)).toEqual(EXPECTED_SIMULATION2);
  });
  it("should return simulation with elFileBody", () => {
    expect(handleRequestBodies(SIMULATION3)).toEqual(EXPECTED_SIMULATION3);
  });
  it("should return simulation with rawFileBodies", () => {
    expect(handleRequestBodies(SIMULATION4)).toEqual(EXPECTED_SIMULATION4);
  });
});
