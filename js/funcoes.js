var pin;
var input_message;
document.addEventListener('DOMContentLoaded', function () {
    gerador_de_pin();
    input_message = document.getElementById("input-msg");
});

function verificar() {
    console.log(pin);
    var msg = document.getElementById("msg");
    value = document.getElementById("pin").value;
    console.log("input: "+value)
    if (pin == Number(value)) {
        //alert("Certo");
        msg.innerHTML = '  <div class="bg-green-200 p-3">Certo!!!</div>'
        gerador_de_pin();
    } else if (pin > Number(value)) {
        //alert("É maior que este");
        msg.innerHTML = '  <div class="bg-red-200 p-3">É maior que este!!!</div>'
    } else {
        //alert("É menor que este");
        msg.innerHTML = '  <div class="bg-red-200 p-3">É menor que este!!!</div>'
    }
}



function gerador_de_pin() {
    pin = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    console.log("gerado agora: "+pin);
}
