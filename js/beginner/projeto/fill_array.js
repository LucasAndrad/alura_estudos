function walksArray() {

	var trsPacients = document.getElementsByClassName("paciente");
	var pacientsResult = [];
	var pacientsSize = (trsPacients.length) - 1;
	var currentPosition = 0;

	for(currentPosition = 0; currentPosition <= pacientsSize; currentPosition++) {

		var pacientTr = trsPacients[currentPosition];
		var tdName = pacientTr.getElementsByClassName("info-nome")[0];
		var tdPeso = pacientTr.getElementsByClassName("info-peso")[0];
		var tdAltura = pacientTr.getElementsByClassName("info-altura")[0];
		var tdImc = pacientTr.getElementsByClassName("info-imc")[0];
	
		var pacientAtual = {nome : tdName.textContent, 
		peso : tdPeso.textContent, 
		altura : tdAltura.textContent, 
		imc : tdImc
		};
	
		pacientAtual.imc = calcImc(pacientAtual);
		tdImc.textContent = pacientAtual.imc;
		pacientsResult[currentPosition] = pacientAtual;
	}
	return pacientsResult;

}

var button = document.getElementById("calcula-imcs");

function buttonActions() {
	walksArray();
	console.log("Imc's calculados!");
}

button.onclick = buttonActions;
// button.addEventListener("click", walksArray);
// TESTAR DO BUTTON.ONCLICK SE ELE FUNCIONA CHANDO UMA FUNCAO QUE POSSUI DUAS OU MAIS FUNCOES DENTRO


