function delay(ms,res){
	return new Promise((resolve)=>{
		setTimeout(()=>resolve(res),ms)
	})
}

async function startProcess(){
	 const numInput = document.getElementById("ip").value;
	const resultDisplay = document.getElementById("output");

	let num = parseFloat(numInput)
	let result = await delay(2000, num);
	resultDisplay.textContent = `Result: ${result}`;

	let result = await delay(2000, num*2);
	resultDisplay.textContent = `Result: ${result}`;

	let result = await delay(1000, num-3);
	resultDisplay.textContent = `Result: ${result}`;

	let result = await delay(1000, num/2);
	resultDisplay.textContent = `Result: ${result}`;

	let result = await delay(1000, num+10);
	resultDisplay.textContent = `Result: ${result}`;
}
document.getElementById("btn").addEventListener("click", startProcess);