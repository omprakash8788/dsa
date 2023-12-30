// Find a peak element which is not smaller than its neighbours

// Given an array arr of n elements that is first strictly increasing and then maybe strictly decreasing, find the maximum element in the array.

// Note: If the array is increasing then just print the last element will be the maximum value.

// Input: array= [5, 10, 20, 15]
// Output: 20
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

let arr= [5, 10, 39, 15]
let n=arr.length

function findPeakElement(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] > arr[mid + 1]) {
            // If mid element is greater than the next element, it might be the peak
            right = mid;
        } else {
            // If mid element is smaller than the next element, peak must be in the right half
            left = mid + 1;
        }
    }

    // 'left' is now the peak element
    return arr[left];
    // console.log(arr[left]);
}

let peakElement = findPeakElement(arr);
console.log("Peak element is:", peakElement); // Output: 20


