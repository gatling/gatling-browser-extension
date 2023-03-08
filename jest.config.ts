import { type Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  rootDir: "src",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!lodash-es|d3|internmap|delaunator|robust-predicates|axios)"],
  moduleNameMapper: {
    "@src(.*)$": "<rootDir>/$1",
    "\\.(css|scss)$": "identity-obj-proxy"
  }
};

export default config;
