module.exports = function (string) {
	let hasDigit = false;
	let hasChar = false;

	for (const char of string) {
		if (Number.isInteger(+char)) {
			hasDigit = true;
		} else {
			hasChar = true;
		}
	}

	return hasDigit && hasChar ? 'YES' : 'NO';
};
