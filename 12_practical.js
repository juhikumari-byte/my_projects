function checkNumber(num) {
    console.log(" Checking number:", num);

    if (num > 0) {
        console.log(" Positive number");
    } else if (num < 0) {
        console.log("Negative number");
    } else {
        console.log(" Zero");
    }
}
checkNumber(10);
checkNumber(-5);   
checkNumber(0);    
function dayMessage(day) {
    console.log(" Day is:", day);
    switch(day) {
        case "Monday":
            console.log(" Start of the week!");
            break;
        case "Friday":
            console.log(" Weekend is near!");
            break;
        case "Sunday":
            console.log(" Time to relax!");
            break;
        default:
            console.log(" Just another day...");
    }
}
dayMessage("Monday");
dayMessage("Friday");
dayMessage("Sunday");
dayMessage("Wednesday");
console.log(" FOR LOOP DEMO");
for (let i = 1; i <= 5; i++) {
    console.log(" Iteration:", i);
}
console.log(" WHILE LOOP DEMO");
let count = 1;
while (count <= 5) {
    console.log(" Count:", count);
    count++;
}
console.log(" DO…WHILE LOOP DEMO");
let num = 1;
do {
    console.log(" Number:", num);
    num++;
} while (num <= 5);

console.log("COMBINED DEMO START");
