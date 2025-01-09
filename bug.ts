function printNumber(num: number): void {
  console.log(num);
}

function checkIfNumber(arg: any): asserts arg is number {
  if (typeof arg !== 'number') {
    throw new Error('Argument is not a number');
  }
}

let myVar: any = 10;
checkIfNumber(myVar);
printNumber(myVar); // This will work now

myVar = "hello";
checkIfNumber(myVar); // This will throw an error