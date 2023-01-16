const suma = () => {
    let AA = document.getElementById("numberA").value;
    let BB = document.getElementById("numberB").value;
    document.getElementById("numberC").value =  AA + " + " + BB + " = " + (parseInt(AA,10) +parseInt(BB,10)) ;
}

const resta = () => {
    let AA = document.getElementById("numberA").value;
    let BB = document.getElementById("numberB").value;
    document.getElementById("numberC").value =  AA + " - " + BB + " = " + (parseInt(AA,10) -parseInt(BB,10)) ;
}
const multi = () => {
    let AA = document.getElementById("numberA").value;
    let BB = document.getElementById("numberB").value;
    document.getElementById("numberC").value =  AA + " * " + BB + " = " + (parseInt(AA,10) *parseInt(BB,10)) ;
}

const divi = () => {
    let AA = document.getElementById("numberA").value;
    let BB = document.getElementById("numberB").value;
    document.getElementById("numberC").value =  AA + " / " + BB + " = " + (parseInt(AA,10) /parseInt(BB,10)) ;
}

function facA (){
    let b =1;
    let AA = parseInt(document.getElementById("numberA").value,10);
    for (let i = 1; i <= AA; i++) {
         b *= i;
    }
    document.getElementById("numberC").value = b;
    return b;
}
function facB (){
    let b =1;
    let BB = parseInt(document.getElementById("numberB").value,10);
    for (let i = 1; i <= BB; i++) {
         b *= i;
    }
    document.getElementById("numberC").value = b;
    return b;
}
const cuaA = () => {
    let AA = document.getElementById("numberA").value;
    document.getElementById("numberC").value =  AA + " ^2 " + " = " + (parseInt(AA,10) * parseInt(AA,10)) ;
}
const cuaB = () => {
    let BB = document.getElementById("numberB").value;
    document.getElementById("numberC").value =  BB + " ^2 " + " = " + (parseInt(BB,10) * parseInt(BB,10)) ;
}
const cubA = () => {
    let AA = document.getElementById("numberA").value;
    document.getElementById("numberC").value =  AA + " ^3 " + " = " + (parseInt(AA,10)*parseInt(AA,10) * parseInt(AA,10)) ;
}
const cubB = () => {
    let BB = document.getElementById("numberB").value;
    document.getElementById("numberC").value =  BB + " ^3 " + " = " + (parseInt(BB,10) *parseInt(BB,10) * parseInt(BB,10)) ;
}
const senA = () => {
    let AA = document.getElementById("numberA").value;
    document.getElementById("numberC").value = "sen (" +AA + ") " + " = " + Math.sin((parseInt(AA,10))) ;
}
const cosA = () => {
    let AA = document.getElementById("numberA").value;
    document.getElementById("numberC").value = "cos (" +AA + ") " + " = " + Math.cos((parseInt(AA,10))) ;
}