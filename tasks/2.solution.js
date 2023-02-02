module.exports = function (length, string) {
	if (length % 2) {
		return 'NO';
	}

	const middle = string.length / 2;
	const firstDict = getDict(0, middle);
	const secondDict = getDict(middle, string.length);

	for (const key in firstDict) {
		if (firstDict[key] !== secondDict[key]) {
			return 'NO';
		}
	}

	return 'YES';

	function getDict(start, end) {
		const dict = {};

		for (; start < end; start++) {
			const char = string[start];

			if (!dict[char]) {
				dict[char] = 0;
			}
			dict[char]++;
		}

		return dict;
	}
};
