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

  let i = 0
  et i = 0
while (i < numbers.length) {
   if (numbers[i] % 2 === 0) {
      console.log(numbers[i])
   }
   i++
}

console.log("---")
// TODO: Create a loop that calculates the sum of all numbers in the array
let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
    
  }
console.log(sum)
