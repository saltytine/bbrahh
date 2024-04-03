chrome.contextMenus.create({
  title: "Calculate: sqrt(%s)",
  contexts: ["selection"],
  onclick: async (info) => {
    const numbers = info.selectionText.match(/\d+/g).map(Number);
    if (numbers.length === 3) {
      const result = Math.sqrt(numbers.reduce((product, num) => product * num, 1) / 3.5);
      await navigator.clipboard.writeText(result.toString());
      alert(`Result: ${result} (copied to clipboard)`);
    } else {
      alert("Please select exactly three numbers separated by commas.");
    }
  },
});
