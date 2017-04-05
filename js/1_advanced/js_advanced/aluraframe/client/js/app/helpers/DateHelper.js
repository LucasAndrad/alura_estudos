class DateHelper {

	constructor() {
		throw new Error("DateHelper can't be instantiate!");
	}


	static dateBrazilFormat(date) {

			return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
	}

	static textFormat(text) {

		if (!/\d{4}-\d{2}-\d{2}/.test(text)) {
			throw new Error("Must be in this format 'aaaa-mm-dd'");
		}

		return new Date(...text.split('-')
			.map((iten, count) => iten - count % 2 ));
	}

}