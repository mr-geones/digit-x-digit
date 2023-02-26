function squareDigits(num) {
	const a = String(num).split("").map(x => Number(x)).map(x => Math.pow(x, 2)).join('');
	return Number(a);
}
