// Find Kth smallest Element
// Given an array arr[] and an integer K where K is smaller than size of array, the task is to find the    Kth smallest element in the given array. It is given that all array elements are distinct.

// Note :-  l and r denotes the starting and ending index of the array.

/*

Input:
N = 6
arr[] = 7 10 4 3 20 15
K = 3
Output : 7
Explanation : 3rd smallest element in the given array is 7.

*/

let N=6;
let arr=[7,10,4,3,20,15]
let k=3

arr.sort((a,b)=>a-b);
// return arr[k-1]
console.log(arr[k-1])

// Dry run

// so first i am sorting the array 
// After sorting arr look like this arr[3 4 7 10 15 20]
// arr[3-1]=arr[2]=> 7 Ans-
