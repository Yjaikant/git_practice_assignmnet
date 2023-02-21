// Code to check if a given number is prime or not.

let num=7;
let count=0;
for(let i=1;i<=num;i++){
	if(num%i===0){
	count++;
	}
}
(count==2)?console.log("It is a Prime Number"):console.log("It is not a Prime Number");
