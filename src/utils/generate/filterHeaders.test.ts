import { type Header } from "@src/interfaces/Entry";
import { removeHeadersFromRequest } from "@src/utils/generate/filterHeaders";

const HEADERS: Header[] = [
  { name: "coOkie", value: "hello" },
  { name: "coNtent-lengTh", value: "coucou" },
  { name: "hoSt", value: "test" },
  { name: "coNnection", value: "keep-alive" },
  { name: "connecTion", value: "plip" },
  { name: "reFerer", value: "plop" },
  { name: "cache-control", value: "cacheee" },
  { name: "if-match", value: "ifM" },
  { name: "if-modified-since", value: "modsince" },
  { name: "if-none-match", value: "ifno" },
  { name: "if-unmodified-since", value: "ius" },
  { name: "test", value: "test2" },
  { name: ":test", value: "test2" },
];

const EXPECTED: Header[] = [
  { name: "connecTion", value: "plip" },
  { name: "test", value: "test2" },
];

const EXPECTED2: Header[] = [
  { name: "connecTion", value: "plip" },
  { name: "reFerer", value: "plop" },
  { name: "test", value: "test2" },
];

const EXPECTED3: Header[] = [
  { name: "connecTion", value: "plip" },
  { name: "cache-control", value: "cacheee" },
  { name: "if-match", value: "ifM" },
  { name: "if-modified-since", value: "modsince" },
  { name: "if-none-match", value: "ifno" },
  { name: "if-unmodified-since", value: "ius" },
  { name: "test", value: "test2" },
];

describe("removeHeadersFromRequest", () => {
  it("should remove all headers", () => {
    expect(removeHeadersFromRequest(HEADERS, true, true)).toEqual(EXPECTED);
  });
  it("should remove all headers except referer", () => {
    expect(removeHeadersFromRequest(HEADERS, false, true)).toEqual(EXPECTED2);
  });
  it("should remove all headers except cache", () => {
    expect(removeHeadersFromRequest(HEADERS, true, false)).toEqual(EXPECTED3);
  });
});