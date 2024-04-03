chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'copyResultToClipboard') {
    const resultString = request.data;

    // Copy result to clipboard
    navigator.clipboard.writeText(resultString)
     .then(() => {
        console.log("Result copied to clipboard:", resultString);
      })
     .catch((error) => {
        console.error("Unable to copy result to clipboard:", error);
      });
  }
});
