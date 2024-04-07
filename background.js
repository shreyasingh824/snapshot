chrome.runtime.onInstalled.addListener(function() {
    console.log("Extension installed");
});

console.log("Bk.js is called");

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === "complete") {
        console.log("update trigger")
        // Delay sending the message to ensure content script is injected
        setTimeout(function() {
            captureAndDownloadScreenshot(tabId);
        }, 1000); // Adjust delay as needed
    }
});

function captureAndDownloadScreenshot(tabId) {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, function(dataUrl) {
        console.log("captureAndDownloadScreenshot function called")
        // print("captureAndDownloadScreenshot function called")
        if (!dataUrl) {
            console.error("Error: Unable to capture screenshot.");
           
        }
        // Send a message to the tab to initiate the download
        chrome.tabs.sendMessage(tabId, { action: "downloadScreenshot", dataUrl: dataUrl }, function(response) {
            if (chrome.runtime.lastError) {
                console.error("Error sending message:", chrome.runtime.lastError.message);
            } else {
                console.log("Message sent successfully");
            }
        });
    });
}
