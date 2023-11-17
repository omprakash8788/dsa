// Find Subarray with given sum | Set 1 (Non-negative Numbers)

// Given an array arr[] of non-negative integers and an integer sum, find a subarray that adds to a given sum.

// Note: There may be more than one subarray with sum as the given sum, print first such subarray. 

// Examples: 

// Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
// Output: Sum found between indexes 2 and 4
// Explanation: Sum of elements between indices 2 and 4 is 20 + 3 + 10 = 33
let arr = [1, 4, 20, 3, 10, 5];
    let sum=33;
    let left = 0;
    let right = 0;
    let currentSum = 0;

    while (right < arr.length) {
        currentSum += arr[right];

        while (currentSum > sum) {
            currentSum -= arr[left];
            left++;
        }

        if (currentSum === sum) {
            console.log(currentSum);
            return;
        }

        right++;
    }

    console.log("No subarray found with the given sum");

