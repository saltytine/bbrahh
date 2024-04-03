chrome.contextMenus.create({
  title: "Calculate: sqrt(%s)",
  contexts: ["selection"],
  onclick: function(info, tab) {
    const numbers = info.selectionText.match(/\d+/g).map(Number);
    if (numbers && numbers.length === 3) {
      const result = Math.sqrt(numbers.reduce((product, num) => product * num, 1) / 3.5);
      const resultString = `Result: ${result}`;

      // Copy result to clipboard
      navigator.clipboard.writeText(resultString)
        .then(() => {
          console.log("Result copied to clipboard:", resultString);
        })
        .catch((error) => {
          console.error("Unable to copy result to clipboard:", error);
        });
    } else {
      alert("Please select exactly three numbers separated by commas.");
    }
  },
});
