module.exports = function (string) {
	const lines = string.trim().split('\n');
	lines.shift();
	let array = lines
		.shift()
		.split(' ')
		.map((n) => +n);

	const result = [];
	for (const command of lines) {
		const [type, n] = command.split(' ').map((n) => +n);
		switch (type) {
			case 0:
				result.push(array.includes(n) ? 'Yes' : 'No');
				break;
			case 1:
				array = array.map((num) => num + n);
				break;
			case 2:
				array.push(n);
				break;
			case 3:
				array = array.filter((num) => num !== n);
				break;
		}
	}

	return result.join('\n');
};
