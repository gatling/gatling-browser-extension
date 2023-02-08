const recordButton = document.getElementById("toggle-recording")

recordButton.addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "toggle-recording" })
})

chrome.runtime.onMessage.addListener(
  (request) => {
    if (request.action === "update-record-button") {
      recordButton.textContent = request.text
      recordButton.className = request.className
    } else if (request.action === "save-button") {
      const file = new Blob([JSON.stringify(request.value, undefined, 4)], { type: "application/json" })

      const a = document.createElement("a")
      a.href = URL.createObjectURL(file)
      a.download = "har.json"
      a.click()
    }
  })

chrome.runtime.sendMessage({ action: "init" })
