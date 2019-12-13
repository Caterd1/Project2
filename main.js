Description
This is going to be an assignment helping you to learn and practice JavaScript. Finish the following questions in a JavaScript file. E.g. main.js


// Q1: Write the function printInt(n) taking one parameter n and print all natural numbers from 1 to n in console.

// A1:
	function printInt(n) {
     for(var i = 1; i <= n; i++) {
        console.log(i);
    }
}

//  printInt(100)

//  Q2: Write the function printIntRev(n) taking one parameter n and print all natural numbers in reverse in console (from n to 1).
Hint: reverse loop in Q1

// A2:function printIntRev(n) {
    	for(var i = n; i >= 1; i--) {
        console.log(i)
    }
}

//  Q3: Write the function checkInput(x) taking one parameter x and return the string ‘number’ if x is a number; return the string ‘string’ if x is a string; and return ‘boolean’ if x is a boolean. Otherwise returns -1. 

//  A3. 
	function checkInput(x) {
		if (typeof x ==="number" ) {
			return number
		}else if (typeof x === "string") {
			return "string";
		}else if (typeof x === "boolean") {
			return "boolean";
		}else {
			return -1
		}
	}


Examples:
       checkInput(5) ====> ‘number’
       checkInput(‘hello’)======> ‘string’
       checkInput(‘5’) ======> ‘string’
       checkInput(true)=====> boolean
       checkInput([1,2,3,4]) =====> -1
Hint: Check JavaScript type of 


// Q4: Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num, and return it 

// A4: 
		function simpleEvenAdding(num) {
		  var solution = 0;	
		//   add all numbers from 1 to num
		  var num = 0;
		  for (var i = 1; i <= num; i++) {
		// only add it if i is even   
	   if (i % 2 === 0)	{	  
		solution += i;
		  }
		} 
		return solution;
 }

 Examples: simpleEvenAdding(5) ======> 6 (because 2+4 = 6)
	       simpleEvenAdding(10) ======> 30 (because 2+4+6+8+10 = 30)
	       simpleEvenAdding(11) ======> 30 (because 2+4+6+8+10 = 30)
                  simpleEvenAdding(1) ======> 0
	       simpleEvenAdding(0) =======> 0
Hint: loop + if conditional + %

// Q5: Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word. The given words will be separated by only one space.

// A5:
	function letterCapitalize (str) {
		// separate words
		var length = words.length;
		for var i = 0; i < length; i++) {
		   solution.push(words[i][0]. toUpperCase( + words[i])	
		}

		 }

Examples:
		letterCapitalize(“hello world”) ===========> “Hello World”
letterCapitalize(“you cannot find the answer online”) =====>  “You Cannot Find The Answer Online”
	
Hint: There is a built-in function in JavaScript that change string into uppercase. There is also a function to separate string into an array of words. (split)


// Q6: Write the function simpleReverse(str) taking a string and return the string in reversed order.

// A6: 
	function reverseString(str) {
        str=str.split(");
        str=str.reverse(");
        str=str.join(");
        return str;
        } 
        reverseString("hello");

Examples:
		// simpleReverse(‘hello’) ======> ‘olleh’
		// simpleReverse(‘I Love Code’) ======> ‘edoC evoL I’

Hint: Think of how you can loop through a string or array of characters backwards to produce a new string


// Q7: Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between the maximum number and the minimum number (max - min). 

// A7: 
	function findDiff(arr) {
		// find min & max
		var min = arr[0]; 
		var max = arr[0];
		var length = arr.length;

		for(var i = 0;i<length;i++) {
			if(arr[i] < min) {
				min = arr[i]
			}
			if (arr[i] > max) {
				max = arr[i];
			}
		}
		max - min
		return max - min;
	  }

	  console.log(findDiff([1, 2, 4, 6, 20, 3]));
		// var min = Math.min(...arr);
		// var max = Math.max(...arr);

Examples:
	findDiff([1,2,4,6,20, 3]) =======> 19 (Because 20 - 1 = 19)
	findDiff([24, 22, 23, 22, 24]) =======> 2 (Because 24 - 22 = 2)
	findDiff([1, 1, 1, 1, 1]) =======> 0 
findDiff([1]) ======> 0;
findDiff([]) =======> 0;
Hint: Looking for max, min -> max - min.


// Q8: Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to. Separate the number of hours and minutes with a colon.
// A8:
	function timeConvert(num) {
	// hours
	var hour = parseInt(num / 60);
	// minutes
	var min = num % 60
	// combine them
	return hour + ";" + min;
}

Example:
		timeConvert(61) ======> 1:1
		timeConvert(63) =======> 1:3
		timeConvert(120)======> 2:0
		timeConvert(59)=======> 0:59
    	Hint: Dividing(/) and modulo(%) the number 60.0

// Q9: Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long. Assume Str is not empty string.

// A9:
	function findStr(str, long) {
		// solution 1
		var longLength = long.length;
		var strLength = str.length;
		// counter to count the number of str in long
		var counter = 0;
		for(var i = 0; i <= longLength - strLength; i++) {
			if(str === long.slice(i, i + str.length)) {
				counter++; 
			}
		}

		return counter;
	// solution 2
	return long.split(str).length - 1; 
}

Example:
	findStr(“hi”, “dasdhidasdahidashi”) =======> 3
	findStr(“o”, “daodo”) =======> 2
	findStr(“ha”,”abcde”)=======> 0
	findStr(“h”, “hihelloho”)======> 3
Hint: loop through the long, to check if there is any str



// Q10: Write the function selfDividingNumbers(left, right) taking two number bound as parameters and returns an array of every possible self dividing number between them, including the bounds.
function selfDividingNumbers(left, right) {
	// loop from left to right
	var solution = []
	for(var i = left; i <= right; i++) {
		// check if current number is self-dividing number
		if(number is selfdividingnumber) {
			solution.push(i);
		}
	}

	return solution;
}

// helper function to check if the num is self-dividing
function checkSelfDividing(num) {
	// change number into string format
	var numString = num.toString();
	// Split string into array of char
	var numArray = numString.split("");
	for(var i = 0; i < length; i++){
		// if num is not divisible by any digit
		if(num % parseInt(numArray[i]) !== 0) {
			return false;
		}
	}
	// if num is divisible by all digits
	return true;
}

Hint: A self-dividing number is a number that is divisible by every digit it contains. For example, 128 is a self-dividing number because 128 % 1 ==0, 128 % 2 == 0 and 128 % 8 == 0. 

Examples:
	selfDividingNumbers(1, 22) ========> [1,2,3,4,5,6,7,8,9,11,12,15,22]
	selfDividingNumbers(1, 10) =======> [1,2,3,4,5,6,7,8,9]
selfDividingNumbers(12, 21) =======> [12, 15]


// Q11: Write the function moveZeros(nums) taking an array of numbers and move all 0’s to the end of it while maintaining the relative order of the non-zero elements.  For example:
moveZeros([0,1,0,3,12]) ======> [1,3,12,0,0]
moveZeros([1,2,0,0,2,312,33,0,0]) ======> [1,2,2,312,33,0,0,0,0]
moveZeros([0,0,0]) ======> [0,0,0]
moveZeros([1,2,312,11,2]) =======> [1,2,312,11,2]

// A11:
	function moveZeros(nums) {

		var length = nums.length
		// loop through the array
		for(var i = 0; i < length; i++) {
			if(nums[i] === 0) {
				counter++;
			} else {
				solution.push(nums[i])
			}
		}

		// adding 0s
		while(counter > 0) {
			solution.push(0);
			counter--;
		}

		return solution;
	}



// Q12: Create an average(nums) function that calculates the average of an array of numbers.
Examples: 
	average([2, 6]) =====> 4
	average([2, 3, 3, 5, 7, 10]) ======> 5
average([7, 1432, 12, 13, 100]) ======> 312.8
average([]) ======> 0

Hint: Sum of all elements / number of elements

// Q12:
function average(nums) {
	// get the sum
	var solution = 0;
	var length = nums.length;
	for (var i = 0; i < length; i++) {
		sum +=nums[i];
	}

	// sum / length
	return sum / length;
}











// Deliverables: Create a new repository in your github and named it “JavaScript Practice”. Put all functions into one file called “main.js”. 
// Tagging a Release:  We will be using code repository tags (or releases) to "submit" assignments. When you consider your work complete and ready for evaluation (ready for release), go to your code repository in GitHub and generate a release by navigating to "releases". Then click on "Create a new release" and type the name of the tag in the input field labeled "Tag version". We will be using the following tags for the various assignments:

// v1.0(this assignment)
 
// If you need to resubmit the assignment then create a new tag by adding a version number, e.g.,
 v1.1, v1.2, etc...
 
// I will grade the very last release. The date/time you create the tag will be considered the date/time of submission.

