console.log(this);
// This refers to the golabal object in node or the window object in the browser 


const myObj = {
name: "Timmy",
greet: () => {
console.log(`Hello ${this.name}`);
},
};

myObj.greet();
// THIS here will refrence the global object because it looks for a parent function when it's defined and here there is no parent function 
// if we want this to refernece myObj we can use function expression 

const myObj2 = {
    name: "Timmy",
    greet:function () {
    console.log(`Hello ${this.name}`);
    },
    };
    
    myObj2.greet();

//=----------------
const myFuncDec = function () {
    console.log(this);
    };

// here what i think will happen is that THIS will reference the object that call the function

myFuncDec(); //the global variable

myObj.fun = myFuncDec;
myObj.fun(); //myObj

//=============================================
const myFuncArrow = () => {
    console.log(this);
    };
myFuncArrow();
myObj.fun = myFuncArrow;
myObj.fun();
//here THIS will always refrence the global object because that where it was declared


document.querySelector(".element").addEventListener("click" , function () {
    console.log(this);
    });

//Arrow :
//what i think is here: THIS should refer to the window object because it looks for a parent function.

//Function expresion : 
// THIS will be the element itself
    
