let guestarr : string[] = ["Anaya", "Fatma", "Merab"];

let canNotAttend : string = "Azal"

let newGuest : string = "Haddi"

console.log(guestarr);

guestarr.map((items) =>
console.log('Dear ${items}, I found a bigger dinner table so i am invited more peoples.')
)
//part 2 new
let guestNew : string ="Azal"
guestarr.unshift(guestNew);
console.log(guestarr)

//part 3 middle
let middleGuest : string = "mustafa"
let middleIntex = guestarr.length/3
guestarr.splice(middleIntex,0,middleGuest)
console.log(guestarr) 

//part 4 append
guestarr.push("Abdullah")
console.log(guestarr)

//part 5 
guestarr.map((items)=>
console.log('dear ${items}, You are invited in the more people category on dinner'));





