import { GroupedRequest, SimpleRequest } from "@src/interfaces/Request";
import { groupRequests, TIMESTAMP_100_MS } from "@src/utils/generate/group";

const entry1: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:21.693+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://pwn-association.org/devenir-membre/",
    "httpVersion": "HTTP/2",
    "headers": [
      {
        "name": "test",
        "value": "entry1-request"
      },
      {
        "name": "Host",
        "value": "pwn-association.org"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/"
      },
      {
        "name": "Cookie",
        "value": "django_language=fr; _ga=GA1.2.1961057493.1677074927; _gid=GA1.2.208187854.1678381580"
      },
      {
        "name": "Upgrade-Insecure-Requests",
        "value": "1"
      },
      {
        "name": "Sec-Fetch-Dest",
        "value": "document"
      },
      {
        "name": "Sec-Fetch-Mode",
        "value": "navigate"
      },
      {
        "name": "Sec-Fetch-Site",
        "value": "same-origin"
      },
      {
        "name": "Sec-Fetch-User",
        "value": "?1"
      }
    ],
    "cookies": [
      {
        "name": "django_language",
        "value": "fr"
      },
      {
        "name": "_ga",
        "value": "GA1.2.1961057493.1677074927"
      },
      {
        "name": "_gid",
        "value": "GA1.2.208187854.1678381580"
      }
    ],
    "queryString": [],
    "headersSize": 610
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "HTTP/2",
    "headers": [
      {
        "name": "test",
        "value": "entry1-response"
      },
      {
        "name": "date",
        "value": "Thu, 09 Mar 2023 17:07:21 GMT"
      },
      {
        "name": "server",
        "value": "Apache"
      },
      {
        "name": "content-language",
        "value": "fr"
      },
      {
        "name": "expires",
        "value": "Thu, 09 Mar 2023 17:08:21 GMT"
      },
      {
        "name": "vary",
        "value": "Accept-Language,Cookie,Accept-Encoding"
      },
      {
        "name": "cache-control",
        "value": "max-age=60"
      },
      {
        "name": "x-frame-options",
        "value": "SAMEORIGIN"
      },
      {
        "name": "x-xss-protection",
        "value": "1; mode=block"
      },
      {
        "name": "x-content-type-options",
        "value": "nosniff"
      },
      {
        "name": "last-modified",
        "value": "Thu, 09 Mar 2023 17:07:21 GMT"
      },
      {
        "name": "content-encoding",
        "value": "br"
      },
      {
        "name": "content-type",
        "value": "text/html; charset=utf-8"
      },
      {
        "name": "via",
        "value": "2.0 alproxy"
      },
      {
        "name": "X-Firefox-Spdy",
        "value": "h2"
      }
    ],
    "cookies": [],
    "content": {
      "mimeType": "text/html; charset=utf-8",
      "size": 6312,
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "headersSize": 446,
    "bodySize": 2308
  },
  "cache": {},
  "timings": {
    "blocked": 33,
    "dns": 0,
    "connect": 15,
    "ssl": 19,
    "send": 0,
    "wait": 81,
    "receive": 0
  },
  "time": 148,
  "_securityState": "secure",
  "serverIPAddress": "2a00:b6e0:1:20:11::1",
  "connection": "443"
}

const entry2bundle: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:21.887+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://pwn-association.org/static/core/js/app.js",
    "httpVersion": "HTTP/2",
    "headers": [
      {
        "name": "test",
        "value": "entry2-request"
      },
      {
        "name": "Host",
        "value": "pwn-association.org"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "*/*"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/devenir-membre/"
      },
      {
        "name": "Cookie",
        "value": "django_language=fr; _ga=GA1.2.1961057493.1677074927; _gid=GA1.2.208187854.1678381580"
      },
      {
        "name": "Sec-Fetch-Dest",
        "value": "script"
      },
      {
        "name": "Sec-Fetch-Mode",
        "value": "no-cors"
      },
      {
        "name": "Sec-Fetch-Site",
        "value": "same-origin"
      }
    ],
    "cookies": [
      {
        "name": "django_language",
        "value": "fr"
      },
      {
        "name": "_ga",
        "value": "GA1.2.1961057493.1677074927"
      },
      {
        "name": "_gid",
        "value": "GA1.2.208187854.1678381580"
      }
    ],
    "queryString": [],
    "headersSize": 0
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "HTTP/2",
    "headers": [
      {
        "name": "test",
        "value": "entry2-response"
      },
      {
        "name": "date",
        "value": "Thu, 09 Mar 2023 17:06:20 GMT"
      },
      {
        "name": "server",
        "value": "Apache"
      },
      {
        "name": "x-frame-options",
        "value": "SAMEORIGIN"
      },
      {
        "name": "x-xss-protection",
        "value": "1; mode=block"
      },
      {
        "name": "x-content-type-options",
        "value": "nosniff"
      },
      {
        "name": "last-modified",
        "value": "Thu, 25 May 2017 12:36:15 GMT"
      },
      {
        "name": "etag",
        "value": "\"18a23-55058778336c3-br\""
      },
      {
        "name": "accept-ranges",
        "value": "bytes"
      },
      {
        "name": "vary",
        "value": "Accept-Encoding"
      },
      {
        "name": "content-encoding",
        "value": "br"
      },
      {
        "name": "content-type",
        "value": "application/javascript"
      },
      {
        "name": "via",
        "value": "2.0 alproxy"
      },
      {
        "name": "content-length",
        "value": "33942"
      },
      {
        "name": "X-Firefox-Spdy",
        "value": "h2"
      }
    ],
    "cookies": [],
    "content": {
      "mimeType": "application/javascript",
      "size": 100899,
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "headersSize": 0,
    "bodySize": 33942
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "ssl": 0,
    "connect": 0,
    "send": 0,
    "wait": 0,
    "receive": 0
  },
  "time": 0,
  "_securityState": "secure"
}

const entry3logoSvg: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:21.888+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://pwn-association.org/static/core/img/logo-pwn.svg",
    "httpVersion": "",
    "headers": [
      {
        "name": "test",
        "value": "entry3-request"
      },
      {
        "name": "Host",
        "value": "pwn-association.org"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "image/avif,image/webp,*/*"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/devenir-membre/"
      }
    ],
    "cookies": [],
    "queryString": [],
    "headersSize": 0
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "",
    "headers": [
      {
        "name": "test",
        "value": "entry3-response"
      },
    ],
    "headersSize": 0,
    "cookies": [],
    "content": {
      "size": 0,
      "mimeType": "image/svg+xml",
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "bodySize": -1
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "ssl": 0,
    "connect": 0,
    "send": 0,
    "wait": 0,
    "receive": 0
  },
  "time": 0
}

const entry4logoSvg: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:21.888+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://pwn-association.org/static/core/img/logo-pwn.svg",
    "httpVersion": "",
    "headers": [
      {
        "name": "test",
        "value": "entry4-request"
      },
      {
        "name": "Host",
        "value": "pwn-association.org"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "image/avif,image/webp,*/*"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/devenir-membre/"
      }
    ],
    "cookies": [],
    "queryString": [],
    "headersSize": 0
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "",
    "headers": [
      {
        "name": "test",
        "value": "entry4-response"
      },
    ],
    "headersSize": 0,
    "cookies": [],
    "content": {
      "size": 0,
      "mimeType": "image/svg+xml",
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "bodySize": -1
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "ssl": 0,
    "connect": 0,
    "send": 0,
    "wait": 0,
    "receive": 0
  },
  "time": 0
}

const entry5serliPng: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:21.889+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://pwn-association.org/static/core/img/serli.jpg",
    "httpVersion": "",
    "headers": [
      {
        "name": "test",
        "value": "entry5-request"
      },
      {
        "name": "Host",
        "value": "pwn-association.org"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "image/avif,image/webp,*/*"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/devenir-membre/"
      }
    ],
    "cookies": [],
    "queryString": [],
    "headersSize": 0
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "",
    "headers": [
      {
        "name": "test",
        "value": "entry5-response"
      },
    ],
    "headersSize": 0,
    "cookies": [],
    "content": {
      "size": 0,
      "mimeType": "image/jpeg",
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "bodySize": -1
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "ssl": 0,
    "connect": 0,
    "send": 0,
    "wait": 0,
    "receive": 0
  },
  "time": 0
}

const entry6serli2Png: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:21.889+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://pwn-association.org/static/core/img/serli2.jpg",
    "httpVersion": "",
    "headers": [
      {
        "name": "test",
        "value": "entry6-request"
      },
      {
        "name": "Host",
        "value": "pwn-association.org"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "image/avif,image/webp,*/*"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/devenir-membre/"
      }
    ],
    "cookies": [],
    "queryString": [],
    "headersSize": 0
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "",
    "headers": [
      {
        "name": "test",
        "value": "entry6-response"
      },
    ],
    "headersSize": 0,
    "cookies": [],
    "content": {
      "size": 0,
      "mimeType": "image/jpeg",
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "bodySize": -1
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "ssl": 0,
    "connect": 0,
    "send": 0,
    "wait": 0,
    "receive": 0
  },
  "time": 0
}

const entry7serliJpg: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:21.889+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://pwn-association.org/static/core/img/serli.jpg",
    "httpVersion": "",
    "headers": [
      {
        "name": "test",
        "value": "entry7-request"
      },
      {
        "name": "Host",
        "value": "pwn-association.org"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "image/avif,image/webp,*/*"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/devenir-membre/"
      }
    ],
    "cookies": [],
    "queryString": [],
    "headersSize": 0
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "",
    "headers": [
      {
      "name": "test",
      "value": "entry7-response"
    },],
    "headersSize": 0,
    "cookies": [],
    "content": {
      "size": 0,
      "mimeType": "image/jpeg",
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "bodySize": -1
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "ssl": 0,
    "connect": 0,
    "send": 0,
    "wait": 0,
    "receive": 0
  },
  "time": 0
}

const entry8upPng: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:21.889+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://pwn-association.org/static/core/img/univ-poitiers.png",
    "httpVersion": "",
    "headers": [
      {
        "name": "test",
        "value": "entry8-request"
      },
      {
        "name": "Host",
        "value": "pwn-association.org"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "image/avif,image/webp,*/*"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/devenir-membre/"
      }
    ],
    "cookies": [],
    "queryString": [],
    "headersSize": 0
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "",
    "headers": [
      {
        "name": "test",
        "value": "entry8-response"
      },
    ],
    "headersSize": 0,
    "cookies": [],
    "content": {
      "size": 0,
      "mimeType": "image/png",
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "bodySize": -1
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "ssl": 0,
    "connect": 0,
    "send": 0,
    "wait": 0,
    "receive": 0
  },
  "time": 0
}

const entry9upPng: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:21.889+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://pwn-association.org/static/core/img/univ-poitiers.png",
    "httpVersion": "",
    "headers": [
      {
        "name": "test",
        "value": "entry9-request"
      },
      {
        "name": "Host",
        "value": "pwn-association.org"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "image/avif,image/webp,*/*"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/devenir-membre/"
      }
    ],
    "cookies": [],
    "queryString": [],
    "headersSize": 0
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "",
    "headers": [      {
      "name": "test",
      "value": "entry9-response"
    }],
    "headersSize": 0,
    "cookies": [],
    "content": {
      "size": 0,
      "mimeType": "image/png",
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "bodySize": -1
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "ssl": 0,
    "connect": 0,
    "send": 0,
    "wait": 0,
    "receive": 0
  },
  "time": 0
}

const entry10analytics: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:21.905+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://www.google-analytics.com/analytics.js",
    "httpVersion": "HTTP/2",
    "headers": [      {
      "name": "test",
      "value": "entry10-request"
    },
      {
        "name": "Host",
        "value": "www.google-analytics.com"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "*/*"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Alt-Used",
        "value": "www.google-analytics.com"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/"
      },
      {
        "name": "Sec-Fetch-Dest",
        "value": "script"
      },
      {
        "name": "Sec-Fetch-Mode",
        "value": "no-cors"
      },
      {
        "name": "Sec-Fetch-Site",
        "value": "cross-site"
      }
    ],
    "cookies": [],
    "queryString": [],
    "headersSize": 0
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "HTTP/2",
    "headers": [     {
      "name": "test",
      "value": "entry10-response"
    },
      {
        "name": "strict-transport-security",
        "value": "max-age=10886400; includeSubDomains; preload"
      },
      {
        "name": "x-content-type-options",
        "value": "nosniff"
      },
      {
        "name": "content-encoding",
        "value": "gzip"
      },
      {
        "name": "cross-origin-resource-policy",
        "value": "cross-origin"
      },
      {
        "name": "server",
        "value": "Golfe2"
      },
      {
        "name": "content-length",
        "value": "20085"
      },
      {
        "name": "date",
        "value": "Wed, 22 Feb 2023 13:26:57 GMT"
      },
      {
        "name": "expires",
        "value": "Wed, 22 Feb 2023 15:26:57 GMT"
      },
      {
        "name": "cache-control",
        "value": "public, max-age=7200"
      },
      {
        "name": "age",
        "value": "2509"
      },
      {
        "name": "last-modified",
        "value": "Tue, 10 Jan 2023 21:29:14 GMT"
      },
      {
        "name": "content-type",
        "value": "text/javascript"
      },
      {
        "name": "vary",
        "value": "Accept-Encoding"
      },
      {
        "name": "alt-svc",
        "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
      },
      {
        "name": "X-Firefox-Spdy",
        "value": "h2"
      }
    ],
    "cookies": [],
    "content": {
      "mimeType": "text/javascript",
      "size": 0,
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "headersSize": 0,
    "bodySize": 210498
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "ssl": 0,
    "connect": 0,
    "send": 0,
    "wait": 0,
    "receive": 0
  },
  "time": 0,
  "_securityState": "secure"
}


const entry11faviconPng: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:21.922+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://pwn-association.org/static/core/img/favicon.png",
    "httpVersion": "HTTP/2",
    "headers": [{
      "name": "test",
      "value": "entry11-request"
    },
      {
        "name": "Host",
        "value": "pwn-association.org"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "image/avif,image/webp,*/*"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/devenir-membre/"
      },
      {
        "name": "Cookie",
        "value": "django_language=fr; _ga=GA1.2.1961057493.1677074927; _gid=GA1.2.208187854.1678381580"
      },
      {
        "name": "Sec-Fetch-Dest",
        "value": "image"
      },
      {
        "name": "Sec-Fetch-Mode",
        "value": "no-cors"
      },
      {
        "name": "Sec-Fetch-Site",
        "value": "same-origin"
      }
    ],
    "cookies": [
      {
        "name": "django_language",
        "value": "fr"
      },
      {
        "name": "_ga",
        "value": "GA1.2.1961057493.1677074927"
      },
      {
        "name": "_gid",
        "value": "GA1.2.208187854.1678381580"
      }
    ],
    "queryString": [],
    "headersSize": 0
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "HTTP/2",
    "headers": [
      {
        "name": "test",
        "value": "entry11-response"
      },
      {
        "name": "date",
        "value": "Wed, 22 Feb 2023 14:08:46 GMT"
      },
      {
        "name": "server",
        "value": "Apache"
      },
      {
        "name": "x-frame-options",
        "value": "SAMEORIGIN"
      },
      {
        "name": "x-xss-protection",
        "value": "1; mode=block"
      },
      {
        "name": "x-content-type-options",
        "value": "nosniff"
      },
      {
        "name": "last-modified",
        "value": "Thu, 25 May 2017 12:36:15 GMT"
      },
      {
        "name": "etag",
        "value": "\"726-550587782e8a3\""
      },
      {
        "name": "accept-ranges",
        "value": "bytes"
      },
      {
        "name": "content-type",
        "value": "image/png"
      },
      {
        "name": "via",
        "value": "2.0 alproxy"
      },
      {
        "name": "content-length",
        "value": "1830"
      },
      {
        "name": "X-Firefox-Spdy",
        "value": "h2"
      }
    ],
    "cookies": [],
    "content": {
      "mimeType": "image/png",
      "size": 1830,
      "encoding": "base64",
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "headersSize": 0,
    "bodySize": 1830
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "ssl": 0,
    "connect": 0,
    "send": 0,
    "wait": 0,
    "receive": 0
  },
  "time": 0,
  "_securityState": "secure"
}

const entry12analytics: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:21.926+01:00",
  "request": {
    "bodySize": 0,
    "method": "POST",
    "url": "https://www.google-analytics.com/j/collect?v=1&_v=j99&a=924812924&t=pageview&_s=1&dl=https%3A%2F%2Fpwn-association.org%2Fdevenir-membre%2F&ul=en-us&de=UTF-8&dt=Devenir%20membre%20-%20pwn%20%2F%2F%20poitiers%20web%20nerdz%20%2F%2F&sd=30-bit&sr=2560x1440&vp=1123x1259&je=0&_u=AACAAEABAAAAACAAI~&jid=1098785639&gjid=1281333324&cid=1961057493.1677074927&tid=UA-84874571-1&_gid=208187854.1678381580&_r=1&_slc=1&z=503220534",
    "httpVersion": "HTTP/3",
    "headers": [
      {
        "name": "test",
        "value": "entry12-request"
      },
      {
        "name": "Host",
        "value": "www.google-analytics.com"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "*/*"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Content-Type",
        "value": "text/plain"
      },
      {
        "name": "Content-Length",
        "value": "0"
      },
      {
        "name": "Origin",
        "value": "https://pwn-association.org"
      },
      {
        "name": "Alt-Used",
        "value": "www.google-analytics.com"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/"
      },
      {
        "name": "Sec-Fetch-Dest",
        "value": "empty"
      },
      {
        "name": "Sec-Fetch-Mode",
        "value": "cors"
      },
      {
        "name": "Sec-Fetch-Site",
        "value": "cross-site"
      },
      {
        "name": "TE",
        "value": "trailers"
      }
    ],
    "cookies": [],
    "queryString": [
      {
        "name": "v",
        "value": "1"
      },
      {
        "name": "_v",
        "value": "j99"
      },
      {
        "name": "a",
        "value": "924812924"
      },
      {
        "name": "t",
        "value": "pageview"
      },
      {
        "name": "_s",
        "value": "1"
      },
      {
        "name": "dl",
        "value": "https://pwn-association.org/devenir-membre/"
      },
      {
        "name": "ul",
        "value": "en-us"
      },
      {
        "name": "de",
        "value": "UTF-8"
      },
      {
        "name": "dt",
        "value": "Devenir membre - pwn // poitiers web nerdz //"
      },
      {
        "name": "sd",
        "value": "30-bit"
      },
      {
        "name": "sr",
        "value": "2560x1440"
      },
      {
        "name": "vp",
        "value": "1123x1259"
      },
      {
        "name": "je",
        "value": "0"
      },
      {
        "name": "_u",
        "value": "AACAAEABAAAAACAAI~"
      },
      {
        "name": "jid",
        "value": "1098785639"
      },
      {
        "name": "gjid",
        "value": "1281333324"
      },
      {
        "name": "cid",
        "value": "1961057493.1677074927"
      },
      {
        "name": "tid",
        "value": "UA-84874571-1"
      },
      {
        "name": "_gid",
        "value": "208187854.1678381580"
      },
      {
        "name": "_r",
        "value": "1"
      },
      {
        "name": "_slc",
        "value": "1"
      },
      {
        "name": "z",
        "value": "503220534"
      }
    ],
    "headersSize": 869
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "HTTP/3",
    "headers": [     {
      "name": "test",
      "value": "entry12-response"
    },
      {
        "name": "access-control-allow-origin",
        "value": "https://pwn-association.org"
      },
      {
        "name": "date",
        "value": "Thu, 09 Mar 2023 17:07:21 GMT"
      },
      {
        "name": "pragma",
        "value": "no-cache"
      },
      {
        "name": "expires",
        "value": "Fri, 01 Jan 1990 00:00:00 GMT"
      },
      {
        "name": "cache-control",
        "value": "no-cache, no-store, must-revalidate"
      },
      {
        "name": "last-modified",
        "value": "Sun, 17 May 1998 03:00:00 GMT"
      },
      {
        "name": "access-control-allow-credentials",
        "value": "true"
      },
      {
        "name": "x-content-type-options",
        "value": "nosniff"
      },
      {
        "name": "content-type",
        "value": "text/plain"
      },
      {
        "name": "cross-origin-resource-policy",
        "value": "cross-origin"
      },
      {
        "name": "server",
        "value": "Golfe2"
      },
      {
        "name": "content-length",
        "value": "3"
      },
      {
        "name": "alt-svc",
        "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
      }
    ],
    "cookies": [],
    "content": {
      "mimeType": "text/plain",
      "size": 3,
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "headersSize": 503,
    "bodySize": 506
  },
  "cache": {},
  "timings": {
    "blocked": 2,
    "dns": 0,
    "connect": 0,
    "ssl": 0,
    "send": 0,
    "wait": 22,
    "receive": 0
  },
  "time": 24,
  "_securityState": "secure",
  "serverIPAddress": "2a00:1450:4007:80e::200e",
  "connection": "443"
}

const entry13pagePresentation: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:22.941+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://pwn-association.org/presentation/",
    "httpVersion": "HTTP/2",
    "headers": [
      {
        "name": "test",
        "value": "entry13-request"
      },
      {
        "name": "Host",
        "value": "pwn-association.org"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/devenir-membre/"
      },
      {
        "name": "Cookie",
        "value": "django_language=fr; _ga=GA1.2.1961057493.1677074927; _gid=GA1.2.208187854.1678381580; _gat=1"
      },
      {
        "name": "Upgrade-Insecure-Requests",
        "value": "1"
      },
      {
        "name": "Sec-Fetch-Dest",
        "value": "document"
      },
      {
        "name": "Sec-Fetch-Mode",
        "value": "navigate"
      },
      {
        "name": "Sec-Fetch-Site",
        "value": "same-origin"
      },
      {
        "name": "Sec-Fetch-User",
        "value": "?1"
      },
      {
        "name": "TE",
        "value": "trailers"
      }
    ],
    "cookies": [
      {
        "name": "django_language",
        "value": "fr"
      },
      {
        "name": "_ga",
        "value": "GA1.2.1961057493.1677074927"
      },
      {
        "name": "_gid",
        "value": "GA1.2.208187854.1678381580"
      },
      {
        "name": "_gat",
        "value": "1"
      }
    ],
    "queryString": [],
    "headersSize": 631
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "HTTP/2",
    "headers": [
      {
        "name": "test",
        "value": "entry13-response"
      },
      {
        "name": "date",
        "value": "Thu, 09 Mar 2023 17:07:22 GMT"
      },
      {
        "name": "server",
        "value": "Apache"
      },
      {
        "name": "content-language",
        "value": "fr"
      },
      {
        "name": "expires",
        "value": "Thu, 09 Mar 2023 17:08:23 GMT"
      },
      {
        "name": "vary",
        "value": "Accept-Language,Cookie,Accept-Encoding"
      },
      {
        "name": "cache-control",
        "value": "max-age=60"
      },
      {
        "name": "x-frame-options",
        "value": "SAMEORIGIN"
      },
      {
        "name": "x-xss-protection",
        "value": "1; mode=block"
      },
      {
        "name": "x-content-type-options",
        "value": "nosniff"
      },
      {
        "name": "last-modified",
        "value": "Thu, 09 Mar 2023 17:07:23 GMT"
      },
      {
        "name": "content-encoding",
        "value": "br"
      },
      {
        "name": "content-type",
        "value": "text/html; charset=utf-8"
      },
      {
        "name": "via",
        "value": "2.0 alproxy"
      },
      {
        "name": "X-Firefox-Spdy",
        "value": "h2"
      }
    ],
    "cookies": [],
    "content": {
      "mimeType": "text/html; charset=utf-8",
      "size": 6947,
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "headersSize": 446,
    "bodySize": 2689
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "connect": 0,
    "ssl": 0,
    "send": 0,
    "wait": 72,
    "receive": 0
  },
  "time": 72,
  "_securityState": "secure",
  "serverIPAddress": "2a00:b6e0:1:20:11::1",
  "connection": "443"
}


const entry14bundlePresentation: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:23.057+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://pwn-association.org/static/core/js/app.js",
    "httpVersion": "HTTP/2",
    "headers": [
      {
        "name": "test",
        "value": "entry14-request"
      },
      {
        "name": "Host",
        "value": "pwn-association.org"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "*/*"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/presentation/"
      },
      {
        "name": "Cookie",
        "value": "django_language=fr; _ga=GA1.2.1961057493.1677074927; _gid=GA1.2.208187854.1678381580; _gat=1"
      },
      {
        "name": "Sec-Fetch-Dest",
        "value": "script"
      },
      {
        "name": "Sec-Fetch-Mode",
        "value": "no-cors"
      },
      {
        "name": "Sec-Fetch-Site",
        "value": "same-origin"
      }
    ],
    "cookies": [
      {
        "name": "django_language",
        "value": "fr"
      },
      {
        "name": "_ga",
        "value": "GA1.2.1961057493.1677074927"
      },
      {
        "name": "_gid",
        "value": "GA1.2.208187854.1678381580"
      },
      {
        "name": "_gat",
        "value": "1"
      }
    ],
    "queryString": [],
    "headersSize": 0
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "HTTP/2",
    "headers": [   {
      "name": "test",
      "value": "entry14-response"
    },
      {
        "name": "date",
        "value": "Thu, 09 Mar 2023 17:06:20 GMT"
      },
      {
        "name": "server",
        "value": "Apache"
      },
      {
        "name": "x-frame-options",
        "value": "SAMEORIGIN"
      },
      {
        "name": "x-xss-protection",
        "value": "1; mode=block"
      },
      {
        "name": "x-content-type-options",
        "value": "nosniff"
      },
      {
        "name": "last-modified",
        "value": "Thu, 25 May 2017 12:36:15 GMT"
      },
      {
        "name": "etag",
        "value": "\"18a23-55058778336c3-br\""
      },
      {
        "name": "accept-ranges",
        "value": "bytes"
      },
      {
        "name": "vary",
        "value": "Accept-Encoding"
      },
      {
        "name": "content-encoding",
        "value": "br"
      },
      {
        "name": "content-type",
        "value": "application/javascript"
      },
      {
        "name": "via",
        "value": "2.0 alproxy"
      },
      {
        "name": "content-length",
        "value": "33942"
      },
      {
        "name": "X-Firefox-Spdy",
        "value": "h2"
      }
    ],
    "cookies": [],
    "content": {
      "mimeType": "application/javascript",
      "size": 100899,
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "headersSize": 0,
    "bodySize": 33942
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "ssl": 0,
    "connect": 0,
    "send": 0,
    "wait": 0,
    "receive": 0
  },
  "time": 0,
  "_securityState": "secure"
}

const entry15presentationAnalytics: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:23.074+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://www.google-analytics.com/analytics.js",
    "httpVersion": "HTTP/2",
    "headers": [   {
      "name": "test",
      "value": "entry15-request"
    },
      {
        "name": "Host",
        "value": "www.google-analytics.com"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "*/*"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Alt-Used",
        "value": "www.google-analytics.com"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/"
      },
      {
        "name": "Sec-Fetch-Dest",
        "value": "script"
      },
      {
        "name": "Sec-Fetch-Mode",
        "value": "no-cors"
      },
      {
        "name": "Sec-Fetch-Site",
        "value": "cross-site"
      }
    ],
    "cookies": [],
    "queryString": [],
    "headersSize": 0
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "HTTP/2",
    "headers": [  {
      "name": "test",
      "value": "entry15-response"
    },
      {
        "name": "strict-transport-security",
        "value": "max-age=10886400; includeSubDomains; preload"
      },
      {
        "name": "x-content-type-options",
        "value": "nosniff"
      },
      {
        "name": "content-encoding",
        "value": "gzip"
      },
      {
        "name": "cross-origin-resource-policy",
        "value": "cross-origin"
      },
      {
        "name": "server",
        "value": "Golfe2"
      },
      {
        "name": "content-length",
        "value": "20085"
      },
      {
        "name": "date",
        "value": "Wed, 22 Feb 2023 13:26:57 GMT"
      },
      {
        "name": "expires",
        "value": "Wed, 22 Feb 2023 15:26:57 GMT"
      },
      {
        "name": "cache-control",
        "value": "public, max-age=7200"
      },
      {
        "name": "age",
        "value": "2509"
      },
      {
        "name": "last-modified",
        "value": "Tue, 10 Jan 2023 21:29:14 GMT"
      },
      {
        "name": "content-type",
        "value": "text/javascript"
      },
      {
        "name": "vary",
        "value": "Accept-Encoding"
      },
      {
        "name": "alt-svc",
        "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
      },
      {
        "name": "X-Firefox-Spdy",
        "value": "h2"
      }
    ],
    "cookies": [],
    "content": {
      "mimeType": "text/javascript",
      "size": 0,
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "headersSize": 0,
    "bodySize": 210498
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "ssl": 0,
    "connect": 0,
    "send": 0,
    "wait": 0,
    "receive": 0
  },
  "time": 0,
  "_securityState": "secure"
}

const entry16presentationFavicon: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:23.076+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://pwn-association.org/static/core/img/favicon.png",
    "httpVersion": "HTTP/2",
    "headers": [  {
      "name": "test",
      "value": "entry16-request"
    },
      {
        "name": "Host",
        "value": "pwn-association.org"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "image/avif,image/webp,*/*"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/presentation/"
      },
      {
        "name": "Cookie",
        "value": "django_language=fr; _ga=GA1.2.1961057493.1677074927; _gid=GA1.2.208187854.1678381580; _gat=1"
      },
      {
        "name": "Sec-Fetch-Dest",
        "value": "image"
      },
      {
        "name": "Sec-Fetch-Mode",
        "value": "no-cors"
      },
      {
        "name": "Sec-Fetch-Site",
        "value": "same-origin"
      }
    ],
    "cookies": [
      {
        "name": "django_language",
        "value": "fr"
      },
      {
        "name": "_ga",
        "value": "GA1.2.1961057493.1677074927"
      },
      {
        "name": "_gid",
        "value": "GA1.2.208187854.1678381580"
      },
      {
        "name": "_gat",
        "value": "1"
      }
    ],
    "queryString": [],
    "headersSize": 0
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "HTTP/2",
    "headers": [{
      "name": "test",
      "value": "entry16-response"
    },
      {
        "name": "date",
        "value": "Wed, 22 Feb 2023 14:08:46 GMT"
      },
      {
        "name": "server",
        "value": "Apache"
      },
      {
        "name": "x-frame-options",
        "value": "SAMEORIGIN"
      },
      {
        "name": "x-xss-protection",
        "value": "1; mode=block"
      },
      {
        "name": "x-content-type-options",
        "value": "nosniff"
      },
      {
        "name": "last-modified",
        "value": "Thu, 25 May 2017 12:36:15 GMT"
      },
      {
        "name": "etag",
        "value": "\"726-550587782e8a3\""
      },
      {
        "name": "accept-ranges",
        "value": "bytes"
      },
      {
        "name": "content-type",
        "value": "image/png"
      },
      {
        "name": "via",
        "value": "2.0 alproxy"
      },
      {
        "name": "content-length",
        "value": "1830"
      },
      {
        "name": "X-Firefox-Spdy",
        "value": "h2"
      }
    ],
    "cookies": [],
    "content": {
      "mimeType": "image/png",
      "size": 1830,
      "encoding": "base64",
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "headersSize": 0,
    "bodySize": 1830
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "ssl": 0,
    "connect": 0,
    "send": 0,
    "wait": 0,
    "receive": 0
  },
  "time": 0,
  "_securityState": "secure"
}

const entry17presentationAnalytics2: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:23.085+01:00",
  "request": {
    "bodySize": 0,
    "method": "POST",
    "url": "https://www.google-analytics.com/j/collect?v=1&_v=j99&a=326088020&t=pageview&_s=1&dl=https%3A%2F%2Fpwn-association.org%2Fpresentation%2F&ul=en-us&de=UTF-8&dt=Pr%C3%A9sentation%20-%20pwn%20%2F%2F%20poitiers%20web%20nerdz%20%2F%2F&sd=30-bit&sr=2560x1440&vp=1123x1259&je=0&_u=AACAAEABAAAAACAAI~&jid=&gjid=&cid=1961057493.1677074927&tid=UA-84874571-1&_gid=208187854.1678381580&_slc=1&z=2132833392",
    "httpVersion": "HTTP/3",
    "headers": [{
      "name": "test",
      "value": "entry17-request"
    },
      {
        "name": "Host",
        "value": "www.google-analytics.com"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "*/*"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Content-Type",
        "value": "text/plain"
      },
      {
        "name": "Content-Length",
        "value": "0"
      },
      {
        "name": "Origin",
        "value": "https://pwn-association.org"
      },
      {
        "name": "Alt-Used",
        "value": "www.google-analytics.com"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/"
      },
      {
        "name": "Sec-Fetch-Dest",
        "value": "empty"
      },
      {
        "name": "Sec-Fetch-Mode",
        "value": "cors"
      },
      {
        "name": "Sec-Fetch-Site",
        "value": "cross-site"
      },
      {
        "name": "TE",
        "value": "trailers"
      }
    ],
    "cookies": [],
    "queryString": [
      {
        "name": "v",
        "value": "1"
      },
      {
        "name": "_v",
        "value": "j99"
      },
      {
        "name": "a",
        "value": "326088020"
      },
      {
        "name": "t",
        "value": "pageview"
      },
      {
        "name": "_s",
        "value": "1"
      },
      {
        "name": "dl",
        "value": "https://pwn-association.org/presentation/"
      },
      {
        "name": "ul",
        "value": "en-us"
      },
      {
        "name": "de",
        "value": "UTF-8"
      },
      {
        "name": "dt",
        "value": "Présentation - pwn // poitiers web nerdz //"
      },
      {
        "name": "sd",
        "value": "30-bit"
      },
      {
        "name": "sr",
        "value": "2560x1440"
      },
      {
        "name": "vp",
        "value": "1123x1259"
      },
      {
        "name": "je",
        "value": "0"
      },
      {
        "name": "_u",
        "value": "AACAAEABAAAAACAAI~"
      },
      {
        "name": "jid",
        "value": ""
      },
      {
        "name": "gjid",
        "value": ""
      },
      {
        "name": "cid",
        "value": "1961057493.1677074927"
      },
      {
        "name": "tid",
        "value": "UA-84874571-1"
      },
      {
        "name": "_gid",
        "value": "208187854.1678381580"
      },
      {
        "name": "_slc",
        "value": "1"
      },
      {
        "name": "z",
        "value": "2132833392"
      }
    ],
    "headersSize": 844
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "HTTP/3",
    "headers": [{
      "name": "test",
      "value": "entry17-response"
    },
      {
        "name": "access-control-allow-origin",
        "value": "https://pwn-association.org"
      },
      {
        "name": "date",
        "value": "Thu, 09 Mar 2023 17:07:23 GMT"
      },
      {
        "name": "pragma",
        "value": "no-cache"
      },
      {
        "name": "expires",
        "value": "Fri, 01 Jan 1990 00:00:00 GMT"
      },
      {
        "name": "cache-control",
        "value": "no-cache, no-store, must-revalidate"
      },
      {
        "name": "last-modified",
        "value": "Sun, 17 May 1998 03:00:00 GMT"
      },
      {
        "name": "access-control-allow-credentials",
        "value": "true"
      },
      {
        "name": "x-content-type-options",
        "value": "nosniff"
      },
      {
        "name": "content-type",
        "value": "text/plain"
      },
      {
        "name": "cross-origin-resource-policy",
        "value": "cross-origin"
      },
      {
        "name": "server",
        "value": "Golfe2"
      },
      {
        "name": "content-length",
        "value": "3"
      },
      {
        "name": "alt-svc",
        "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
      }
    ],
    "cookies": [],
    "content": {
      "mimeType": "text/plain",
      "size": 3,
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "headersSize": 503,
    "bodySize": 506
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "connect": 0,
    "ssl": 0,
    "send": 0,
    "wait": 22,
    "receive": 0
  },
  "time": 22,
  "_securityState": "secure",
  "serverIPAddress": "2a00:1450:4007:80e::200e",
  "connection": "443"
}

const entry18pageFaq: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:23.790+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://pwn-association.org/faq/",
    "httpVersion": "HTTP/2",
    "headers": [{
      "name": "test",
      "value": "entry18-request"
    },
      {
        "name": "Host",
        "value": "pwn-association.org"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/presentation/"
      },
      {
        "name": "Cookie",
        "value": "django_language=fr; _ga=GA1.2.1961057493.1677074927; _gid=GA1.2.208187854.1678381580; _gat=1"
      },
      {
        "name": "Upgrade-Insecure-Requests",
        "value": "1"
      },
      {
        "name": "Sec-Fetch-Dest",
        "value": "document"
      },
      {
        "name": "Sec-Fetch-Mode",
        "value": "navigate"
      },
      {
        "name": "Sec-Fetch-Site",
        "value": "same-origin"
      },
      {
        "name": "Sec-Fetch-User",
        "value": "?1"
      },
      {
        "name": "TE",
        "value": "trailers"
      }
    ],
    "cookies": [
      {
        "name": "django_language",
        "value": "fr"
      },
      {
        "name": "_ga",
        "value": "GA1.2.1961057493.1677074927"
      },
      {
        "name": "_gid",
        "value": "GA1.2.208187854.1678381580"
      },
      {
        "name": "_gat",
        "value": "1"
      }
    ],
    "queryString": [],
    "headersSize": 620
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "HTTP/2",
    "headers": [{
      "name": "test",
      "value": "entry18-response"
    },
      {
        "name": "date",
        "value": "Thu, 09 Mar 2023 17:07:23 GMT"
      },
      {
        "name": "server",
        "value": "Apache"
      },
      {
        "name": "content-language",
        "value": "fr"
      },
      {
        "name": "expires",
        "value": "Thu, 09 Mar 2023 17:08:23 GMT"
      },
      {
        "name": "vary",
        "value": "Accept-Language,Cookie,Accept-Encoding"
      },
      {
        "name": "cache-control",
        "value": "max-age=60"
      },
      {
        "name": "x-frame-options",
        "value": "SAMEORIGIN"
      },
      {
        "name": "x-xss-protection",
        "value": "1; mode=block"
      },
      {
        "name": "x-content-type-options",
        "value": "nosniff"
      },
      {
        "name": "last-modified",
        "value": "Thu, 09 Mar 2023 17:07:23 GMT"
      },
      {
        "name": "content-encoding",
        "value": "br"
      },
      {
        "name": "content-type",
        "value": "text/html; charset=utf-8"
      },
      {
        "name": "via",
        "value": "2.0 alproxy"
      },
      {
        "name": "X-Firefox-Spdy",
        "value": "h2"
      }
    ],
    "cookies": [],
    "content": {
      "mimeType": "text/html; charset=utf-8",
      "size": 8568,
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "headersSize": 446,
    "bodySize": 3459
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "connect": 0,
    "ssl": 0,
    "send": 0,
    "wait": 78,
    "receive": 0
  },
  "time": 78,
  "_securityState": "secure",
  "serverIPAddress": "2a00:b6e0:1:20:11::1",
  "connection": "443"
}

const entry19faqBundle: SimpleRequest = {
  "startedDateTime": "2023-03-09T18:07:23.903+01:00",
  "request": {
    "bodySize": 0,
    "method": "GET",
    "url": "https://pwn-association.org/static/core/js/app.js",
    "httpVersion": "HTTP/2",
    "headers": [{
      "name": "test",
      "value": "entry19-request"
    },
      {
        "name": "Host",
        "value": "pwn-association.org"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0"
      },
      {
        "name": "Accept",
        "value": "*/*"
      },
      {
        "name": "Accept-Language",
        "value": "en-US,en;q=0.5"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Referer",
        "value": "https://pwn-association.org/faq/"
      },
      {
        "name": "Cookie",
        "value": "django_language=fr; _ga=GA1.2.1961057493.1677074927; _gid=GA1.2.208187854.1678381580; _gat=1"
      },
      {
        "name": "Sec-Fetch-Dest",
        "value": "script"
      },
      {
        "name": "Sec-Fetch-Mode",
        "value": "no-cors"
      },
      {
        "name": "Sec-Fetch-Site",
        "value": "same-origin"
      }
    ],
    "cookies": [
      {
        "name": "django_language",
        "value": "fr"
      },
      {
        "name": "_ga",
        "value": "GA1.2.1961057493.1677074927"
      },
      {
        "name": "_gid",
        "value": "GA1.2.208187854.1678381580"
      },
      {
        "name": "_gat",
        "value": "1"
      }
    ],
    "queryString": [],
    "headersSize": 0
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "HTTP/2",
    "headers": [{
      "name": "test",
      "value": "entry19-response"
    },
      {
        "name": "date",
        "value": "Thu, 09 Mar 2023 17:06:20 GMT"
      },
      {
        "name": "server",
        "value": "Apache"
      },
      {
        "name": "x-frame-options",
        "value": "SAMEORIGIN"
      },
      {
        "name": "x-xss-protection",
        "value": "1; mode=block"
      },
      {
        "name": "x-content-type-options",
        "value": "nosniff"
      },
      {
        "name": "last-modified",
        "value": "Thu, 25 May 2017 12:36:15 GMT"
      },
      {
        "name": "etag",
        "value": "\"18a23-55058778336c3-br\""
      },
      {
        "name": "accept-ranges",
        "value": "bytes"
      },
      {
        "name": "vary",
        "value": "Accept-Encoding"
      },
      {
        "name": "content-encoding",
        "value": "br"
      },
      {
        "name": "content-type",
        "value": "application/javascript"
      },
      {
        "name": "via",
        "value": "2.0 alproxy"
      },
      {
        "name": "content-length",
        "value": "33942"
      },
      {
        "name": "X-Firefox-Spdy",
        "value": "h2"
      }
    ],
    "cookies": [],
    "content": {
      "mimeType": "application/javascript",
      "size": 100899,
      "comment": "Response bodies are not included."
    },
    "redirectURL": "",
    "headersSize": 0,
    "bodySize": 33942
  },
  "cache": {},
  "timings": {
    "blocked": 0,
    "dns": 0,
    "ssl": 0,
    "connect": 0,
    "send": 0,
    "wait": 0,
    "receive": 0
  },
  "time": 0,
  "_securityState": "secure"
}

const EXPECTED: SimpleRequest[] = [entry1, entry2bundle, entry3logoSvg, entry4logoSvg, entry5serliPng, entry6serli2Png, entry7serliJpg, entry8upPng, entry9upPng, entry10analytics, entry11faviconPng, entry12analytics, entry13pagePresentation, entry14bundlePresentation, entry15presentationAnalytics, entry16presentationFavicon, entry17presentationAnalytics2, entry18pageFaq, entry19faqBundle];

const GROUP1: GroupedRequest = {
  sendTime: new Date(entry1.startedDateTime).getTime(),
  arrivalTime: new Date(entry12analytics.startedDateTime).getTime() + TIMESTAMP_100_MS,
  root: entry1,
  resources: [entry2bundle, entry3logoSvg, entry4logoSvg, entry5serliPng, entry6serli2Png, entry7serliJpg, entry8upPng, entry9upPng, entry10analytics, entry11faviconPng, entry12analytics]
}

const GROUP2: GroupedRequest = {
  sendTime: new Date(entry13pagePresentation.startedDateTime).getTime(),
  arrivalTime: new Date(entry17presentationAnalytics2.startedDateTime).getTime() + TIMESTAMP_100_MS,
  root: entry13pagePresentation,
  resources: [entry14bundlePresentation, entry15presentationAnalytics, entry16presentationFavicon, entry17presentationAnalytics2]
}

const GROUP3: GroupedRequest = {
  sendTime: new Date(entry18pageFaq.startedDateTime).getTime(),
  arrivalTime: new Date(entry19faqBundle.startedDateTime).getTime() + TIMESTAMP_100_MS ,
  root: entry18pageFaq,
  resources: [entry19faqBundle]
}

const RESULT: GroupedRequest[] = [
  GROUP1,
  GROUP2,
  GROUP3
]

describe("groupRequests", () => {
  it("should return 3 groups", () => {
    console.log("groupRequests(EXPECTED).length:", groupRequests(EXPECTED).length)
    expect(groupRequests(EXPECTED)).toEqual(RESULT);
  });
});
