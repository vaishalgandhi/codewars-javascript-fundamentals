// https://www.codewars.com/kata/5545f109004975ea66000086

function isDivisible(n, x, y) {
	// Check if any remider remains when n is divided by X or Y
	if((n%x == 0) && (n%y == 0)) {
		return true;
	}

	return false;
}