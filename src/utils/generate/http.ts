import { Http } from "@src/constants/http";

export const isRedirection = (code: number): boolean =>
  [
    Http.MOVED_PERMANENTLY,
    Http.MOVED_TEMPORARILY,
    Http.SEE_OTHER,
    Http.TEMPORARY_REDIRECT,
  ].includes(code);
