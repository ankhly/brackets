module.exports = function check(str, bracketsConfig) {
	let stack = [];
	let breckets = {
		')': '(',
		'}': '{',
		']': '[',
		'|': '|',
	}
	for (let index = 0; index < str.length; index++) {
		const el = str[index];
		if (closeBrack(el)) {
			if (breckets[el] !== stack.pop()) {
				return false;
			}
		} else {
			stack.push(el);
		}
	}
	if (stack.length === 0) {
		return true;
	} else {
		return false;
	}
}

function closeBrack(ch) {
	if ([')', '}', ']',].indexOf(ch) !== -1) {
		return true;
	}
}