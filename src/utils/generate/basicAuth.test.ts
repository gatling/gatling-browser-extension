import cloneDeep from "lodash-es/cloneDeep";

import {
  type AuthenticatedSimulation,
  type Simulation,
} from "@src/interfaces/Entry";
import { EXPECTED_SIMULATION } from "@src/utils/generate/url.test";

import { handleBasicAuth } from "./basicAuth";

const simulationWithAuthorization: Simulation = cloneDeep(EXPECTED_SIMULATION);
simulationWithAuthorization.groupedEntries[0].root.request.headers = [
  ...simulationWithAuthorization.groupedEntries[0].root.request.headers,
  { name: "authorization", value: "Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==" },
  { name: "authorization", value: "fake basic auth" },
];

const EXPECTED_WITH_CREDENTIALS: AuthenticatedSimulation = {
  ...EXPECTED_SIMULATION,
  basicAuth: { username: "Aladdin", password: "open sesame" },
};

const simulationWith2Authorizations: Simulation =
  cloneDeep(EXPECTED_SIMULATION);
simulationWith2Authorizations.groupedEntries[0].root.request.headers = [
  ...simulationWith2Authorizations.groupedEntries[0].root.request.headers,
  { name: "authorization", value: "Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==" },
  { name: "authorization", value: "Basic other" },
];

describe("handleBasicAuth", () => {
  it("should do nothing if no authorization header", () => {
    expect(handleBasicAuth(EXPECTED_SIMULATION)).toEqual(EXPECTED_SIMULATION);
  });
  it("should add basic auth and remove header", () => {
    expect(handleBasicAuth(simulationWithAuthorization)).toEqual(
      EXPECTED_WITH_CREDENTIALS
    );
  });
  it("should do nothing if 2 authorizations header", () => {
    expect(handleBasicAuth(simulationWith2Authorizations)).toEqual(
      simulationWith2Authorizations
    );
  });
});
