import { type Header } from "@src/interfaces/Entry";

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

export const isContentType = (header: Header): boolean =>
  "content-type" === header.name.toLowerCase();

export const isContentTypeFormUrlEncoded = (header: Header): boolean =>
  isContentType(header) &&
  "application/x-www-form-urlencoded" === header.value.toLowerCase();

const TEXT_BASED_CONTENT_TYPE = [
  "application/json",
  "application/xhtml+xml",
  "application/xml",
];

export const isContentTypeTextBase = (header: Header): boolean =>
  isContentType(header) &&
  (TEXT_BASED_CONTENT_TYPE.includes(header.value.toLowerCase()) ||
    header.value.toLowerCase().startsWith("text/"));
