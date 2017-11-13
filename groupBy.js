function groupBy(array, property) {
	return array.reduce((obj, item) => {
		const key = item[property];

		if (key in obj) {
			return {
				...obj,
				[key]: [...obj[key], item],
			};
		}

		return {
			...obj,
			[key]: [item]
		};
	}, {});
}