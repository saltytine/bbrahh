chrome.contextMenus.create({
  title: "Calculate: sqrt(%s)",
  contexts: ["selection"],
  onclick: async (info) => {
    console.log("Starting calculation...");
    const numbers = info.selectionText.match(/\d+/g).map(Number);
    if (numbers.length === 3) {
      console.log("Calculating result...");
      const result = Math.sqrt(numbers.reduce((product, num) => product * num, 1) / 3.5);
      console.log(`Result: ${result}`);
      try {
        await navigator.clipboard.writeText(result.toString());
        console.log("Result copied to clipboard.");
        alert(`Result: ${result} (copied to clipboard)`);
      } catch (error) {
        console.error("Error copying result to clipboard:", error);
        alert("Failed to copy result to clipboard. Please check your browser settings or try again later.");
      }
    } else {
      console.log("Invalid selection.");
      alert("Please select exactly three numbers separated by commas.");
    }
    console.log("Done.");
  },
});
