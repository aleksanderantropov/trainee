module.exports = function (string) {
	const { employeesNumber, opinions, subordination } = parse(string);

	let dismissalCandidates = [];
	for (const [boss, subordinate] of subordination) {
		const bossOpinion = opinions[boss - 1];
		const subordinateOpinion = opinions[subordinate - 1];

		if (bossOpinion !== subordinateOpinion) {
			if (!dismissalCandidates.length) {
				dismissalCandidates.push(boss, subordinate);
			} else if (dismissalCandidates.includes(subordinate)) {
				dismissalCandidates = [subordinate];
			} else if (dismissalCandidates.includes(boss)) {
				dismissalCandidates = [boss];
			} else {
				return 'NO\n';
			}
		}
	}

	const dismissed = dismissalCandidates.length
		? Math.max(...dismissalCandidates)
		: employeesNumber;

	return `YES\n${dismissed}\n`;

	function parse(string) {
		const lines = string.trim().split('\n');
		const employeesNumber = +lines.shift();
		const opinions = lines.pop().split(' ');
		const subordination = lines.map((line) => line.split(' '));

		return { employeesNumber, opinions, subordination };
	}
};
