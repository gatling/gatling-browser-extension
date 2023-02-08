let recording = false

let entries = []

const getCurrentTab = () => chrome.tabs.query({ active: true, lastFocusedWindow: true }).then(([tab]) => tab)

const saveHAR = () => {
  const har = {
    "log": {
      "version": "1.2",
      "creator": {
        "name": "Gatling Browser Extension",
        "version": "0.0.1"
      },
      "entries": entries
    }
  }

  chrome.runtime.sendMessage({ action: "save-button", value: har })
}

chrome.runtime.onMessage.addListener(
  (request) => {
    if (request.action === "init") {
      chrome.runtime.sendMessage({ action: "update-record-button", className: "success-button", text: "Start recording" });
    }
  })


const startRecording = () => {
  chrome.runtime.sendMessage({ action: "update-record-button", className: "danger-button", text: "Stop recording" })
  chrome.webRequest.onCompleted.addListener(recordRequest, { urls: ["<all_urls>"] }, ["responseHeaders"])
}

const stopRecording = () => {
  chrome.runtime.sendMessage({ action: "update-record-button", className: "success-button", text: "Start recording" })
  chrome.webRequest.onCompleted.removeListener(recordRequest)

  saveHAR()
}

const recordRequest = (details) => {
  getCurrentTab().then((tab) => {
    if (tab && details.tabId === tab.id) {
      console.log("recordRequest:", details)
      const entry = {
        startedDateTime: new Date(details.timeStamp).toISOString(),
        request: {
          method: details.method,
          url: details.url,
          headers: details.requestHeaders,
        },
        response: {
          status: details.statusCode,
          statusText: details.statusLine,
          headers: details.responseHeaders,
          content: {
            size: details.responseHeaders["Content-Length"],
            mimeType: details.responseHeaders["Content-Type"],
            text: details.responseBody
          },
          redirectURL: "",
          bodySize: details.responseHeaders["Content-Length"],
          _transferSize: details.encodedDataLength
        }
      }
      entries.push(entry)
    }
  })
}

chrome.runtime.onMessage.addListener(
  (request) => {
    if (request.action === "toggle-recording") {
      recording = !recording
      if (recording) {
        startRecording()
      } else {
        stopRecording()
      }
    }
  })
