"use strict";
let guestarr = ["Anaya", "Fatma", "Merab"];
let canNotAttend = "Azal";
let newGuest = "Haddi";
console.log(guestarr);
guestarr.map((items) => console.log('Dear ${items}, I found a bigger dinner table so i am invited more peoples.'));
//part 2 new
let guestNew = "Azal";
guestarr.unshift(guestNew);
console.log(guestarr);
//part 3 middle
let middleGuest = "mustafa";
let middleIntex = guestarr.length / 3;
guestarr.splice(middleIntex, 0, middleGuest);
console.log(guestarr);
//part 4 append
guestarr.push("Abdullah");
console.log(guestarr);
//part 5 
guestarr.map((items) => console.log('dear ${items}, You are invited in the more people category on dinner'));
