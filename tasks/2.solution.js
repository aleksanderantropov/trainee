module.exports = function (length, string) {
	if (length % 2) {
		return 'NO';
	}

	const middle = string.length / 2;
	let diffs = 0;

	for (let i = 0, j = middle; i < middle; i++, j++) {
		if (string[i] !== string[j]) {
			diffs++;
		}
	}

	return diffs < 3 ? 'YES' : 'NO';
};
