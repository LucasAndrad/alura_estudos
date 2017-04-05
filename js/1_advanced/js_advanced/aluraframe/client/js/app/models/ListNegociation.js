class ListNegociation {

	constructor() {
		this._negociations = [];
	}

	add(negociation) {
		this._negociations.push(negociation);
	}

	get negociation() {
		return [].concat(this._negociations);
	}
}