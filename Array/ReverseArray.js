// Given an array (or string), the task is to reverse the array/string.
var arr= [1, 2, 3, 4, 5, 6];
var n = 6;
let bag=""
for(let i=arr.length-1; i>=0; i--){
 bag=bag+arr[i]+" ";
}
console.log(bag)

// Expected output - 6 5 4 3 2 1

// Dry run --

/*
i=6 ; 6>=0 true , i=6-1=5
i=5 ; 5>=0; true, i=5-1=4
i=4; 4>=0; true, i=4-1=3
i=3; 3>=0; true, i=3-1=2
i=2 ; 2>=0; ture, i=2-1=1
i=1; 1>=0 true, i=1-1=0

bag=""+6+" "="6"
bag="6"+5+""="6 5"
bag="6 5"+4+" "="6 5 4"
bag="6 5 4"+3+" "="6 5 4 3"
bag="6 5 4 3 "+2+" "="6 5 4 3 2 "
bag="6 5 4 3 2 "+1+" "= "6 5 4 3 2 1"

final ans = 6 5 4 3 2 1



*/