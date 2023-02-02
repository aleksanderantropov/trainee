const four = require('./4');

test('four', () => {
	const firstArg = `
2
2 7
15
0 2
0 7
0 5
1 2
0 4
0 9
0 7
2 10
0 8
0 9
0 10
3 9
0 4
0 9
0 10
`;
	const firstAnswer = `Yes
Yes
No
Yes
Yes
No
No
Yes
Yes
Yes
No
Yes`;
	expect(four(firstArg)).toBe(firstAnswer);
});
