// Dom /////
// document.getElementById("para1").innerHTML = "Hello Class";
let para1 = document.getElementById("para1");
para1.innerHTML = "Hello World";
para1.style.fontSize = "40px";



let newP = document.createElement('p');
newP.innerHTML = "New Para";
newP.style.color = "red";


// document.getElementsByName
let divs = document.querySelector("div");
divs.appendChild(newP);
// divs.innerHTML = "Hello Class";
// document.getElementsByClassName("static").innerHTML = "Hello Class";
document.querySelector("#para3").innerHTML = "Hello Class! This is para 3";
// document.querySelectorAll

function clickMe() {
    alert("You have clicked a button");
}

let button = document.querySelector('button');

 button.addEventListener("click", clickMe);
 
 let input = document.querySelector('input');

 input.addEventListener("keypress", function() {
     console.log("You pressed a key");
 })

// let person = {
//     firstName: "Promise",
//     age: 70,
//     ocupation: "Developer",
// };

// console.log(person.age);
// console.log(person["firstName"]);

// let names = ["Promise", "Joy", 50, "Moshe"];
// console.log(names[3]);

// let names = [];
// names[0] = "Promise";
// names[1] = "Joy"
// console.log(names);

// let  i = 1;
// const num = 5

// do {
//     console.log(i);
//     i++;
// } while (i <= num);


// let capacity = 40;
// let current_capacity = 35;
// while (current_capacity < capacity) {
//     current_capacity = current_capacity + 1;
//     let capacity_left = capacity - current_capacity;
//     console.log("The capacity left is:" + " " + capacity_left);
// }


// let i = 0;

// for (; i < 10; i++) {
//     console.log(i)
// }


// Methods //
// let a = Math.round(4.6);
// console.log(a);

// let b = Math.ceil(4.1);
// console.log(b);

// let c = Math.floor(4.6);
// console.log(c);

// let d = Math.trunc(4.6);
// console.log(d);

// let e = Math.pow(4, 6);
// console.log(e);


// let f = Math.sqrt(64);
// console.log(f);

// let g = Math.min(4, 3, 8, 1);
// console.log(g);

// let h = Math.ceil( Math.random() * 10);
// console.log(h);

// let newName = "victor";
// console.log(newName.toUpperCase());


// let age = 10;
// age += 40;

// const shoe = "Nike";
// function showMessage() {
//     age = 30;
// }


// console.log(age)
// showMessage();

// OR - ||
// AND - &&
// NOT - !

// let age = 20;
// let newAge = 30;


// function goodmorning(name) {
//     console.log( name + ' ' + "Good Morning ")
// }

// function goodafternoon(name) {
//     console.log( "Good Afternoon"  + ' ' + name  )
// }

// function goodevening(name = "john") {
//     console.log(name + ' ' +  "Good Evening")
// }



// if (age > 20 ) {
//     goodmorning("Tobi");
// } else if ( age < 20) {
//     goodmorning("Victor");
// } else {
//     goodevening();
// }






// let shoe, bikes, cars;

// cars = 35;

// let books = "JavaScript";

// books = "html";

// const isAdmin = true;

// console.log(cars);
// console.log(shoe);



// console.log(books.toUpperCase());
