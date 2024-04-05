let name_1 : string = "Hina"
let name_2 : string = "Hina salman"
let name_3 : string = "Mrs Hina salman"

if (name_1 == name_3){
    console.log("names are equal")

} else {
    console.log("names are not equal")
}

if (name_1 != name_2){
    console.log("names are equal")
}

let age_1 : number = 18
let age_2 : number = 22

if (age_1 == 18) {
    console.log("eligible for vote")
}
if (age_1 ==22){
    console.log("eligible for vote in older category")
}
if (age_1 <= age_2){
    console.log("younger")
}

if (age_2 >= age_1){
    console.log("older")
}


if (age_1 == 18 && age_2 == 22){
    console.log("person is eligible for vote")
}

if (age_1 == 18 || age_2 == 22){
    console.log("person is eligible for vote")

}

let country : string [] = ["pakistan", "saudiArab", "india", "china"]
if (country.includes("pakistan")){
    console.log("pakistan is country list")
}

if (country.includes ("saudiArab")){
    console.log("saudiArab  is not includes in an array")
}