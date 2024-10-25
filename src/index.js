module.exports = function check(str, bracketsConfig) {
	const stack = [];
	const openBrackets = {};
	const closeBrackets = {};
	bracketsConfig.forEach(([open, close]) => {
		openBrackets[open] = close;
		closeBrackets[close] = open;
	});
	for (let char of str) {
		if (openBrackets[char]) {
			if (openBrackets[char] === char) {
				if (stack[stack.length - 1] === char) {
					stack.pop();
				} else {
					stack.push(char);
				}
			} else {
				stack.push(char);
			}
		} else if (closeBrackets[char]) {
			if (stack.pop() !== closeBrackets[char]) {
				return false;
			}
		}
	}
	return stack.length === 0;
};
