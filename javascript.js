// funtion 1
function isNumberPositive(inputNumber) {
    if (inputNumber>=0) {
        return "true"
    } else {
        return "false"
    }
}
console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));


//function 2
const convertDaysToAge = (inputDays) => {
    const daysToAge = inputDays/365;
    return daysToAge
}
console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));


//function 3
const getLargestNumber = (number1, number2, number3) => {
    const largestNumber = Math.max(number1, number2, number3);
    return largestNumber
}
console.log(getLargestNumber(2, 1, 4));
console.log(getLargestNumber(6, 2, 3));


//function 4
function getLastName(names) {
    var lastName = names[names.length - 1];
    return lastName
}
console.log(getLastName(["Charlie", "Rob", "Andy"]));
console.log(getLastName(["Ash", "Stu"]));


// function 5
function allNumbersPositive(numbers) {
    let isTrue;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]<=0) {
            isTrue=false;
            break;
        } else {
            isTrue=true;
        }
    }
    return isTrue;
}
console.log(allNumbersPositive([2, 4, 5]));
console.log(allNumbersPositive([-5, 4, 6]));

