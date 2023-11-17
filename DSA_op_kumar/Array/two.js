// Given an array arr[] of size N and a number K, where K is smaller than the size of the array. Find the K’th smallest element in the given array. Given that all array elements are distinct.

// Examples:  

// Input: arr= [7, 10, 4, 3, 20, 15], K = 3 
// Output: 7

// Input: arr= [7, 10, 4, 3, 20, 15], K = 4 
// Output: 10 

function kthSmallestElement(arr, K) {
    // Sort the array in ascending order
    arr.sort(function(a, b) {
        return a - b;
    });

    // Return the K'th smallest element (indices are 0-based)
    return arr[K - 1];
}

let arr1 = [7, 10, 4, 3, 20, 15];
let K1 = 3;
console.log("K'th smallest element is:", kthSmallestElement(arr1, K1));
