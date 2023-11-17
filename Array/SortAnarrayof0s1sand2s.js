// Sort an array of 0s, 1s and 2s

// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

/*
Input: 
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
Explanation:
0s 1s and 2s are segregated 
into ascending order.

*/
let N=5;
let arr=[0,2,1,2,0]
arr.sort((a ,b)=>a-b)
let bag=""
bag=bag+arr+" "
console.log(bag)