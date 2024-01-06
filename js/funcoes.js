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

function verificar_digitos(value) {
    console.log(value);
    if(value.length<4 || value.length>4){
        if(value.length==3){
            input_message.innerHTML = "quase lá";
            input_message.style.color = "orange";
        }
        input_message.innerHTML = "deve ser 4 digitos";
        input_message.style.color = "red";
    }else{
        input_message.innerHTML = "digitos certos"
        input_message.style.color = "green";
    }
}

function gerador_de_pin() {
    pin = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    console.log("gerado agora: "+pin);
}
