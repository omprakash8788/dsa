// Move all negative numbers to beginning and positive to end with constant extra space

// An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

// Examples : 

// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

function rearrangeArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Move the left pointer to find a negative number
        while (arr[left] < 0) {
            left++;
        }

        // Move the right pointer to find a positive number
        while (arr[right] >= 0) {
            right--;
        }

        // Swap arr[left] and arr[right] if left is less than or equal to right
        if (left <= right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    // Array is rearranged with negative numbers on the left and positive numbers on the right
    return arr;
}

// Example usage
let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
let rearrangedArray = rearrangeArray(arr);
console.log("Rearranged array:", rearrangedArray);
