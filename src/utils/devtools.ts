import { Request } from "@src/interfaces/Request"
import { HarItem } from "@src/interfaces/HarItem";
import { formatDate } from "@src/utils/date";

let currentHarItem: HarItem;

const onRequestFinishedListener = (request: Request): void => {
  if (currentHarItem.requests.length === 0 && request.request.url) {
    currentHarItem.domain = new URL(request.request.url).hostname
  }

  request.getContent((content) => {
    if (content) {
      request.response.content.text = content;
    }

    currentHarItem.requests.push(request)
  })
}

export const startRecording = (): void => {
  const date = formatDate(new Date());

  currentHarItem = {
    id: date,
    date,
    domain: "no-domain",
    requests: []
  }

  chrome.devtools.network.onRequestFinished.addListener(onRequestFinishedListener);
}

export const stopRecording = (): HarItem => {
  chrome.devtools.network.onRequestFinished.removeListener(onRequestFinishedListener);
  return currentHarItem;
}
