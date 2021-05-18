
// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

function convertFahrToCelsius(input) {
  if (typeof input === "number") {
    return (((input - 32) * 5) / 9).toFixed(4);
  } else if (Number(input)) {
    return (((input - 32) * 5) / 9).toFixed(4);
  } else {
    return `${input} is not a valid number but a/an ${typeof input}.`;
  }
}

// convertFahrToCelsius(30)




//# 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", logs the resulting array to the console then returns the resulting array.

function checkYuGiOh(n) {
  if (Number(n)) {
    console.log(checkYuGiOh());
  } else {
    return `invalid paramenter: ${n}`;
  }

  for (var i = 1; i <= n; i++) {
    if (i === 1) {
      console.log(i);
    } else if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 2 === 0 && i % 3 !== 0 && i % 5 !== 0) {
      console.log("yu");
    } else if (i % 3 === 0 && i % 2 !== 0 && i % 5 !== 0) {
      console.log("gi");
    } else if (i % 5 === 0 && i % 2 !== 0 && i % 3 !== 0) {
      console.log("oh");
    } else if (i % 2 === 0 && i % 3 === 0 && i % 5 !== 0) {
      console.log("yu-gi");
    } else if (i % 2 == 0 && i % 3 !== 0 && i % 5 === 0) {
      console.log("yu-oh");
    } else if (i % 2 !== 0 && i % 3 === 0 && i % 5 === 0) {
      console.log("gi-oh");
    } else if (i % 2 === 0 && i % 3 === 0 && i % 2 === 0) {
      console.log("yu-gi-oh");
    } else {
      console.log(i);
    }
  }
}

// checkYuGiOh("fizzbuzz is meh");
