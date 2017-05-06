import test from 'ava';
import mainModule from '../index';

test('Main module should export the expected methods', (t) => {
	const methods = [
		'isVisible',
		'outerWidth',
		'outerHeight',
	];

	methods.forEach(method => t.true(mainModule[method] instanceof Function));
});
