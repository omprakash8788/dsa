// Count digits.
// You are given an array , stored in a variable with the size arr.
// You have to find the count of 0's , 1's and 2's
let arr=[0,1,2,2,1,0,2]
let count0=0; //2
let count1=0;  //2
let count2=0; //3
for(let i=0; i<arr.length; i++){
    if(arr[i]==0){
        count0++
    }
    else if(arr[i]==1){
        count1++
    }
    else if(arr[i]==2){
        count2++
    }
}
console.log(count0,count1,count2);



