chrome.contextMenus.create({
  title: "Calculate: sqrt(%s)",
  contexts: ["selection"],
  onclick: function(info, tab) {
    const numbers = info.selectionText.match(/\d+/g);
    if (numbers && numbers.length === 3) {
      const numbersAsNumbers = numbers.map(Number);
      const product = numbersAsNumbers.reduce((product, num) => product * num, 1);
      const result = Math.sqrt(product / 3.5);
      const resultString = `Result: \sqrt{${product}} = ${result}`;

      // Copy result to clipboard
      navigator.clipboard.writeText(resultString)
       .then(() => {
          console.log("Result copied to clipboard:", resultString);
        })
       .catch((error) => {
          console.error("Unable to copy result to clipboard:", error);
        });

      // Display a toast message with the result
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = resultString;
      document.body.appendChild(toast);
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 3000);
    } else {
      // Display a toast message with an error message
      const toast = document.createElement('div');
      toast.className = 'toast error';
      toast.textContent = "Please select exactly three numbers separated by commas.";
      document.body.appendChild(toast);
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 3000);
    }
  },
});

// Add a toast CSS class to style the toast messages
const toastStyle = document.createElement('style');
toastStyle.textContent = `
 .toast {
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
 .toast.error {
    background-color: #f00;
  }
`;
document.head.appendChild(toastStyle);
