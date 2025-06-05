document.getElementById("convertBtn").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("inr-amount").value);
  const currency = document.getElementById("currency").value;
  const resultDiv = document.getElementById("conversion-result");

  if (!amount || amount <= 0) {
    resultDiv.innerHTML = "Please enter a valid INR amount.";
    resultDiv.style.color = "black";
    return;
  }

  let convertedAmount = 0;
  let symbol = "";

  switch (currency) {
    case "USD":
      convertedAmount = amount / 83;
      symbol = "$";
      break;
    case "EUR":
      convertedAmount = amount / 89;
      symbol = "€";
      break;
    case "GBP":
      convertedAmount = amount / 104;
      symbol = "£";
      break;
  }

  resultDiv.innerHTML = `Converted Amount: ${symbol}${convertedAmount.toFixed(2)}`;
  resultDiv.style.color = "green";
});
