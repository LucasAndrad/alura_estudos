function calcImc(pacient) {
// formula IMC = peso/ (altura*altura);
		if(pacient.altura != 0) {
			var imc = pacient.peso / (pacient.altura * pacient.altura);
			return imc;	
		}
		else{
			console.log("Altura não pode ser zero");
		}
}

