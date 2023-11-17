// Q - Find a pair who sum is equal to k 
let arr=[7,4,9,6,26,8,11,17]
let n=8;
let k=25;
// Approch 
// 1. sort the array 
// 2. Take two pointer L and R (Both pointers are move in opposite direction )
// 3. compare k value 
// 4. L - start from left side --->
// 5. R - start from right side <---
// arr.sort(function(a,b){return a-b})
// let L=0; 
// let R= n-1;
// //let sum=0
// while (L<R){
//     sum=arr[L]+arr[R]
//     if(sum==k){
//         console.log("true")
//     }
//     else if(sum<k){
//         L++
//     }
//     else{
//         R--
//     }
//     console.log("false")
// }
// //console.log("false")

