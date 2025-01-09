function printNumber(num: number): void {
  console.log(num);
}

function checkIfNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

let myVar: any = 10;
if (checkIfNumber(myVar)) {
  printNumber(myVar); // This will work
}

myVar = "hello";
if (checkIfNumber(myVar)) {
  printNumber(myVar); // This will not execute the printNumber function
} else {
  console.log("Not a number");
} 