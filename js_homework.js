// //Section 1

// //what types are these? Write your answer in a comment beside it.

// // 1; => Number
// // "cat"; => String
// // true; => Boolean
// // []; => Array
// // {}; => Object
// // 1.1; => Number
// // undefined; => Undefined

// //Section 2

// // what is the truthy/falsiness values of the following
// // write your answer in a comment beside it
// // you can use an if to test this...
// // 1; //true
// // "cat"; => true
// // true; => true
// // NaN; => false
// // []; => true
// // {}; => true
// // undefined; => false
// // ""; => false
// // 0; => false


// //Section 3

// //Using examples that are different from above...

// //3.1 Assign a variable that is a number
// var num = 20;
// //3.2 Assign a variable that is a string
// var string = "Hello";
// //3.3 Assign a variable that is a boolean
// var isBoolean = true;
// //3.4 Assign a variable that is an object
// var address = {
//   number: 41,
//   street: "Young Street",
//   town: "Wishaw"
// };

// console.log(num, string, isBoolean, address);

// //Section 4
// //4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
// var greeting = "hello";

// if (greeting === "hello") {
//     console.log("hello"); 
//   } else {
//     console.log("bye");
//   };


// //Section 5
// var animals = ["raccoon","hedgehog","mouse","gerbil"];

// //5.1. Assign the first element to a variable
// var firstElement = animals[0];
// console.log(firstElement);

// //5.2. Assign the last element to a variable
// var lastElement = animals[3];
// console.log(lastElement);

// //5.3. Assign the length of an array to a variable
// var arrayLength = animals.length;
// console.log(arrayLength);

// //5.4. Add an item to the end of the array
// animals.push("dog");
// console.log(animals);

// //5.5. Add an item to the start of the array
// animals.unshift("cat");
// console.log(animals);

// //5.6. Assign the index of hedgehog to a variable
// var indexOf = animals.indexOf("hedgehog");
// console.log(indexOf);

// //Section 6

// //6.1 Create an array of 5 vegetables
// var vegetables = ["carrot", "turnip", "sweet potato", "potato", "parsnip"];
// console.log(vegetables);

//6.2 Loop over the array and write to the console using a "while"
// var i = 0;
// while (i < vegetables.length) {
//   console.log(vegetables[i]);
//   i++;
// }

// //6.3 Loop again using a "for" with a counter
// for (var j = 0; j < vegetables.length; j++) {
//   console.log(vegetables[j]);
// }

// //6.4 Loop again using a "for of"
// for (var veg of vegetables) {
//   console.log(veg);
// }

// Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

//7.1 Calculate the total cash in accounts
var totalCash = function() {
  var total = 0;
  for (var key in accounts) {
    total += accounts[key].amount;
  }
  return total;
}
console.log(totalCash());

//7.2 Find the amount of money in the account with the largest balance
var largestAmount = function() {
  var largest = [];
  for (var key in accounts) {
    largest.push(accounts[key].amount);
  }
  return Math.max.apply(null, largest);
}
console.log(largestAmount());

//7.3 Find the name of the account with the smallest balance

var result = accounts.sort(function(a, b) {
    return parseFloat(a.amount) - parseFloat(b.amount);
});
smallestHolder = result[0];
console.log(smallestHolder.name);

//7.4 Calculate the average bank account value
var averageCash = function() {
  var total = 0;
  for (var key in accounts) {
    total += accounts[key].amount;
  }
  return total / accounts.length;
}
console.log(averageCash());

//7.5 Find the value of marcs bank account
var marcCash = function() {
  var value = 0;
  for (var key in accounts) {
    if (accounts[key].name === "marc") {
      value = accounts[key].amount;
    }
  }
  return value;
}
console.log(marcCash());

//7.6 Find the holder of the largest bank 

var result = accounts.sort(function(a, b) {
    return parseFloat(b.amount) - parseFloat(a.amount);
});
largestHolder = result[0];
console.log(largestHolder.name);

//7.7 Calculate the total cash in business accounts
var totalBusinessCash = function() {
  var total = 0;
  for (var key in accounts) {
    if (accounts[key].type === "business") {
      total += accounts[key].amount;
    }
  }
  return total;
}
console.log(totalBusinessCash());

//7.8 Find the largest personal account owner
var result = accounts.sort(function(a, b) {
    return parseFloat(b.amount) - parseFloat(a.amount);
});
var personalHolders = [];
for (var key in result) {
    if (result[key].type === "personal") {
      personalHolders.push(accounts[key].name);
    }
  }
  console.log(personalHolders[0]);


//Section 8
//Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

var myPerson = {
  name: "Emma",
  height: "5ft 10",
  favFood: "Italian",
  eat: function(isHungry) {
    if (isHungry) {
      console.log("I'm eating");
    } else {
      console.log("I'm full");
    }
  }
};

myPerson.eat(true);
myPerson.eat(false);
