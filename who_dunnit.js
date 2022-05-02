// Episode 1
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Output: 'The murderer is Miss Scarlet'. She is declared as the murderer in the variable on lines 1-5

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Episode 2
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. It will crash as murderer is a constant variable and cannot be reassigned from Professor Plum to Mrs Peacock in this way.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Output: First Verdict: THe murderer is Mrs Peacock. Second Verdict: The murderer is Mrs Peacock. This is because murder is reassigned in the declareMurderer function and returned within the function as Mrs P. Then outside the block it remains Professor Plum for the Second Verdict. 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Output: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard. Suspect three is Mrs Peacock. This is because suspect three was changed to Mustard in declareAllSuspects function and this is not called in the last statement, so it remains Peacock.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Episode 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };

//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }

//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }

//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Weapon is Revolver as is it reassigned in changeWeapon function as it is possible to modify mutable objects that are declared with const. 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Episode 6 

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Mrs White is the output as the last change to the declaration of murderer is in the plotTwist function nested in the changeMurderer function. 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Episode 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Outout: The murderer is Mr Green. This is because it was reassigned last with the changeMurderer function.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Episode 8

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };

//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }

//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }

//       unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
//   }

//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }

//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Output: The weapon is Candle Stick. This is because room was reassigned, in the changeScenario function which then fulfilled the following nested if statement, meaning that the murderer is reassigned. Then, still within the changeScenario function, if the murder equals the murderer, which it does given the previous logic, the candlestick is reassigned as the weapon. The fact that the functions are declared as constant, both if statements are always going to be true within this program when the functions are called again, meaning that the weapon is the candlestick. 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Episode 9 

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Output: THe murderer is Professor Plum. The if statement is not part of a function, and therefore has no effect.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////