import { DELETE_HAR, INIT, RECORDING, RECORDING_ACTIVE, RECORDING_INACTIVE, TOGGLE_RECORD_BUTTON, UPDATE_HAR_LIST } from "@src/constants";
import { RequestBodyDetails, RequestHeadersDetails, ResponseDetails } from "@src/interfaces/Details";
import { HarItem } from "@src/interfaces/HarItem";
import { formatDate } from "@src/utils/date";
import { createHar } from "@src/utils/har";

let recording = false

let harItems: Partial<HarItem>[] = []

let currentHarItem: Partial<HarItem>;

let responseDetailsList: ResponseDetails[] = []
let requestBodyDetailsList: RequestBodyDetails[] = []
let requestHeadersDetailsList: RequestHeadersDetails[] = []

const getCurrentTab = () => chrome.tabs.query({ active: true, lastFocusedWindow: true }).then(([tab]) => tab)

const updateHars = () => {
  chrome.runtime.sendMessage({ action: UPDATE_HAR_LIST, value: harItems })
}

const saveHAR = () => {
  currentHarItem.har = createHar(responseDetailsList, requestHeadersDetailsList, requestBodyDetailsList)

  harItems.push(currentHarItem)
  updateHars()
}

const deleteHar = (id: string): void => {
  harItems = harItems.filter(har => har.id !== id)
}

chrome.runtime.onMessage.addListener(
  (request) => {
    if (request.action === INIT) {
      chrome.runtime.sendMessage({ action: RECORDING, value: recording ? RECORDING_ACTIVE : RECORDING_INACTIVE })
      updateHars()
    } else if (request.action === DELETE_HAR) {
      deleteHar(request.value)
      updateHars()
    }
  })

const startRecording = (): void => {
  responseDetailsList = []
  requestBodyDetailsList = []
  requestHeadersDetailsList = []

  const date = formatDate(new Date());

  currentHarItem = {
    id: date,
    date,
    har: undefined
  }

  chrome.runtime.sendMessage({ action: RECORDING, value: RECORDING_ACTIVE })
  chrome.webRequest.onCompleted.addListener(recordRequest, { urls: ["<all_urls>"] }, ["responseHeaders"])
  chrome.webRequest.onBeforeRequest.addListener(beforeRequest, {urls: ["<all_urls>"]}, ["requestBody"]);
  chrome.webRequest.onBeforeSendHeaders.addListener(beforeSendHeaders, {urls: ["<all_urls>"]}, ["requestHeaders"]);
}

const stopRecording = () => {
  chrome.runtime.sendMessage({ action: RECORDING, value: RECORDING_INACTIVE })
  chrome.webRequest.onCompleted.removeListener(recordRequest)
  chrome.webRequest.onBeforeRequest.removeListener(beforeRequest)
  chrome.webRequest.onBeforeSendHeaders.removeListener(beforeSendHeaders)

  saveHAR()
}

const beforeRequest = (details: RequestBodyDetails) => {
  getCurrentTab().then((tab) => {
    if (tab && details.tabId === tab.id) {
      console.log("beforeRequest details:", details)
      requestBodyDetailsList.push(details);
    }
    })
}

const beforeSendHeaders = (details: RequestHeadersDetails) => {
  getCurrentTab().then((tab) => {
    if (tab && details.tabId === tab.id) {
      console.log("beforeSendHeaders details:", details)
      requestHeadersDetailsList.push(details);
    }
    })
}


const recordRequest = (details: ResponseDetails) => {
  getCurrentTab().then((tab) => {
    if (tab && details.tabId === tab.id) {
      console.log("recordRequest details:", details)

      if (responseDetailsList.length === 0 && tab.url) {
        const url = new URL(tab.url)
        currentHarItem.domain = url.hostname;
      }

      responseDetailsList.push(details)

    }
  })
}

chrome.runtime.onMessage.addListener(
  (request) => {
    if (request.action === TOGGLE_RECORD_BUTTON) {
      recording = !recording
      if (recording) {
        startRecording()
      } else {
        stopRecording()
      }
    }
  })
