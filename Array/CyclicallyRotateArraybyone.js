// Cyclically rotate an array by one

// Given an array, rotate the array by one position in clock-wise direction.

//        Input:
//        N = 5
//        A[] = {1, 2, 3, 4, 5}
//        Output:
//        5 1 2 3 4

let n=5;
let arr = [1,2,3,4,5]

let last=arr[n-1]  // last =arr[4]=>5, last=5
for(let i=n-1; i>0; i--){
    arr[i]=arr[i-1];   
}
arr[0]=last
console.log(arr)

// i= 4 , 4>0 true  , i=4-1=3  3>0 true  , i=3-1=2 2>0 true , i=2-1=1 1>0 true , i=0-0=0 0>0 false 
// arr[4]=arr[3] => 5= 4
// arr[3]=arr[2]=> 4= 3
// arr[2]=arr[1]=> 3= 2
// arr[1]=arr[0]=> 2= 1

// arr[0]=5
