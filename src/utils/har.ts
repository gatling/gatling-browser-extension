import {
  HttpHeader,
  RequestBody,
  RequestBodyDetails,
  RequestHeadersDetails,
  ResponseDetails
} from "@src/interfaces/Details";
import { HarLegacy } from "@src/interfaces/HarLegacy";

export const getHeaderValue = (responseHeaders: HttpHeader[] | undefined, name: string): string | undefined => responseHeaders?.find(header => header.name === name)?.value

const toPostDataText = (requestBody: RequestBody | null | undefined): string | undefined => {
  if (requestBody) {
    if (requestBody.formData) {
      return requestBody.formData.toString();
    } else if (requestBody.raw) {
      return requestBody.raw[0].file;
    }
  } else {
    return undefined;
  }
};
export const createHar = (responseDetailsList: ResponseDetails[], requestHeadersDetailsList: RequestHeadersDetails[], requestBodyDetailsList: RequestBodyDetails[]): HarLegacy => {
  const entries = responseDetailsList.map(details => {
    const requestHeaders = requestHeadersDetailsList.find(requestHeaderDetails => requestHeaderDetails.requestId === details.requestId)?.requestHeaders || [];

    const contentLength = getHeaderValue(details.responseHeaders, "content-length");
    const contentType = getHeaderValue(details.responseHeaders, "content-type");

    const requestBody = requestBodyDetailsList.find(requestBodyDetails => requestBodyDetails.requestId === details.requestId)?.requestBody;

    let postData = null;

    if (requestBody) {
      postData = {
        mimeType: getHeaderValue(requestHeaders, "content-length"),
        text: toPostDataText(requestBody)
      }
    }


    return {
      startedDateTime: new Date(details.timeStamp).toISOString(),
      request: {
        method: details.method,
        url: details.url,
        headers: requestHeaders,
        postData,
      },
      response: {
        status: details.statusCode,
        statusText: details.statusLine,
        headers: details.responseHeaders,
        content: {
          size: contentLength,
          mimeType: contentType,
          // text: requestBody
        },
        redirectURL: "",
        bodySize: contentLength,
        // _transferSize: details.encodedDataLength
      }
    }
  })

  return {
    "log": {
      "version": "1.2",
      "creator": {
        "name": "Gatling Browser Extension",
        "version": "1.0.0"
      },
      "entries": entries
    }
  }
}
