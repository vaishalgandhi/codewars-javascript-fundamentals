// https://www.codewars.com/kata/59706036f6e5d1e22d000016

function wordsToMarks(string){
	var count = 0, len = string.length;
	
	// Loop through each charecter of string
	for (i = 0; i < len; i++) {
		// Take one charecter at a time
		// minus 96 from it's character code
		// Character code start with 97, a is 97, b is 98 and so on
		count += string.charCodeAt(i) - 96;
	}
	
	return count;
}