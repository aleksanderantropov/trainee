const three = require('./3');

test('one', () => {
	const arg = `
5
1 2
1 3
2 4
3 5
1 1 1 1 1
`;
	expect(three(arg)).toBe('YES\n5\n');
});

test('two', () => {
	const arg = `
7
1 2
1 3
2 4
3 6
3 7
0 0 1 0 0 1 1
`;
	expect(three(arg)).toBe('YES\n3\n');
});

test('three', () => {
	const arg = `
5
1 2
2 3
3 4
4 5
1 0 1 0 1
`;
	expect(three(arg)).toBe('NO\n');
});

test('four', () => {
	const arg = `
5
1 2
2 3
3 4
4 5
1 1 1 0 1
`;
	expect(three(arg)).toBe('YES\n4\n');
});

test('five', () => {
	const arg = `
5
1 2
1 3
3 4
4 5
0 1 1 1 1
`;
	expect(three(arg)).toBe('YES\n1\n');
});
