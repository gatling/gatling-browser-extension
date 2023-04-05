import { type Header } from "@src/interfaces/Entry";
import { removeHeadersFromRequest } from "@src/utils/generate/filterHeaders";

const HEADERS: Header[] = [
  {name: "cookie", value: "hello"},
  {name: "content-length", value: "coucou"},
  {name: "host", value: "test"},
  {name: "connection", value: "keep-alive"},
  {name: "connection", value: "plip"},
  {name: "referer", value: "plop"},
  {name: "cache-control", value: "cacheee"},
  {name: "if-match", value: "ifM"},
  {name: "if-modified-since", value: "modsince"},
  {name: "if-none-match", value: "ifno"},
  {name: "if-unmodified-since", value: "ius"},
  {name: "test", value: "test2"},
  {name: ":test", value: "test2"},
];

const EXPECTED: Header[] = [
  {name: "connection", value: "plip"},
  {name: "test", value: "test2"},
];

const EXPECTED2: Header[] = [
  {name: "connection", value: "plip"},
  {name: "referer", value: "plop"},
  {name: "test", value: "test2"},
];

const EXPECTED3: Header[] = [
  {name: "connection", value: "plip"},
  {name: "cache-control", value: "cacheee"},
  {name: "if-match", value: "ifM"},
  {name: "if-modified-since", value: "modsince"},
  {name: "if-none-match", value: "ifno"},
  {name: "if-unmodified-since", value: "ius"},
  {name: "test", value: "test2"},
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
