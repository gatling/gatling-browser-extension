import { mergeRedirectionRequests } from "./redirection";
import { SimpleEntry } from "@src/interfaces/Entry";

const entry1: SimpleEntry = {
  "cache": {},
  "request": {
    "method": "GET",
    "url": "https://flusin.ovh/",
    "httpVersion": "HTTP/1.1",
    "headers": [
      {
        "name": "gatling-test",
        "value": "request-entry1"
      },
      {
        "name": "Accept",
        "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Accept-Language",
        "value": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7"
      },
      {
        "name": "Cache-Control",
        "value": "no-cache"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Host",
        "value": "flusin.ovh"
      },
      {
        "name": "Pragma",
        "value": "no-cache"
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
        "value": "none"
      },
      {
        "name": "Sec-Fetch-User",
        "value": "?1"
      },
      {
        "name": "Upgrade-Insecure-Requests",
        "value": "1"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
      },
      {
        "name": "sec-ch-ua",
        "value": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\""
      },
      {
        "name": "sec-ch-ua-mobile",
        "value": "?0"
      },
      {
        "name": "sec-ch-ua-platform",
        "value": "\"macOS\""
      }
    ],
    "queryString": [],
    "cookies": [],
    "headersSize": 720,
    "bodySize": 0
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "HTTP/1.1",
    "headers": [
      {
        "name": "gatling-test",
        "value": "response-entry1"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Content-Encoding",
        "value": "gzip"
      },
      {
        "name": "Content-Type",
        "value": "text/html; charset=utf-8"
      },
      {
        "name": "Date",
        "value": "Mon, 06 Mar 2023 13:57:01 GMT"
      },
      {
        "name": "ETag",
        "value": "W/\"62c2e8b0-d3a\""
      },
      {
        "name": "Last-Modified",
        "value": "Mon, 04 Jul 2022 13:18:40 GMT"
      },
      {
        "name": "Server",
        "value": "nginx/1.17.5"
      },
      {
        "name": "Transfer-Encoding",
        "value": "chunked"
      }
    ],
    "cookies": [],
    "content": {
      "size": 3386,
      "mimeType": "text/html",
      "compression": 1928,
      "text": ""
    },
    "redirectURL": "",
    "headersSize": 264,
    "bodySize": 1458,
    "_transferSize": 1722,
  },
  "startedDateTime": "2023-03-06T13:57:01.906Z",
  "time": 23.601000022608787,
  "timings": {
    "blocked": 2.2119999771229923,
    "dns": -1,
    "ssl": -1,
    "connect": -1,
    "send": 0.07999999999999985,
    "wait": 20.588000026956202,
    "receive": 0.721000018529594,
  }
};


const entry2: SimpleEntry = {
  "cache": {},
  "request": {
    "method": "GET",
    "url": "https://fonts.googleapis.com/css?family=Montserrat:500,600|Varela|Nothing+You+Could+Do|Lora",
    "httpVersion": "h3",
    "headers": [
      {
        "name": "gatling-test",
        "value": "request-entry2"
      },
      {
        "name": ":authority",
        "value": "fonts.googleapis.com"
      },
      {
        "name": ":method",
        "value": "GET"
      },
      {
        "name": ":path",
        "value": "/css?family=Montserrat:500,600|Varela|Nothing+You+Could+Do|Lora"
      },
      {
        "name": ":scheme",
        "value": "https"
      },
      {
        "name": "accept",
        "value": "text/css,*/*;q=0.1"
      },
      {
        "name": "accept-encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "accept-language",
        "value": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7"
      },
      {
        "name": "cache-control",
        "value": "no-cache"
      },
      {
        "name": "pragma",
        "value": "no-cache"
      },
      {
        "name": "referer",
        "value": "https://flusin.ovh/"
      },
      {
        "name": "sec-ch-ua",
        "value": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\""
      },
      {
        "name": "sec-ch-ua-mobile",
        "value": "?0"
      },
      {
        "name": "sec-ch-ua-platform",
        "value": "\"macOS\""
      },
      {
        "name": "sec-fetch-dest",
        "value": "style"
      },
      {
        "name": "sec-fetch-mode",
        "value": "no-cors"
      },
      {
        "name": "sec-fetch-site",
        "value": "cross-site"
      },
      {
        "name": "user-agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
      },
      {
        "name": "x-client-data",
        "value": "CI22yQEIpbbJAQjBtskBCKmdygEI5+rKAQiWocsBCPKAzQE="
      }
    ],
    "queryString": [
      {
        "name": "family",
        "value": "Montserrat:500,600|Varela|Nothing+You+Could+Do|Lora"
      }
    ],
    "cookies": [],
    "headersSize": -1,
    "bodySize": 0
  },
  "response": {
    "status": 301,
    "statusText": "",
    "httpVersion": "h3",
    "headers": [
      {
        "name": "gatling-test",
        "value": "response-entry2"
      },
      {
        "name": "location",
        "value": "https://cloud.gatling.io"
      },
      {
        "name": "access-control-allow-origin",
        "value": "*"
      },
      {
        "name": "alt-svc",
        "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
      },
      {
        "name": "cache-control",
        "value": "private, max-age=86400, stale-while-revalidate=604800"
      },
      {
        "name": "content-encoding",
        "value": "gzip"
      },
      {
        "name": "content-type",
        "value": "text/css; charset=utf-8"
      },
      {
        "name": "cross-origin-opener-policy",
        "value": "same-origin-allow-popups"
      },
      {
        "name": "cross-origin-resource-policy",
        "value": "cross-origin"
      },
      {
        "name": "date",
        "value": "Mon, 06 Mar 2023 13:57:01 GMT"
      },
      {
        "name": "expires",
        "value": "Mon, 06 Mar 2023 13:57:01 GMT"
      },
      {
        "name": "last-modified",
        "value": "Mon, 06 Mar 2023 13:57:01 GMT"
      },
      {
        "name": "link",
        "value": "<https://fonts.gstatic.com>; rel=preconnect; crossorigin"
      },
      {
        "name": "server",
        "value": "ESF"
      },
      {
        "name": "strict-transport-security",
        "value": "max-age=31536000"
      },
      {
        "name": "timing-allow-origin",
        "value": "*"
      },
      {
        "name": "x-content-type-options",
        "value": "nosniff"
      },
      {
        "name": "x-frame-options",
        "value": "SAMEORIGIN"
      },
      {
        "name": "x-xss-protection",
        "value": "0"
      }
    ],
    "cookies": [],
    "content": {
      "size": 6022,
      "mimeType": "text/css",
      "text": ""
    },
    "redirectURL": "",
    "headersSize": -1,
    "bodySize": -1,
    "_transferSize": 788
  },
  "serverIPAddress": "[2a00:1450:4007:819::200a]",
  "startedDateTime": "2023-03-06T13:57:01.939Z",
  "time": 36.68299998389557,
  "timings": {
    "blocked": 8.526000019628555,
    "dns": 0,
    "ssl": -1,
    "connect": 0,
    "send": 5.161,
    "wait": 22.643000012110917,
    "receive": 0.3529999521560967
  }
};

const entry3: SimpleEntry = {
  "cache": {},
  "request": {
    "method": "GET",
    "url": "https://cloud.gatling.io",
    "httpVersion": "HTTP/1.1",
    "headers": [
      {
        "name": "gatling-test",
        "value": "request-entry3"
      },
      {
        "name": "Accept",
        "value": "text/css,*/*;q=0.1"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Accept-Language",
        "value": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7"
      },
      {
        "name": "Cache-Control",
        "value": "no-cache"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Host",
        "value": "flusin.ovh"
      },
      {
        "name": "Pragma",
        "value": "no-cache"
      },
      {
        "name": "Referer",
        "value": "https://flusin.ovh/"
      },
      {
        "name": "Sec-Fetch-Dest",
        "value": "style"
      },
      {
        "name": "Sec-Fetch-Mode",
        "value": "no-cors"
      },
      {
        "name": "Sec-Fetch-Site",
        "value": "same-origin"
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
      },
      {
        "name": "sec-ch-ua",
        "value": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\""
      },
      {
        "name": "sec-ch-ua-mobile",
        "value": "?0"
      },
      {
        "name": "sec-ch-ua-platform",
        "value": "\"macOS\""
      }
    ],
    "queryString": [],
    "cookies": [],
    "headersSize": 601,
    "bodySize": 0
  },
  "response": {
    "status": 302,
    "statusText": "OK",
    "httpVersion": "HTTP/1.1",
    "headers": [
      {
        "name": "gatling-test",
        "value": "response-entry3"
      },
      {
        "name": "location",
        "value": "https://gatling.io"
      },
      {
        "name": "Accept-Ranges",
        "value": "bytes"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Content-Length",
        "value": "3862"
      },
      {
        "name": "Content-Type",
        "value": "text/css"
      },
      {
        "name": "Date",
        "value": "Mon, 06 Mar 2023 13:57:01 GMT"
      },
      {
        "name": "ETag",
        "value": "\"62c2e8b0-f16\""
      },
      {
        "name": "Last-Modified",
        "value": "Mon, 04 Jul 2022 13:18:40 GMT"
      },
      {
        "name": "Server",
        "value": "nginx/1.17.5"
      }
    ],
    "cookies": [],
    "content": {
      "size": 3862,
      "mimeType": "text/css",
      "compression": 0,
      "text": ""
    },
    "redirectURL": "",
    "headersSize": 238,
    "bodySize": 3862,
    "_transferSize": 4100
  },
  "serverIPAddress": "51.38.234.189",
  "startedDateTime": "2023-03-06T13:57:01.939Z",
  "time": 41.31000000052154,
  "timings": {
    "blocked": 19.91800001366809,
    "dns": -1,
    "ssl": -1,
    "connect": -1,
    "send": 0.11700000000000088,
    "wait": 20.105999991282822,
    "receive": 1.1689999955706298
  }
}

const entry4: SimpleEntry = {
  "cache": {},
  "request": {
    "method": "GET",
    "url": "https://gatling.io",
    "httpVersion": "http/2.0",
    "headers": [
      {
        "name": "gatling-test",
        "value": "request-entry4"
      },
      {
        "name": ":authority",
        "value": "use.fontawesome.com"
      },
      {
        "name": ":method",
        "value": "GET"
      },
      {
        "name": ":path",
        "value": "/releases/v5.2.0/css/all.css"
      },
      {
        "name": ":scheme",
        "value": "https"
      },
      {
        "name": "accept",
        "value": "text/css,*/*;q=0.1"
      },
      {
        "name": "accept-encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "accept-language",
        "value": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7"
      },
      {
        "name": "cache-control",
        "value": "no-cache"
      },
      {
        "name": "origin",
        "value": "https://flusin.ovh"
      },
      {
        "name": "pragma",
        "value": "no-cache"
      },
      {
        "name": "referer",
        "value": "https://flusin.ovh/"
      },
      {
        "name": "sec-ch-ua",
        "value": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\""
      },
      {
        "name": "sec-ch-ua-mobile",
        "value": "?0"
      },
      {
        "name": "sec-ch-ua-platform",
        "value": "\"macOS\""
      },
      {
        "name": "sec-fetch-dest",
        "value": "style"
      },
      {
        "name": "sec-fetch-mode",
        "value": "cors"
      },
      {
        "name": "sec-fetch-site",
        "value": "cross-site"
      },
      {
        "name": "user-agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
      }
    ],
    "queryString": [],
    "cookies": [],
    "headersSize": -1,
    "bodySize": 0
  },
  "response": {
    "status": 419,
    "statusText": "",
    "httpVersion": "http/2.0",
    "headers": [
      {
        "name": "gatling-test",
        "value": "response-entry4"
      },
      {
        "name": "access-control-allow-methods",
        "value": "GET"
      },
      {
        "name": "access-control-allow-origin",
        "value": "*"
      },
      {
        "name": "access-control-max-age",
        "value": "3000"
      },
      {
        "name": "age",
        "value": "38"
      },
      {
        "name": "alt-svc",
        "value": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400"
      },
      {
        "name": "cache-control",
        "value": "max-age=31556926"
      },
      {
        "name": "cf-cache-status",
        "value": "HIT"
      },
      {
        "name": "cf-ray",
        "value": "7a3b1aff5ce62405-LHR"
      },
      {
        "name": "content-encoding",
        "value": "br"
      },
      {
        "name": "content-type",
        "value": "text/css"
      },
      {
        "name": "date",
        "value": "Mon, 06 Mar 2023 13:57:01 GMT"
      },
      {
        "name": "etag",
        "value": "W/\"20a9ce516eaea76da29a23adc43e8998\""
      },
      {
        "name": "last-modified",
        "value": "Wed, 30 Jun 2021 15:41:36 GMT"
      },
      {
        "name": "nel",
        "value": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}"
      },
      {
        "name": "report-to",
        "value": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6INZ12dJFYOeOJWP4JybCCoWu0Kkn%2FIvotB6ppmUFGRIrgsevXlFFBGZLBp7cc2A9PVagGYWqm3mdcNmhdy7qSz%2F1H49jLPwxeea2Bd92GYQ3bZ%2Fve0UZ8XPoV7A3b1wfij7x3qdOK04LMCyotttx0Y5\"}],\"group\":\"cf-nel\",\"max_age\":604800}"
      },
      {
        "name": "server",
        "value": "cloudflare"
      },
      {
        "name": "vary",
        "value": "Origin, Access-Control-Request-Headers, Access-Control-Request-Method, Accept-Encoding"
      },
      {
        "name": "x-amz-id-2",
        "value": "NKtejWTDzoYetfaQsUxrPXJ4auDCFI47GP8jPLyO+uBrALMJRvhnixTSyiKEe/FKi08tIvqbTXU="
      },
      {
        "name": "x-amz-request-id",
        "value": "11MGK55WSKDKN2J3"
      }
    ],
    "cookies": [],
    "content": {
      "size": 46930,
      "mimeType": "text/plain",
      "text": "Hello teapot!"
    },
    "redirectURL": "",
    "headersSize": -1,
    "bodySize": -1,
    "_transferSize": 10526
  },
  "serverIPAddress": "[2606:4700:e2::ac40:840f]",
  "startedDateTime": "2023-03-06T13:57:01.939Z",
  "time": 48.423999978695065,
  "timings": {
    "blocked": 15.002999976772815,
    "dns": -1,
    "ssl": -1,
    "connect": -1,
    "send": 0.1200000000000001,
    "wait": 32.56599999320507,
    "receive": 0.7350000087171793
  }
};

const entry5: SimpleEntry = {
  "cache": {},
  "request": {
    "method": "GET",
    "url": "https://flusin.ovh/elephant.svg",
    "httpVersion": "HTTP/1.1",
    "headers": [
      {
        "name": "gatling-test",
        "value": "request-entry5"
      },
      {
        "name": "Accept",
        "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
      },
      {
        "name": "Accept-Encoding",
        "value": "gzip, deflate, br"
      },
      {
        "name": "Accept-Language",
        "value": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7"
      },
      {
        "name": "Cache-Control",
        "value": "no-cache"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Host",
        "value": "flusin.ovh"
      },
      {
        "name": "Pragma",
        "value": "no-cache"
      },
      {
        "name": "Referer",
        "value": "https://flusin.ovh/"
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
      },
      {
        "name": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
      },
      {
        "name": "sec-ch-ua",
        "value": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\""
      },
      {
        "name": "sec-ch-ua-mobile",
        "value": "?0"
      },
      {
        "name": "sec-ch-ua-platform",
        "value": "\"macOS\""
      }
    ],
    "queryString": [],
    "cookies": [],
    "headersSize": 644,
    "bodySize": 0
  },
  "response": {
    "status": 200,
    "statusText": "OK",
    "httpVersion": "HTTP/1.1",
    "headers": [
      {
        "name": "gatling-test",
        "value": "response-entry5"
      },
      {
        "name": "Accept-Ranges",
        "value": "bytes"
      },
      {
        "name": "Connection",
        "value": "keep-alive"
      },
      {
        "name": "Content-Length",
        "value": "2867"
      },
      {
        "name": "Content-Type",
        "value": "image/svg+xml"
      },
      {
        "name": "Date",
        "value": "Mon, 06 Mar 2023 13:57:02 GMT"
      },
      {
        "name": "ETag",
        "value": "\"5df26cfe-b33\""
      },
      {
        "name": "Last-Modified",
        "value": "Thu, 12 Dec 2019 16:38:22 GMT"
      },
      {
        "name": "Server",
        "value": "nginx/1.17.5"
      }
    ],
    "cookies": [],
    "content": {
      "size": 2867,
      "mimeType": "image/svg+xml",
      "compression": 0,
      "text": ""
    },
    "redirectURL": "",
    "headersSize": 243,
    "bodySize": 2867,
    "_transferSize": 3110
  },
  "serverIPAddress": "51.38.234.189",
  "startedDateTime": "2023-03-06T13:57:01.940Z",
  "time": 74.17599996551871,
  "timings": {
    "blocked": 54.65599996969476,
    "dns": -1,
    "ssl": -1,
    "connect": -1,
    "send": 0.119,
    "wait": 18.993999981731175,
    "receive": 0.4070000140927732,
  }
}

const mergedEntry234: SimpleEntry = {
  ...entry2,
  response: entry4.response
}

describe("mergeRedirectionRequests", () => {
  it("should return 3 requests", () => {
    expect(mergeRedirectionRequests([entry1, entry2, entry3, entry4, entry5])).toEqual([entry1, mergedEntry234, entry5]);
  });
});
