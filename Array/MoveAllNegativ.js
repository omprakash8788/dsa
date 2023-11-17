// Move all the negative elements to one side of the array 
// Move all negative numbers to beginning and positive to end with constant extra space

// An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

let arr=[-12,11,-13,-5,6,-7,5,-3,-6]

let bag=""
for(let i=0; i<arr.length; i++){
    if(arr[i]<0){
   bag=bag+arr[i]+" "
    }
}
for(let i=0; i<arr.length; i++){
    if(arr[i]>0){
   bag=bag+arr[i]+" "
    }
}

console.log(bag)