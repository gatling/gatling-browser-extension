import { type SimpleEntry, type Header } from "@src/interfaces/Entry";

const toLowerCase = ({ name, value }: Header): Header => ({
  name: name.toLowerCase(),
  value,
});

const sortByName = (a: Header, b: Header): number =>
  a.name.localeCompare(b.name);

export const lowerCaseHeaderNames = (entries: SimpleEntry[]): SimpleEntry[] =>
  entries.map((entry) => {
    entry.request.headers = entry.request.headers
      .map(toLowerCase)
      .sort(sortByName);
    entry.response.headers = entry.response.headers.map(toLowerCase);
    return entry;
  });
