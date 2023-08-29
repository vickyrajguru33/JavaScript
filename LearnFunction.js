
// funcion : allow us to group together sets of statements

function calaculateBill (){
    console.log("Running Calculate Bill !!!")
}

calaculateBill()

// Return value using function

// parameter and arguments

function calaculateFees(collegeFees,hostelFees){
    const totalFees=collegeFees+hostelFees;
    return totalFees;
}
let fees=calaculateFees(8800,6700);
console.log(fees)

// another way

const firstName='Vicky';

function sayHiTo(){
    return 'Hello  ${firstName}';
}
const greeting=sayHiTo();
console.log(greeting);


// One liner Functions

const inchToCM = (inch) => inch*2.5;

console.log(inchToCM(5))















