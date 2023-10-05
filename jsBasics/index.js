// ONE
// let name = 'Patrick';
// console.log(name);
// let firstName = 'Patrick';
// let lastName = 'Ndungu';
// console.log (firstName, lastName);
// const interestRate = 0.3;
// console.log (interestRate);

// TWO
// // Types of Primitives
// let name = 'Patrick'; // String literal
// let age = 28; // Number literal
// let isApproved = true; // Boolean literal
// let firstName = undefined; //Undefined literal
// let lastName = null; // null literal

// // THREE
// let person = {
//   name: 'Patrick',
//   age: 28
// };

// // Dot Notation
// person.name = 'Patricia';

// // Bracket Notation
// let selection = 'name';
// person[selection] = 'Jecinta';
// console.log(person.name);

// // FOUR
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 2;
// console.log(selectedColors.length);


// // FIVE
// //Performing a task
// function greet(name, lastName) {
//   console.log('Hello ' + name + ' ' + lastName);
// }

// // Calculating a value
// function square(number) {
//   return number * number;
// }

// console.log(square(2));

// // SIX
// // OPERATORS
// // 1. Arithmetic Operators
// let x = 10;
// let y = 3;

// // console.log(x + y);
// // console.log(x - y);
// // console.log(x * y);
// // console.log(x / y);
// // console.log(x % y);
// // console.log(x ** y); // Exponeation. To the power of.

// // // Increment (++)
// // console.log(x++);
// // console.log(x);

// // Decrement
// console.log(--x);

// // SEVEN
// // 2. Assignment Operators
// let x = 10;

// x = x + 5;
// x += 5;

// x = x * 3;
// x *= 3;

// // 3. Comparison Operators
// let x = 1;

// // Relational Operators
// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

// // // 4. Equality Operators
// // console.log(x === 1);
// // console.log(x !== 1);

// // Equality Operators (Same Type & Value)
// console.log(1 === 1);
// console.log('1' === 1);

// // Lose Equality (value)
// console.log(1 == 1);
// console.log('1' == 1);
// console.log(true == 1);

// 5. Ternary Operator
// If a customer has more than 100 points.
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

// let points = 110;
// let type = points > 100 ? 'gold' : 'silver';
// console.log(type);

// let age = 38;
// let person = age < 30 ? 'youth' : 'elder';
// console.log(person);

// // // // 6. Logical Operators
// // // // Logical AND (&&)
// // // // Returns TRUE if both operands are TRUE
// // // console.log(true && true);

// // let highIncome = true;
// // let goodCreditScore = true;
// // let eligibleForLoan = highIncome && goodCreditScore;

// // console.log(eligibleForLoan);

// // // Logical OR (||)
// // // Returns TRUE if both operands are TRUE
// // console.log(true && true);

// let highIncome = true;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log('Eligible', eligibleForLoan);

// // NOT (!)
// let applicationRefused = !eligibleForLoan;
// console.log('Application Refused', applicationRefused);

// // // Exercise: Swapping
// // let a = 'red';
// // let b = 'blue';

// // let c = a;
// // a = b;
// // b = c;

// // console.log(a);
// // console.log(b);

// let a = 'red';
// let b = 'blue';

// // Swapping values using a temporary variable
// let temp = a;
// a = b;
// b = temp;

// console.log("After swapping:");
// console.log("a =", a); // Should now be blue
// console.log("b =", b); // Should now be red

// let a = 'red';
// let b = 'blue';
// [a, b] = [b, a]

// console.log(a);
// console.log(b);

// // If...else
// // Hour
// // If hour is between 6am and 12pm: Good morning!
// // If it is between 12pm and 6pm: Good afternoon!
// // Else: Good evening

// let hour = 10;
// if (hour >= 6 && hour < 12)
//   console.log('Good Morning!');
// else if (hour >= 12 && hour < 18)
//   console.log('Good Afternoon!');
// else
//   console.log('Good Evening!');

// LOOPS
// 1. For Loops
// for (let i = 5; i >= 1; i--) {
//   if (i % 2 !== 0) console.log(i);
// }

// // 2. While Loops
// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// // 3. Do ... While Loops
// let i = 9;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

// // 4. Infinite Loops
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// while (true) {

// }

// 5. For ... In Loops
// const person = {
//   name: 'Patrick',
//   age: 28
// };

// for (let key in person)
//   console.log(key, person[key]);

// const colors = ['red', 'green', 'blue'];
// for (let index in colors)
//   console.log(index, colors[index]);

// // 6. For ... Of Loops
// const colors = ['red', 'green', 'blue'];
// for (let color of colors)
//   console.log(color);

// // // 7. Break and Continue
// let i = 0;
// while (i <= 10) {
//   // if (i === 5) break;
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }

//   console.log(i);
//   i++;
// }

// // // Exercises
// // // Exercise 1: Max of Two Numbers
// let x = 12;
// let y = 11;

// if (x > y) {
//   console.log("The maximum is", x);
// }
// else console.log("The maximum is", y);

// // Solution
// let number = max(5, 10);
// console.log("The maximum number is", number);

// function max(a, b) {
//   return (a > b) ? a : b;
// }

// // Exercise 2: Factory and Constructor Functions
// console.log(isLandscape(300, 600))

// function isLandscape(width, height) {
//   return (width > height);
// }

// // Exercise 3: FizzBuzz
// // Divisible by 3 => Fizz
// // Divisible by 5 => Buzz
// // Divisible by both 3 and 5 => FizzBuzz
// // Not divisible by 3 or 5 => input
// // Not a number => 'Not a number'

// const output = fizzBuzz('hyt');
// console.log(output);

// function fizzBuzz(input) {
//   if ((input % 3 === 0) && (input % 5 === 0))
//     return 'FizzBuzz';

//   if (typeof input !== 'number')
//     return NaN;

//   if (input % 3 === 0)
//     return 'Fizz';

//   if (input % 5 === 0)
//     return 'Buzz';

//   return input;
// }

// Exercise 4: Demerit Points
// Speed Limit = 70
// 5 speeds above speed limit = 1 point
// Math.floor(1.3)
// More than 12 points, license is suspended

// checkSpeed(130);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint) {
//     console.log('Ok');
//     return;
//   }
//   const points = Math.floor((speed - speedLimit) / kmPerPoint);
//   if (points >= 12)
//     console.log('License Suspended');
//   else
//     console.log('Points', points);
// }

// // Exercise 5: Even and Odd Numbers
// showNumbers(10);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
//     console.log(i, message);
//   }
// }

// // Exercise 6: Count Truthy
// // Falsy
// // 1. Undefined
// // 2. null
// // 3. ''
// // 4. false
// // 0
// // Nan
// // Truthy is anything that is not falsy, hence, a true value
// const array = [0, null, undefined, '', 2, 3, 4];

// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array)
//     if (value)
//       count++;
//   return count;
// }

// // Exercise 7: String Properties
// const movie = {
//   title: 'a',
//   releaseYear: 2018,
//   rating: 4.5,
//   director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//   for (property in movie)
//     if (typeof obj[property] === 'string')
//       console.log(property + ':', obj[property]);
// }

// // SOLUTION
// const movie = {
//   title: 'a',
//   releaseYear: 2018,
//   rating: 4.5,
//   director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'string')
//       console.log(key, obj[key]);
//   }
// }

// Exercise 8: Sum of Multiples of 3 and 5 for limit 10
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

// console.log(sum(10));

// function sum(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// // SOLUTION
// console.log(sum(10))

// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i <= limit; i++)
//     if (i % 3 === 0 || i % 5 === 0)
//       sum += i

//   return sum;
// }

// Exercise 9: Grade


// Exercise 10: Stars

// // Exercise: Prime Numbers

// function isPrime(number) {
//   if (number <= 1) return false;
//   if (number <= 3) return true;

//   if (number % 2 === 0 || number % 3 === 0) return false;

//   for (let i = 5; i * i <= number; i += 6) {
//     if (number % i === 0 || number % (i + 2) === 0) return false;
//   }

//   return true;
// }

// function displayPrimesInRange(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }
// displayPrimesInRange(1, 100); 
