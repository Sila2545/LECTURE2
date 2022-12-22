const people = ["Aaron" , "mel" , "John"];
const one = 1;
const str = "Hello World";
const b = true;
const employe = {
    fristName : "Anirah",
    lastName : "Mingkhaw"
};

function sayHello(person){
    console.log("Hello" + person.fristName);
}

console.log(typeof people);
console.log(typeof sayHello);
console.log(employe instanceof Array);
sayHello(employe);