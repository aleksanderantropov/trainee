module.exports = function (string) {
	const lines = string.trim().split('\n');
	const nums = lines[1].split(' ').map((n) => +n);
	const limit = +lines[2];

	let result = 0;
	const dict = {};
	let size = 0;
	for (let i = 0, j = 0; i < nums.length; i++) {
		while (j < nums.length && size < limit) {
			if (!dict[nums[j]]) {
				dict[nums[j]] = 0;
				size++;
			}
			dict[nums[j]]++;
			j++;
		}
		if (size >= limit) {
			result += nums.length - j + 1;
		}

		dict[nums[i]]--;
		if (!dict[nums[i]]) {
			size--;
		}
	}

	return result.toString();
};
