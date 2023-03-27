import { Header } from "@src/interfaces/Entry";

export const isCookie = (header: Header): boolean =>
  "cookie" === header.name.toLowerCase();

export const isContentLength = (header: Header): boolean =>
  "content-length" === header.name.toLowerCase();

export const isHost = (header: Header): boolean =>
  "host" === header.name.toLowerCase();

export const isConnectionTrue = (header: Header): boolean =>
  "connection" === header.name.toLowerCase() && header.value === "keep-alive";

export const isReferer = (header: Header): boolean =>
  "referer" === header.name.toLowerCase();

const CACHE_HEADERS = [
  "cache-control",
  "if-match",
  "if-modified-since",
  "if-none-match",
  "if-unmodified-since",
];

export const isCacheHeader = (header: Header): boolean =>
  CACHE_HEADERS.includes(header.name.toLowerCase());

export const isHttpPseudoHeader = (header: Header): boolean =>
  header.name.startsWith(":");
