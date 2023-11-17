// Find the Duplicate Number
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Input: nums = [1,3,4,2,2]
// Output: 2

let nums=[1,3,4,2,2]
let obj={}
for(let i=0; i<nums.length; i++){
    if(obj[nums[i]]==undefined){
        obj[nums[i]]=1
    }
    else{
        obj[nums[i]]++
    }
} 
//console.log(obj)
let max=-Infinity
let count=0;
for(let key in obj){
    if(obj[key]>max){
        max=obj[key]
        count=key
    }
}
console.log(count)