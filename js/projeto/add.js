
function addPatient(event) {

	event.preventDefault();
	
	var fieldName = document.querySelector("#campo-nome");
	var fieldWeight = document.querySelector("#campo-peso");
	var	fieldHeight = document.querySelector("#campo-altura");
	
	var newPatient = "<tr class='paciente'>"+
										"<td class='info-nome'>"+ fieldName.value +"</td>"+
										"<td class='info-peso' id='peso-1'>"+ fieldWeight.value +"</td>"+
										"<td class='info-altura' id='altura-1'>"+ fieldHeight.value +"</td>"+
										"<td class='info-imc' id='imc-1'></td>"+
									"</tr>";
	// querySelector with . is for select a class
	var table = document.querySelector(".table-patients");
	console.log(table);
	table.innerHTML = table.innerHTML + newPatient;
	
	fieldName.value = "";
	fieldWeight.value = "";
	fieldHeight.value = "";
}

// querySelector with # is for select an id
var buttonAdd = document.querySelector("#adicionar-paciente");

buttonAdd.onclick = addPatient
