var username = "hello"                   //functional-scope
{
    var username = "vanakam"
    console.log(username)
}
console.log(username)


let username = "hello"                    //blocked-scope
{
    let username = "vanakam"
    console.log(username)
}
console.log(username)


const username = "hello"                 //blocked-scope
{
    const username = "vanakam"
    console.log(username)
}
console.log(username)

function getname(){
    username = "agilesh"
    console.log(username)
}
getname()

const arr = [1,2,3,4,"agilesh",[7,30,25,28]]
console.log(arr[4])

const car = {tire:"CEAT", Engine:"V8"}
console.log(car)

const num1 = 3
const num2 = num1
console.log(num1,num2)


let age = 18;
if (age >=18){
    console.log("you are adult");
}
else{
    console.log("you are minor");
}

const car = {0:"MRF", 1:"CEAT", 2:"BRIDGESTONE", 3:"GOODYEAR"}
console.log(car[2])






types of operators

arithmetic operator
(+,-,*,/,%)

assignment operator
symbols =>(+=, -=, *=, /=, %=)
a=2, b=4
a+=b => a=a+b = 2+4= 6
a-=b => a=a-b = 2-4=-2

comparitive operator 
symbols => (==,===,<,>,<=,>=,!=,!==)
console.log(2==="2") //checks both the value and type
console.log(2=="2")     //checks the value alone
console.log(2!=2)   // false || Not equal to
console.log(2!=="2")  //true
console.log(2<2)    //false || greater than
console.log(2>2)    //false || lesser than
console.log(2<=2)   //true  || greater than equal to
console.log(2>=2)   //true  || lesser than equal to

logical operator
symbols => ( && , || , !)
console.log(2==2 && 3==3) if both the condition should be true so,it return true orelse false
console.log(2==2 || 2==3) if either one condition is true, it return true orelse false
console.log(!(2==2  || 2==3)) => ternary

ternary operator
syntax => cond ? true_val : false_val
console.log(2==1 ? 2 : 1)





function and their types

function     =>function with default parameters

function invite (name = "agilesh"){
    console.log("welcome " ,name)
}
invite()


IIFE  -  immediately invoking function efficient 
(function (a,b) {console.log(a,b)})(2,5)

=> arrow function

const multiply = (x,y) => x*y;
console.log(multiply(5,8))


// =>Anonymous function => a function without name is called as anonymous function

const show = function(){
    console.log("this is anonymous function")
}
show()


callback function => a function passed an argument to another function

function greet(name){
    console.log("hello ", name)
}

function callgreet(callback){
    callback("agilesh")
}
callgreet(greet)

control structure  - used to control the flow of execution
conditional statements and looping statements

const val = +prompt("whose jersey number is 7?")
if ("MS dhoni"){
    console.log("absolutely right")
}
else if("viratkohli"){
    console.log("jersey number is 18")
}
else{
    console.log("wrong answer")
}

switch case

let day = prompt("enter the day")

switch (day) {
    case "sunday":
        console.log("Enjoy weekend");
        break;
    case "monday":
        console.log("die");
        break;
    case "friday":
        console.log("ready to weekend");
        break;
    default:
        console.log("study");
}



looping statements

for loop
    init;cond;increment/decrement
for (let i =0; i<=70; i++){
    console.log(i)
}

const arr = [1,2,3,4,10]
for (let i=0; i<arr.length; i++){
    console.log(arr[i])
}

for (const key in {name:"agilesh", age:20 , location:"bangalore"}){
    console.log(key)
}

const obj = {name:"agilesh", age:20, location:"bangalore"}
for (const key in obj){
    console.log(obj[key])
}

const arr = [0,1,2,3,4]
for (i=0; i<arr.length; i++){
    console.log(arr)
}

for (const arrayitems of arr){
    console.log(arrayitems)
}

function randomgen(){
    return Math.ceil(Math.random() *7) +1
}
console.log(randomgen())

outer:for (i=0; i<10; i++){
    for (j=0; j<10; j++){
    console.log(i,j)
    if (i==3 && j==3){
        break outer;
    }
}
}

for (i=0; i<10; i++){
    if (i==3){              //ship a particular iteration
        continue
    }
    console.log(i)
}


array methods
const arr = [1,2,3,4,5,6,7,8,9,10]
arr.push(8)          used to add a new element in the array

arr.pop()            removes the last element in the array

arr.shift()          removes the first element in the array

arr.unshift(99)      adds a new number or element in the first side of array

arr.reverse()        used to reverse an array

arr.splice(2,1,"agilesh")  used to remove an element from an array and replace it with another

console.log(arr.slice(0,3)) it takes only the given value based on the number

console.log(arr.concat(5,6,7,8,99)) concat is used to combine an array to the existing one

console.log(arr.includes(7))  shows whether the given number is in the array or not, if it is in the array, it returns true else returns false

console.log(arr.indexOf(2))

console.log(arr.find(function(val,idx,arr){
    return val > 2
}))

console.log(arr.map(function(val,idx,arr){
    return {
        [idx]:val
    }
}))


let sum = 0
arr.forEach(function(idx,val,arr){
    sum+=val
})
console.log(sum)


console.log(arr.reduce((pre,cur,idx,arr) => {
    console.log(pre,cur)
    return pre+cur
}))

console.log(arr.lastIndexOf(10))


console.log(
    arr.filter((val,idx,arr) =>{
    return val>5
}))

console.log(arr.join("-"))

console.log("12345".split(""))


const arr = [1,2,3,4,5,6,7,8]
const arrentries = arr.entries()

for (const a of arrentries){
    console.log(a)
}


const arr = [1,2,3,4,5,6,7,8]
const arrentries = arr.values()

for (const a of arrentries){
    console.log(a)
}