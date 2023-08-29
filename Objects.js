// Objects in JavaScript are the biggest building block and almost everything in JavaScript is an object.

// Objects are used for collections of data or collections of functionality
// person is a object which consist of multiple fields
// you cannot use a const variable without setting a value.

const person={
    name:"Vicky",
    address:"Pune",
    salary:35000.0
}
console.log(person.name,person.address,person.salary)

// If you create a variable and don't set anything to it, it will be undefined.
// undefined is something when we created a variable nut has not assigned any value

let dog;
console.log(dog)

// Null is a value of nothing, whereas undefined is a variable that has not yet had a value set to it.

let cat=null;
console.log(cat)


// Types :- Booleans and Equality

// The final type in JavaScript is called a boolean. 
// A boolean is either true or false, it's like a light switch, it's on or off and that is it.

let isDrawing=false;
console.log(isDrawing)

//Equality : equal sign, double equal sign, triple equal sign

let age1=77; // this is used to assign the value

let age2=77;

const age3="77";

console.log(age1==age2) // it only check value of first and second variable

console.log(age1===age2) // it check value and type of both variable

console.log(age1===age3) // false: type is different




