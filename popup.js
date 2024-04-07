// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("captureButton").addEventListener("click", function() {
//         // Delay sending the message to ensure content script is injected
//         setTimeout(function() {
//             chrome.runtime.sendMessage({ action: "takeScreenshot" }, function(response) {
//                 if (chrome.runtime.lastError) {
//                     console.error("Error sending message:", chrome.runtime.lastError.message);
//                 } else {
//                     console.log("Message sent successfully");
//                 }
//             });
//         }, 1000); // Adjust delay as needed
//     });
// });


console.log("popup.js is called");
document.addEventListener("DOMContentLoaded", function() {
            // Delay sending the message to ensure content script is injected
            setTimeout(function() {
                chrome.runtime.sendMessage({ action: "takeScreenshot" }, function(response) {
                    if (chrome.runtime.lastError) {
                        console.error("Error sending message:", chrome.runtime.lastError.message);
                    } else {
                        console.log("Message sent successfully");
                    }
                });
            }, 1000); // Adjust delay as needed
        });
    
    

