var readlineSync = require("readline-sync");

// //old version
// var uDied = function() {
//    console.log("You DIED!!!");
//    setTimeout(function () {
//      console.log("If you see this!!! You are in Ghost realm, say hello to Bob Marley");
//    }, 3000)
//  }
//
//
// while (response != "hole") {
//   var response = readlineSync.question("Enter your option to proceed: ");
//   if (response == "hole") {
//     isDead = true;
//     break;
//   } else if (response == "door") {
//     if (foundKey == false) {
//       console.log("You need a key to open");
//     } else {
//       console.log("You opened the door... FREE!");
//       break;
//     }
//   } else if (response == "key") {
//     foundKey = true
//     console.log("You found key... What u gon do?");
//   }
// }
// if (isDead) {
//   uDied();
// }

//updated version
var readLineSync = require("readline-sync");
var holeNumbers = [4, 7, 10, 13, 16, 19, 22, 25, 28];
var hasKey = false;
var openedDoors = [];
var hasEscaped = false;

var doorNumbers = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29];

var keyNumbers = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
var counter = 5;

while (!hasEscaped) {

 var userResponseToPrompt = readLineSync.question("Enter any number from 1 - 30 inclusive: ");
 //
 var check = function(door, arr) {
   for (var i = 0; i < arr.length; i++) {
     if (door === arr[i]) {
       return true;
     }
   }
   return false;
 }
 // console.log(check(parseInt(userResponseToPrompt), doorNumbers));

 //




 for (var i = 0; i < holeNumbers.length; i++) {
   if (parseInt(userResponseToPrompt) === holeNumbers[holeNumbers.indexOf(holeNumbers[i])]) {
     counter -= 1
     console.log("Oh sorry you chose a hole number, you have " + counter + " lives left, TRY AGAIN");
   }else if (parseInt(userResponseToPrompt) === holeNumbers[holeNumbers.indexOf(holeNumbers[i])] && counter < 1){
     console.log("Sorry you died! Buy more lives to continue game!");
     hasEscaped = true;
   }

 }
 for (var i = 0; i < doorNumbers.length; i++) {
   if (parseInt(userResponseToPrompt) === doorNumbers[doorNumbers.indexOf(doorNumbers[i])] && hasKey === false) {

     console.log("Nice one there, you are at the door...but you need a key...go get it friend.");

   } else if (parseInt(userResponseToPrompt) === doorNumbers[doorNumbers.indexOf(doorNumbers[i])] && hasKey === true && openedDoors.indexOf(parseInt(userResponseToPrompt)) === -1) {
     console.log("Hurray!!! You opened and escaped Omar, the devil.");
     hasEscaped = true;
     break;
   }
 }
 if(openedDoors.indexOf(parseInt(userResponseToPrompt)) !== -1) {
   console.log("Sorry choose another number, number has already been used");

 }

 for (var i = 0; i < keyNumbers.length; i++) {
   if (parseInt(userResponseToPrompt) === keyNumbers[keyNumbers.indexOf(keyNumbers[i])]) {
     hasKey = true;
     console.log("You found the key, go get the door.");
   }
 }
 if (check(parseInt(userResponseToPrompt), doorNumbers) === true) {
   openedDoors.push(parseInt(userResponseToPrompt));
 }
}
