// let arr=[1,2,45,2,3,34];
// let newa=arr.map((x) => x*2);
// let ne=arr.filter((x) => x%2 == 0).map((x) => x*2); 
// let arr=[1,2,45,2,3,34];
// let sum=arr.reduce((x,y) => x+y ,0);
// console.log(sum);
let arr=[1,2,45,2,3,34];
let newa =arr.filter((x) => x%2 == 0)
         .map((x) => x*2)
         .reduce((x,y) => x+y,0);
         console.log(newa);

