function calc(){
let a = parseInt(document.querySelector("#value1").value);
let b = parseInt(document.querySelector("#value2").value);
let op = document.querySelector("#operator").value;

/*
switch (op) {
    case "add":
*/

if (op == "add"){
    calculate = a + b;
} else if (op == "min"){
    calculate = a - b;
} else if (op == "divide"){
    calculate = a / b;
} else if (op == "multiply"){
    calculate = a * b;
}
//console.log(calculate);
document.querySelector("#result").innerHTML = calculate;
}