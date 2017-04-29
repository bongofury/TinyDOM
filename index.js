function _outerSize(el, height, margin = false) {
	if (!el) return undefined;

	const offsetProp = height ? 'offsetHeight' : 'offsetWidth';
	const marginProps = height
	? ['marginTop', 'marginBottom']
	: ['marginLeft', 'marginRight'];
	const style = getComputedStyle(el);

	let size = el[offsetProp];

	if (margin) {
		size += parseInt(style[marginProps[0]], 10) + parseInt(style[marginProps[1]], 10);
	}

	return size;
}

function outerHeight(el, margin = false) {
	return _outerSize(el, true, margin);
}

function outerWidth(el, margin = false) {
	return _outerSize(el, false, margin);
}

export default {
	outerHeight,
	outerWidth,
};
