// var username = "hello"                   //functional-scope
// {
//     var username = "vanakam"
//     console.log(username)
// }
// console.log(username)


// let username = "hello"                    //blocked-scope
// {
//     let username = "vanakam"
//     console.log(username)
// }
// console.log(username)


// const username = "hello"                 //blocked-scope
// {
//     const username = "vanakam"
//     console.log(username)
// }
// console.log(username)

// function getname(){
//     username = "agilesh"
//     console.log(username)
// }
// getname()

// const arr = [1,2,3,4,"agilesh",[7,30,25,28]]
// console.log(arr[4])

// const car = {tire:"CEAT", Engine:"V8"}
// console.log(car)

// const num1 = 3
// const num2 = num1
// console.log(num1,num2)


// let age = 18;
// if (age >=18){
//     console.log("you are adult");
// }
// else{
//     console.log("you are minor");
// }

// const car = {0:"MRF", 1:"CEAT", 2:"BRIDGESTONE", 3:"GOODYEAR"}
// console.log(car[2])






// types of operators

//arithmetic operator
//(+,-,*,/,%)

//assignment operator
// symbols =>(+=, -=, *=, /=, %=)
// a=2, b=4
// a+=b => a=a+b = 2+4= 6
// a-=b => a=a-b = 2-4=-2

// comparitive operator 
// symbols => (==,===,<,>,<=,>=,!=,!==)
// console.log(2==="2") //checks both the value and type
// console.log(2=="2")     //checks the value alone
// console.log(2!=2)   // false || Not equal to
// console.log(2!=="2")  //true
// console.log(2<2)    //false || greater than
// console.log(2>2)    //false || lesser than
// console.log(2<=2)   //true  || greater than equal to
// console.log(2>=2)   //true  || lesser than equal to

//logical operator
// symbols => ( && , || , !)
// console.log(2==2 && 3==3) if both the condition should be true so,it return true orelse false
// console.log(2==2 || 2==3) if either one condition is true, it return true orelse false
// console.log(!(2==2  || 2==3)) => ternary

//ternary operator
//syntax => cond ? true_val : false_val
// console.log(2==1 ? 2 : 1)





// function and their types

// function     =>function with default parameters

// function invite (name = "agilesh"){
//     console.log("welcome " ,name)
// }
// invite()


//IIFE  -  immediately invoking function efficient 
// (function (a,b) {console.log(a,b)})(2,5)

// => arrow function

// const multiply = (x,y) => x*y;
// console.log(multiply(5,8))


// // =>Anonymous function => a function without name is called as anonymous function

// const show = function(){
//     console.log("this is anonymous function")
// }
// show()


//callback function => a function passed an argument to another function

// function greet(name){
//     console.log("hello ", name)
// }

// function callgreet(callback){
//     callback("agilesh")
// }
// callgreet(greet)

// control structure





