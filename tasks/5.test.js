const five = require('./5');

test('one', () => {
	const arg = `
3
2 1 3
2
`;
	expect(five(arg)).toBe('3');
});

test('two', () => {
	const arg = `
4
1 2 3 4
1
`;
	expect(five(arg)).toBe('10');
});

test('three', () => {
	const arg = `
5
1 2 2 3 1
3
`;
	expect(five(arg)).toBe('4');
});
