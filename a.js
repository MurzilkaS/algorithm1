/*1. Print 1 - 135.Write a program using JavaScript that will print all the numbers from 1 to 135.

first number = 1, last number =135,
loop(for loop)
console.log(the solution)*/
/*for (let i = 1; i <= 135; i++){
    console.log (i);}*/

//2. Print Odd Numbers 1 - 135.Write a program using JavaScript that will
 //print all the odd numbers from 1 to 135.
//Print odd number firstElement = 1 lastElement = 135
//Create For loop from 1 to 135 
// check if element is odd numbers,
//console.log(the solution)
 
 /*for (let i = 1; i <= 135; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

/*3. Sum of Printed Numbers

Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:

Number is: 0 Sum: 0

Number is: 1 Sum: 1

Number is: 2 Sum: 3

Number is: 3 Sum: 6
...
You are NOT allowed to use an array to solve this exercise.*/

//sun the number
//For loop from 0 to 135
//create variable outside the for loop
//loop
//the result to the console

 /*let sum = 0;

 for(let x=0; x<135; x++){
 sum = sum+x;
console.log ('Number is:'+x+'Sum:'+x');
}

/*4. Print the elements of an array.Given an array X = [1,4,2,12], write a program that will iterate 
through the array and print all numbers on the screen. Your program should work with arrays of all sizes.*/
//Loop
//console.log(result)
 
//let array = [1,4,2,12];
// for (let i=0 ; i<array.length ; i++){
//    console.log (array[i])}

/*5. Find Max

Given an array X, write a program that would find the maximum value of the array. 
Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.*/
//create function
// create a variable the Max
// loop
// check if the current number of the array is greater than the number stored in the variable Max
// if number > Max
// console log result

/*function M(array) {
    let Max = 0;
    for (let i=0; i<array.length; i++){
      if(array[i] > Max){ 
          Max = array[i]
   }
}
console.log(Max)
}
M([35,-45, 12, 8, 10, 0, -7])


/*6. Get Average

Given an array X, write a program that will return the average value of all elements in the array. 
For example, for array X = [2,1,3] your output should be 2. */

//create variable outside the loop
//loop
//console.log(average)


/*let x = [1, 8 , 6,5];
let xSum= 0;

for (let i= 0 ; i<x.length ; i++){
    xSum = x[i] + xSum
}
console.log(xSum/x.length)

/*7. Eliminate the Negatives

Given an array X, write a program that will remove all negative numbers and replace them with a 0. 
For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].*/
// create a variable array that will store the min number
// iterate through the array
// check if the current number of the array is less than the 0 
// if so, overwrite the variable
// console log result

/*let arr= [46,658,-5,2.-12,-6];
let z = 0;
  let zero = [];
    for (let i=0;i<arr.length;i++){
      let x = arr[i];
      if ( x >= 0){
        zero.push(x);
}else
        zero.push(z);
    }
    console.log(zero)


/*8. Number to String

Write a program that takes an array of numbers and turns the negative values to strings.
 For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].*/

 // create a variable for resulted array
// after cheking, push the current number of the array to the new array, if the number is > = 0
// if not, push 'Turing'
// console log result

 /*let x = [1, -4, 0, -1];
 let r = [];

 for (let i = 0; i < x.length; i++) {
   let y = x[i];

   if (y >= 0) {
    r.push(y);
   } else {
    r.push("Turing");
   }
 }

 console.log(r); */



