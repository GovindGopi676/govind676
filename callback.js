
/*
function sum (num1, num2, cb)
{
let output=console.log(num1+num2);
cb(output)

}

function display (output){
    console.log(output)

}

sum(20,20,display)

// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

function gun(name,callback){
    console.log('the gun name is ' + name)
    callback();
}

function model (){
    console.log('model name is 2850')
}

gun('AK47', model)


function sub(name, callback){
    console.log('print the value of the element')
    callback('call the girl')
}

function div (girl){
    console.log(girl)
}

sub('gopi', div) 

*/


function sum (num1,num2, callback){

    let value = num1+num2;

    callback(value)
}
function display(value){
    console.log(value)
}

sum(20,200, display)

function greet(name,cb){

    console.log("hello"+ name)
    cb();
}
function dog(){
    console.log("wlcome to home")
}

greet("gopi", dog)