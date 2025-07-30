function delay(ms, res) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(res), ms);
  });
}

async function startProcess() {
  const numInput = document.getElementById("ip").value;
  const resultDisplay = document.getElementById("output");

  let num = parseFloat(numInput);
  if (isNaN(num)) {
    resultDisplay.textContent = "Please enter a valid number.";
    return;
  }

  let result;

  result = await delay(2000, num);
  resultDisplay.textContent = `Result: ${result}`;

  result = await delay(1000, result * 2);
  resultDisplay.textContent = `Result: ${result}`;

  result = await delay(1000, result - 3);
  resultDisplay.textContent = `Result: ${result}`;

  result = await delay(1000, result / 2);
  resultDisplay.textContent = `Result: ${result}`;

  result = await delay(1000, result + 10);
  resultDisplay.textContent = `Final Result: ${result}`;
}

document.getElementById("btn").addEventListener("click", startProcess);