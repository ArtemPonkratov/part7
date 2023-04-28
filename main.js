function one(){

    let str = "Добро пожаловать";
    let out = document.getElementById("two")
    out.innerHTML = str;
    out.style.fontSize = "50px"
    out.style.color = "red"
    out.style.marginLeft = "38%"
    

}
let buttuon = document.querySelector(".btn");
buttuon.onclick = one;


function bna() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let total = parseFloat(num1) + parseFloat(num2);
    document.getElementById("total").innerHTML = total;
}
let but = document.querySelector(".bn");
but.onclick = bna;

function bna1() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let total = parseFloat(num1) - parseFloat(num2);
    document.getElementById("total").innerHTML = total;
}

let but1 = document.querySelector(".bn1");
but1.onclick = bna1;

function bna2() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let total = parseFloat(num1) / parseFloat(num2);
    document.getElementById("total").innerHTML = total;
}

let but2 = document.querySelector(".bn2");
but2.onclick = bna2;

function bna3() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let total = parseFloat(num1) * parseFloat(num2);
    document.getElementById("total").innerHTML = total;
}

let but3 = document.querySelector(".bn3");
but3.onclick = bna3;