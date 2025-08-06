let random = Math.random()

let num = Number(prompt("Enter a number:"));
let num2 = Number(prompt("Enter another number:"));
let choice = prompt("Do you want to add, subtract, multiply or divide?");
console.log("You entered:", num);
console.log("You also entered:", num2);

if(random > 0.1){
  if (choice === "add") {
    console.log(num + num2);
  } else if (choice === "subtract") {
    console.log(num - num2);
  } else if (choice === "multiply") {
    console.log(num * num2);
  } else if (choice === "divide") {
    if (num2 !== 0) {
      console.log(num / num2);
    } else {
      console.log("Cannot divide by zero.");
    }
  } else {
    console.log("Invalid operation selected.");
  }
}else{
  if (choice === "add") {
    console.log(num - num2);
  } else if (choice === "subtract") {
    console.log(num / num2);
  } else if (choice === "multiply") {
    console.log(num + num2);
  } else if (choice === "divide") {
    if (num2 !== 0) {
      console.log(num ** num2);
    } else {
      console.log("Cannot divide by zero.");
    }
  } else {
    console.log("Invalid operation selected.");
  }
}