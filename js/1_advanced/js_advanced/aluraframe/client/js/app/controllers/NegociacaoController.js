class NegociacaoController {

	constructor() {

		// abriviação da chamada de função para escrever menos e também para 'simular'
		// uma das principais vantagens do JQuery
		let $ = document.querySelector.bind(document);

		// '#' is used to get element by his ID
		this._dateField = $('#data');
		this._quantityField = $('#quantidade');
		this._valueField = $('#valor');
	}


	add(event) {
		event.preventDefault();

		let negociation = new Negociacao(
			this._dateField.value,
			this._quantityField.value,
			this._valueField.value
		);

		console.log(negociation);	
	}
}