const two = require('./2.solution');

test('two', () => {
	expect(two(6, 'aababa')).toBe('YES');
	expect(two(5, 'aaaaa')).toBe('NO');
	expect(two(8, 'aaaabbbb')).toBe('NO');
	expect(two(8, 'baababba')).toBe('NO');
});
