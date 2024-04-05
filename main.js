"use strict";
let guests = ["Anaya", "fatma"];
console.log("due to limited space, only two people can be invited for dinner.");
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log('sorry, ${removedDuest}, you are no longer invited to dinner.');
}
guests.forEach((guest => {
    console.log('Dear ${guest}, you are still invited to dinner.');
}));
guests.pop();
guests.pop();
console.log("final guest list:", guests);
