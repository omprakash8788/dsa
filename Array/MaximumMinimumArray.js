//Maximum and minimum of an array

// Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

let arr = [1000, 11, 445, 1, 330, 3000]
let N = 6

let min=Infinity
let max= -Infinity


for(let i=0; i<N; i++){
   if(min>arr[i]){
    min=arr[i]
   }
   if(max<arr[i]){
    max=arr[i]
   }
}
console.log("Min is :",min)
console.log("Max is :", max)

// Dry Run 
/*
i=0; i<6 true, 

if()

*/