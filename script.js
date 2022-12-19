// 1. Type conversion

// const innputNumber = "7500";
// console.log(innputNumber + 1);

// console.log( Number (innputNumber) + 10);

// console.log(innputNumber)
// console.log(Number(innputNumber), innputNumber);
// console.log(typeof innputNumber)

// const birthYear = 1988;
// console.log(String(birthYear));
// console.log(String(birthYear));

// const persion = "Adrita";

// check type
// console.log(typeof (persion))

// // convert to number
// console.log(Number (persion))


// convert to Boolean
// const innputNumber = "7500";
// const firstName = "Adrita";
// console.log(Boolean(innputNumber));
// console.log(Boolean(firstName));



// 2. JavaScript Type Coercion
// JavaScript Auto data conversion process
// let bookNumber = 5;
// console.log("I have " + bookNumber + " Story Book");
// console.log("20" - 5)
// console.log("20" / 5);

// console.log( 5 + 10 + 5 + "5");
// console.log("100" - "50" + 10);
// console.log("15" - "5" - "4" + "5")


// 3. JavaScript Truthy and falsy value
// console.log(0);
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(1));
// console.log(Boolean("Adrita"));
// console.log(Boolean("123"));

// const job = 1;

// if( job ) {
//     console.log("I have a Good Job!");
// } else {
//     console.log("Looking for a Good Job!");
// }

// let salary;

// if( salary ) {
//     console.log("My salary is set!" );
// } else {
//     console.log("My salary isn't set!" );
// }

// 4. JavaScript conditional Statement
// let earning = 10000;

// if( earning > 35000) {
//     console.log("He is earning very good amount!");
// } else if( earning > 20000) {
//     console.log("His earning isn't bad!");
// } else if( earning > 1000) {
//     console.log("He is earning is " + earning );
// } else {
//     console.log("His earning isn't good enouth!");
// }


// let today = "Monday";

// if(today == "Saturday") {
//     console.log("Today we have a main class!");
// } else if (today == "Sunday") {
//     console.log("Today we have a support class");
// } else if (today == "Monday") {
//     console.log("Today we have a main class!");
// }else if (today == "Tuesday") {
//     console.log("Today we have a support class");
// }else if (today == "Wednesday") {
//     console.log("Today we have a main class!");
// } else if (today == "Thursday") {
//     console.log("Today we have a support class");
// } else {
//     console.log("Today is our holiday!");
// }


// 5. Nested conditional Statement 
// const x = 10;

// if( x >= 10 ) {
//    if( x == 10) {
//     console.log("X = " + x);
//    }
// } else {
//     console.log("X is lower than 10!");
// }

// 6. Switch statement

let day = "Friday";

switch( day ) {

    case "Saturday" :
        console.log("Today 9pm we have a live main class!");
        break;
    
    case "Sunday" :
        console.log("Today 9pm we have a live support class!");
        break;
    
    case "Monday" :
        console.log("Today 9pm we have a live main class!");
        break;
    
    case "Tuesday" :
        console.log("Today 9pm we have a live support class!");
        break;
    
    case "Wednesday" :
        console.log("Today 9pm we have a live main class!");
        break;
    
    case "Thursday" :
        console.log("Today 9pm we have a live support class!");
        break;
    
    default:
        console.log("Today is our holiday!");
}
