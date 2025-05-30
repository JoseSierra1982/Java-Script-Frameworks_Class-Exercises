// Functions/Method:
//Methods are functions that are written inside a class

function add(x,y) {
    return x+y;
}

add(5,6);

let add2 = function (x,y) {
    return x+y;
}

add2(5,6);

console.log(add)


//Arrow function!!!


let add3 = (x,y) => {
    return x+y;
}

add3(5,6);

//Arrow function that takes one parameter/arguments
//we can omit the parenthesis () is there's one parameter
//parameter => x

let doubleIt = (x) => {
    return x*2;
}

//argument => 5

doubleIt(5); //5*2 = 10

//function without {} only one statement (no return)

let squareIt = (x) => console.log (squareIt(5));

//below is an example of an arrow anonymous function

() => {} //useless!

(x) => {return x*x} //Useless

// can be used in different way!