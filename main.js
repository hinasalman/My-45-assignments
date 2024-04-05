"use strict";
let guestarr = ["Anaya", "fatma", "Merab", "azal"];
let canNotAttend = "Anaya";
console.log(canNotAttend + "can not attend the dinner.");
let newGuest = "Manal";
guestarr[guestarr.indexOf(canNotAttend)] = newGuest;
console.log(guestarr);
guestarr.map((items) => console.log('Dear $(items), You are invited to the dinner.'));
