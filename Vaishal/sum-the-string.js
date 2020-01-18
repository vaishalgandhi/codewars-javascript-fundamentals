// https://www.codewars.com/kata/5966e33c4e686b508700002d

function sumStr(a,b) {
	// if empty character or spaced character then convert them into zero
	if(a == "" || a == " ") {
	  a = "0";
	}

	if(b == "" || b == " ") {
	  b = "0";
	}

	// Convert string into integere
	var sum = parseInt(a) + parseInt(b);

	// Convert integer to string
	return sum.toString();
}