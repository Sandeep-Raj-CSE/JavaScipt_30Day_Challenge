// -------------> task 1
const add=(num1,num2)=>{
console.log(`The sum of ${num1} and ${num2} is `,(num1+num2))
}
// add(12,19)

// -------------> task 2
const subtract=(num1,num2)=>{
console.log(`The subtract of ${num1} and ${num2} is `,(num1-num2))
}
// subtract(84,4)

// -------------> task 3
const multiply=(num1,num2)=>{
console.log(`The multiply of ${num1} and ${num2} is `,(num1*num2))
}
// multiply(12,4)

// -------------> task 4
const divide=(num1,num2)=>{
console.log(`The sum of ${num1} and ${num2} is `,(num1/num2))
}
// divide(24,6)

// -------------> task 5
const reminder=(num1,num2)=>{
   console.log(`The reminder of ${num1} and ${num2} is `,(num1%num2))
   }
// reminder(12,4)


// -------------> task 6
let var1 = 5;
let var2 =10;
var1+=var2;
// console.log("The use of += operator : ",var1)

// -------------> task 7
let var3 = 50;
let var4 =10;
var3-=var4;
// console.log("The use of += operator : ",var4)


// -------------> task 8
const compare=(num1,num2)=>{
   if(num1<num2){
      console.log(`${num1} is less then ${num2} `);
   }else{
      console.log(`${num1} is grater then ${num2} `);
   }
}
// compare(12,5);

// -------------> task 9
let number1 = 10;
let number2 = 1;

let result1 = number1 >= number2;
let result2 = number1 <= number2;

// console.log(`${number1} >= ${number2}: ${result1}`);  
// console.log(`${number1} <= ${number2}: ${result2}`);  

// -------------> task 10
let num1 = 10;
let num2 = "10";

let res1 = num1 == num2;
let res2 = num1 === num2;

// console.log(`num1 == num2: ${res1}`);  //true
// console.log(`num1 === num2: ${res2}`);  //false

// -------------> task 11
const num=20;
let num10 = 10;

if(num < num10 && num > 0){
console.log("num is less then num10 and it is positive ")
}else{
   console.log("num is less grater num10 and it is positive ") 
}

// -------------> task 12
let value1 = 10;
let value2 = 5;

let result = (value1 === 10) || (value2 === 10);

// console.log(`Result of (value1 === 10) || (value2 === 10): ${result}`);//true

// -------------> task 13

let val1 = 10;
let val2 = 5;

let ans = (val1 != val2)
// console.log("val1 != 10",ans);

// -------------> task 14

const posAndNeg=(num)=>{
   if(num>0){
      console.log(`Number ${num} is positive `)
   }else{
      console.log(`Number ${num} is negative `)
   }
}
posAndNeg(-2)
