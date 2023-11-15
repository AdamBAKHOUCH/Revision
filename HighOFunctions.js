// each : 

// 0.its good to know that we have, Two Forms of Functions

 // function declaration 
 function square(x) { 
       return x * x; 
 } 
 // function expression 
 var square = function(x) { 
       return x * x; 
 }; 
 
// 1.We have two ways of writing a function. The function declaration is what we've used so far, and the function expression is new to us. Rewrite the following function declarations using a function expression:

// 1. 
 function cube(x) { 
       return x * x * x; 
 } 
 // 2. 
 function fullname(first, last) { 
       return first + ' ' + last; 
 } 
 // 3. 
 function power(base, exp) { 
       if (exp === 0) { 
       return 1; 
       } 
       return base * power(base, exp - 1); 
 } 
 // 4. 
 function sumCubes(numbers) { 
       var total = 0; 
       for (var i = 0; i < numbers.length; i++) { 
             total = total + cube(numbers[i]); 
       } 
       return total; 
 }
// 2.Write each as seen below in your main.js file.

 function each(array, func) { 
       for (var i = 0; i < array.length; i++) { 
             func(array[i]); 
       } 
 }
// 3.Finish the implementation of sumSquares below (using each):

 function sumSquares(numbers) { 
       var total = 0; 
       // ... 
       return total; 
 }
// 4.Rewrite sumCubes using each:

 function sumCubes(numbers) { 
       var total = 0; 
       for (var i = 0; i < numbers.length; i++) { 
             total = total + cube(numbers[i]); 
       } 
       return total; 
 }
// 5.Write a function called product that calculates the product of an array of numbers using a for loop; then, refactor it to use each

// 6.Write a function called cubeAll that cubes each number in an array, and returns an array of all the numbers cubed using a for loop; then, refactor it to use each.

// 7.Write a function called odds that accepts an array as a parameter and returns an array of just the odd numbers. If you wrote it using each, great! If you used anything else, refactor it to use each.


//improved each :
 function each(array, func) { 
       for (var i = 0; i < array.length; i++) { 
             func(array[i], i); 
       } 
 }
// 1.Using our new version of each, write a function called indexedExponentials that, when given an array of numbers as an argument, returns a new array of numbers where each number has been raised to the power of its index, e.g.:

 function indexedExponentials(numbers) { 
       // TODO: your code here 
 } 
 indexedExponentials([2, 5, 7, 4]); // => [2^0, 5^1, 7^2, 4^3] => [1, 5, 49, 64]
// 2.Write a function called evenIndexedOddNumbers that, when given an array of numbers as an argument, returns an array of only the odd numbers with even indices.

 function evenIndexedOddNumbers(numbers) { 
       // TODO: Your code here 
 } 
 evenIndexedOddNumbers([1, 3, 3, 4, 7, 10]); // => [1, 3, 7]
// 3.Write a function called evenIndexedEvenLengths (yeah, it is long) that accepts an array of strings as a parameter, and returns only the strings that are found at an even index that also have an even length, e.g.:

 function evenIndexedEvenLengths(strings) { 
       // TODO: your code here 
 } 
 evenIndexedEvenLengths(['lion', 'monkey', 'aardvaark', 'cat', 'doge']); 
        // => ['lion', 'doge'] 
 evenIndexedEvenLengths(['red', 'green', 'purple', 'blue', 'yellow']); 
      // => ['purple', 'yellow']


// Map :

// Basic Requirements
// 0. Map will be like :

 function each(array, func) { 
       for (var i = 0; i < array.length; i++) { 
             func(array[i], i); 
       } 
 } 
 function map(array, f) { 
       var acc = []; 
       each(array, function(element, i) { 
             acc.push(f(element, i)); 
       }); 
       return acc; 
 }
// 1. We can rewrite the ages function using map like this:

 var people = [ 
       {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
       {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
       {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
       {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
       {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
 ]; 
 function ages(people) { 
       return map(people, function(person) { 
             return person.age;}); 
 }
// Rewrite the functions firstNames, lastNames and fullNames using map as shown above.
// 2. Given the function abs that computes the absolute value, finish the invocation of map that should compute the absolute value of each number in its array argument.

 function abs(x) { 
       if (x >= 0) { 
             return x; 
       } 
       return -x; 
 } 
    //    map([1, -2, 37, -100, -8, 5], ???); 
       // => [1, 2, 37, 100, 8, 5]
// HINT: To test this, it may be easiest to paste all of the above into a console.
// 3. We're going to write a function maximum that, given an array of arrays of numbers as an argument, returns a new array containing the maximum number of each inner array. That's a bit of a mouthful, so let's break it down:

 // our argument would look like this: 
 var sampleInput = [ // it's an array 
 [1, 3, 2], // of arrays of numbers 
 [4, 23, 100], 
 [7, 6, 3, -2] 
 ]; 
 // and we want to be able to use maximums to do this: 
 maximums(sampleInput); // => [3, 100, 7] 
//  Part One: Let's start by writing a function max that, when given an array of numbers computes the maximum number in that array. 
//  You will want to use each for this. 
 function max(numbers) { 
       // YOUR CODE HERE 
 } 
 max([1, 3, 2]); // => 3 
 max([4, 23, 100]); // => 100 
 
//  Part Two: Now that you have a function that computes the the maximum number in an array of numbers, 
//  use map to transform each array in the sampleInput into its maximum by completing the maximums function: 
 function maximums(arrays) { 
       return // YOUR CODE HERE 
 } 



 //Reduce : 

//  Basic Requirements
// 0. Reduce will be like :

 function reduce(array, f, start) { 
       var acc = start; 
       each(array, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }
// 1. We've shown that we can write the function sum -- which sums an array of numbers -- using reduce like this (see slides for more):

 function sum(numbers) { 
       return reduce(numbers, function(total, number) { 
             return total + number; 
       }, 0); 
 } 
//  function product(numbers) { 
//        return reduce(???, function(???, number) { 
//              return ??? * number; 
//        }, ???); 
//  }
// 2. Rewrite the averageAge function from the warmup using reduce. The function signature and people array are copied below for your convenience:

 var people = [ 
       {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
       {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
       {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
       {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
       {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
 ]; 
 function averageAge(people) { 
       // First you'll need to compute the sum of all the ages 
       // Second, divide the sum by the number of people (people.length) 
       // YOUR CODE HERE 
 }
// 3. The range function from yesterday looks like this:

 function range(start, end) { 
       var acc = []; 
       for (var i = start; i < end; i++) { 
             acc.push(i); 
       } 
       return acc; 
 } 
//  Using range and reduce, complete the factorial function below that should compute the factorial of n. 
 function factorial(n) { 
       // YOUR CODE HERE 
 }
//  HINT: If you cannot think of how to do this, it may help to first try writing the function using each, and then refactor it to use range & reduce.
