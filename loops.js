// TODO: Create an array called numbers with values 1 through 5

let numbers = [1,2,3,4,5];
 

// TODO: Write a for loop that prints each number in the array
for (let m = 0; m < numbers.length; m++) {
console.log(numbers[m]);
  } 
console.log("---")

// TODO: Write a while loop that counts down from 5 to 1

let m = 4
  while (m >= 0) {
    console.log(numbers[m])
     m--
  }
  
console.log("---")
// TODO: Create a loop that prints only even numbers from the numbers array

let numbers2 = [1,2,3,4,5,6,7,8,9,10] 
  let i = 0
  // while loop
  while (i <= 6 ) {
    console.log(numbers2[i]);
    i++
  } 
// for loop
   for (let i = 0; i <= 6; i++) {
    console.log(numbers2[i]);
   }

console.log("---")
// TODO: Create a loop that calculates the sum of all numbers in the array
let sum = 0

  for (let i = 0; i < numbers2.length; i++) {
    sum = sum + numbers2[i]
    
  }
console.log(sum)
