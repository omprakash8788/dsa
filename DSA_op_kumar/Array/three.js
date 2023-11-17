
// Count number of occurrences (or frequency) in a sorted array
// Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[]. Expected time complexity is O(Logn) 

// Examples: 
//   Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 2
//   Output: 4 // x (or 2) occurs 4 times in arr[]


   let arr=[1, 2, 2, 2, 2, 3, 4, 7 ,8 ,8]
   let  n = arr.length;
   let x = 2;
    let res = 0;
    for (let i=0; i<n; i++)
    {
        if (x == arr[i])
            res++;
    }
    console.log(res);

