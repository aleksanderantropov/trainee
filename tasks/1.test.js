const one = require('./1');

test('one', () => {
	expect(one('hq')).toBe('NO');
	expect(one('d2')).toBe('YES');
	expect(one('2b')).toBe('YES');
	expect(one('31')).toBe('NO');
});
