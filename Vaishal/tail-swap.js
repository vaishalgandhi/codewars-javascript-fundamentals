// https://www.codewars.com/kata/5868812b15f0057e05000001

function tailSwap(arr) {
	// split string and store it in array
	var stringOneArray = arr[0].split(":");
	var stringTwoArray = arr[1].split(":");

	var stringOneTail = stringOneArray[1];

	// Swaping tail part
	stringOneArray[1] = stringTwoArray[1];
	stringTwoArray[1] = stringOneTail;

	// Join them back by the seperator
	return [stringOneArray.join(":"), stringTwoArray.join(":")];
}