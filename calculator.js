//prefix notation  + 2 3 4 
//addition, substraction, multipication, division, square root
//let user input number 

//operator 


const rline = require("readline")

let reader = rline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Enter operator and two numbers", function(input){
    tokens = input.split(' ');

    operator = tokens[0];
    num1 = Number(tokens[1]);
    num2 = Number(tokens[2]);

    if (operator === '+'){
        console.log(num1 + num2)
    
    } else if ( operator === '-'){
        console.log(num1 = num2)
    } else if (operator === '*'){
        console.log(num1 * num2)
    } else if (operator === '/'){
        console.log(num1 / num2)
    } else if (operator === "**"){
        console.log(num1 ** num2)
    } else {
        console.log("Invalid")
    }



    reader.close()

});