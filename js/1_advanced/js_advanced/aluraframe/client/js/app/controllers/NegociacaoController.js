class NegociacaoController {

	constructor() {

		// abriviação da chamada de função para escrever menos e também para 'simular'
		// uma das principais vantagens do JQuery
		let $ = document.querySelector.bind(document);

		// '#' is used to get element by his ID
		this._dateField = $('#data');
		this._quantityField = $('#quantidade');
		this._valueField = $('#valor');

		this._listNegociations = new ListNegociation();
	}


	add(event) {

		event.preventDefault();

		let negociation = this._createNegociation();

		this._listNegociations.add(negociation);
		console.log(this._listNegociations._negociations);

		this._clearForm();
	}

	_createNegociation() {

		let date = DateHelper.textFormat(this._dateField.value);

		return new Negociacao (
			date,
			this._quantityField.value,
			this._valueField.value
		);
	}

	_clearForm() {
		this._dateField.value = '';
		this._dateField.focus();
		this._quantityField.value = 1;
		this._valueField.value = 0.0;
	}
}