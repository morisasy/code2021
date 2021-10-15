// truthy and falsy
// "", ''; ``, 0, -0, false, null, undefined
//unary operator - typeof
let text = 'some text';

console.log(typeof text); // operand

// binary operator -- assignment
let  number = 3;
// ternary operator 
// condition ? (uns if true): (runs if false)
// Global scopevs Local scope
// any vairable outside code block {}
// is said to be in Global Scope
// can be access anywhere in the program
// variable lookup
// {} -- code block
// call functions, higher order funcitons, 
// functions as first calss objects / citizens
// function are first class objects - stored in a variable (expression),
// passed as an argument to another function, return from the function (closure)
// higer oerder function -- accepst another function as an argument or returns anoterh function as result
// call back function -- passed to an another function as an argument and executed inside theat function.

// FOREACH forEach
// does not return new array

// MAP
// does return a new array 
// does not change size of original array
// uses values from original array when makeing new one.

//FILTER
// does return a new array
// can manipulate the size of new array
// return based on condition
// FIND
// return single instance -- object ( in this case object)
// return first match, if no match undefined 

// REDUCE
// reduce
// iterates, callback function
// reduces to a single value --- number, array, object
// 1 parameter ('acc')  total of all calculations
// 2 parameter ('curr') -- current iteration / value
/*
// NUMBERS
 //const number  = 4,56789;
 //const result = Math.floor(number)

//const number  = 4,33333;
//const result = Math.ceil(number)

//const number  = 89;
 //const result = Math.power(number)

 //const result =Math.PI;
 //const result = Math.min(4, 5, 6, 7, 9);
 //const result = Math.max(4, 5, 6, 7, 9);

 //const result = Math.floor(Math.random()*10 + 1);
 // console.log(result)


// DATE
 //date
 const date = new Date();
 console.log(date);
 const month = date.getMonth()
 console.log(month)

*/





const people = [
 {name: 'bob', age: 20, position: 'developer', id: 1, salary: 200},
 {name: 'peter', age: 25, position: 'designer', id: 2, salary: 300},
 {name: 'susy', age: 30, position: 'The boss', id: 3, salary: 500},
 {name: 'anna', age: 35, position: 'Tester', id: 4, salary: 500},
];

function showPerson(person){
  //console.table(person.age);
  console.log(person);
}
// forEach
//people.forEach(showPerson);
const newPeople = function(person){
	return {
		firstName: person.name.toUpperCase(),
		oldAge: person.age + 20,
	};
};

// MAP
const folk = people.map(showPerson);
const peeps = people.map(newPeople);
console.log(peeps);

const showLad = function (person) {
	// person.position  === 'developer';
	return person.age <= 25;
	
};
// FILTER
const youngPeple = people.filter(showLad);
console.table(youngPeple);

// FIND
const findPerson = (person) => person.id ===3;

const foundPerson = people.find(findPerson);
console.table(foundPerson)

// REDUCE

const totalSalary = function(acc, currItem){
	console.log(`total ${acc}`);
	console.log(`current money: ${currItem.salary}`);
	acc += currItem.salary;
	return acc;

}

const total = people.reduce(totalSalary,0);


/*



let person = { name: 'bob'};
let person2 = {...person};
person2.name = 'susy';
console.log(`The name of the first person is ${person.name}`);
console.log(`The name of the second person is ${person2.name}`);
const value = 1 < 0;
value ? console.log('value is true'): console.log('value is false');

function afternoon(name){
	return `Good afternoon ${name.repeat(3)}`;
}


function greet(name, cb) {
	const myName = 'John';
	console.log('${cb(name), my name is $(myName)}');
}

greet('bobo', morning);
greet('peter', afternoon);



*/