// You are invited to work on this challenge in pairs.

////////////////////////////////// PART 1: FUNCTIONS 1-5 ////////////////////////////////////////

//////////////////////////////////
// input: 4 
// output: true

// input: 7
// output: false

// Returns true if number is even and false if number is odd.

function isEven(num){
	if (typeof num !== "number"){
		return "Error: send a number";
	} 
	
	if(num%2 ==0 ){
		return true;
	}
	return false;

}
console.log(isEven(4));
console.log(isEven(7));

////////////////////////////////
// input: 8
// output: false

// input 15
// output: true

// Returns true if number is divisible by 3 and false if not.
function isDivisibleBy3(num) {
	if(typeof num !== "number"){
		return "Error : u should send a number";
	}
	// check if the number is divisible by 3
	if(num % 3 == 0){
		return true;
	}
	return false;
}
console.log(isDivisibleBy3(8));
console.log(isDivisibleBy3(15));

//////////////////////////////////
// input: undefined
// output: true

// input: i, where i = 4
// output: false

// returns true if value is undefined and false if not.
function isUndefined(value) {
	if(typeof value == "undefined"){
		return true;
	}
	return false;
}
console.log(isUndefined(undefined));
var i = 4;
console.log(isUndefined(i));

//////////////////////////////////
// input: 16
// output: true

// input: 23
// output: false

// returns true if input number is square and false if not.
function isSquareNumber(num) {
	if(typeof num !== "number"){
		return "Error : u should send a number";
	}
	var x= Math.sqrt(num);
	if(Number.isInteger(x)){
		return true;
	}
	return false;

}
console.log(isSquareNumber(16));
console.log(isSquareNumber(23));
console.log(isSquareNumber(-16));

//////////////////////////////////
// input: [5, 4, 3, 2, 1], 2
// output: [2, 1]

// input: [5, 4, 3, 2, 1], 1
// output: 1

// input: ['a', 'b', 'c'], 2
// output: ['b', 'c']

//Returns the last element of an array. Passing "count" will return the last "count" elements of the array.
function last(list, count) {
	// check if it is an array
	if(Array.isarra)
	// slice metod
	return list.slice(list.length- count, list.length);

}
console.log(last([5, 4, 3, 2, 1], 2));
console.log(last([5, 4, 3, 2, 1], 1));


////////////////////////////////// PART 2: FUNCTIONS 6-10 ////////////////////////////////////////

//////////////////////////////////
// input: ['hello', 'goodbye', 'excellent']
// output: ['he', 'go', 'ex']

// gets the first two letters of each word in the list.
function getFirstTwoLettersOfEachWord(list) {

}

//////////////////////////////////
// input: "Hello Gharam"
// output: "marahG olleH"

// reverses a string input
function reverseString(str) {

}

//////////////////////////////////
// input: [1, 2, 3], 3
// output: true

// input: [1, 2, 3], 8
// output: false

//Returns true if the value is present in the list. 
function contains(list, value) {

}

//////////////////////////////////
// input: [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}], 'name'
// output: ["moe", "larry", "curly"]

// A tool for extracting a list of property values.
function pluck(list, propertyName) {

}
//////////////////////////////////
// input: [1, 2, 3], 3
// output: 2

// input: ['a', 'b', 'c'], 'a'
// output: 0

// input: ['a', 'b', 'c'], 'e'
// output: -1

//Returns the index at which value can be found in the array, or -1 if value is not present in the array.
function indexOf(list, value) {

}
