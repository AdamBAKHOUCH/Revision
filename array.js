// 1. Declare a variable, call it myArray, and assign it to an array that contains three elements.

// 2. Refer to the following array for the next three questions: [‘dog’, ‘cat’, ‘fox’, ‘monkey’].

// a- What is the index of 'dog'? index=0 
// b- What is the index of 'fox'? index=2
// c- What is the index of 'monkey'index=3
// 3.Fix the typos in the following arrays, make it one correct array

// var array=[1, 2, 3, 4, 5, 6, 7,'The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the lazy', 'dog',true,false, true]
// 4. Write a function called emptyArray that takes no parameters and returns an empty array.

function emptyArray() {
   //Write your code here
   return([])
   
}  
// emptyArray() -> []
// 5. Write a function called numbersArray that takes no parameters and returns an array of numbers from 1 to 5.

function numbersArray() {
   //Write your code here 
   return([1,2,3,4,5])
}  
// numbersArray() -> [1, 2, 3, 4, 5]
// 6. Write a function called booleansArray that takes no parameters and returns an array of three true booleans

function booleansArray() {
   //Write your code here 
return([true, true, true])

}  
// booleansArray() -> [true, true, true]
// 7. Write a function called stringsArray that takes no parameters and returns an array of two strings, your first name and last name.

function stringsArray() {
   //Write your code here 
   return([Adam,Bakhouch])
}  
// stringsArray() -> ['Ahmed', 'Vega']
// 8. Write a function called arrayLength that takes an array as a parameter and returns the length of that array.

function arrayLength(array) {
   //Write your code here
   return(array.length)
}  
// arrayLength([1, 2, 3, 4]) -> 4 
// arrayLength([]) -> 0




//iterating over arrays : 

// 1.Write a function called arrayFor that takes an array as a parameter, loops through all the elements using For Loop and prints all elements of the array in the console using console.log.

function arrayFor(array) {
   //Write your code here
   for(var i=0,i<=array.length,i++) {
   console.log(array[i])
}
}  
// arrayFor([1, 2, 3]) ->    1                           
2                           
3
// 2.Write a function called arrayWhile that takes an array as a parameter, loops through all the elements using While Loop and prints all elements of the array in the console using console.log.

// arrayWhile([1, 2, 3]) ->    1                           

// 3.Write a function called sum that takes an array of numbers as a parameter and returns the sum of the numbers in the array.

function sum(array) {
   //Write your code here 
}  
// sum([1, 2, 3]) -> 6 
// sum([1, 2, 4]) -> 7
// 4.Write a function called sumEveryOther that takes an array of numbers as a parameter and returns the summation of every other number starting from the beginning of the array.

function sumEveryOther(array) {
   //Write your code here 
}  
// sumEveryOther([1, 2, 3, 4, 5]) -> 9 
// sumEveryOther([1, 2, 4]) -> 5
// 5.Write a function called sumStartAt that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the inputted index, until the end of the array.

function sumStartAt(array, index) {
for (index;index<=array.length;index++){
   console.log(array[index])
}
}  
// sumStartAt([1, 2, 3, 4, 5], 1) -> 14 
// sumStartAt([1, 2, 4], 2) -> 4 
// 6.Write a function called sumUntil that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the index 0, until the index parameter.

function sumUntil(array, index) {
   //Write your code here
 }  
// sumUntil([1, 2, 3, 4, 5], 2) -> 6 
// sumUntil([1, 2, 4], 1) -> 3 