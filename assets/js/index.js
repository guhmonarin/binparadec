const input = document.getElementById("numero");
const btn = document.getElementById("calcular");

//Validar se contem 8 digitos
/*
input.addEventListener("input", function () {
  const numeroBin = input.value;
  if (numeroBin.length > 8) {
    input.value = numeroBin.slice(0, 8);
  }
});*/

// Fazer as validações necessarias
input.addEventListener("blur", validarCampo);

// Transformar numero binario em decimal

btn.addEventListener("click", function () {
  const numeroBin = input.value;
  let decimal = 0;
  if (validarCampo()) {
    for (let index = numeroBin.length - 1; index >= 0; index--) {
      decimal +=
        parseInt(numeroBin(index)) * Math.pow(2, bin.length - 1 - index);
    }
    console.log(decimal);
  }
});

//validar os campos
function validarCampo() {
  const numeroBin = input.value;
  let regex = /^[0-1]+$/;

  const mensagemErro = input.nextElementSibling;
  if (mensagemErro.classList.contains("mensagem-erro")) {
    mensagemErro.remove();
  }

  if (numeroBin === "") {
    const mensagemErro = document.createElement("p");
    mensagemErro.classList.add("mensagem-erro");
    mensagemErro.innerHTML = "Campo em branco, digite número";
    input.insertAdjacentElement("afterend", mensagemErro);
  } else if (!regex.test(numeroBin)) {
    const mensagemErro = document.createElement("p");
    mensagemErro.classList.add("mensagem-erro");
    mensagemErro.innerHTML =
      "Não é um número binário válido, digite novamente!";
    input.insertAdjacentElement("afterend", mensagemErro);
  } else {
    return true;
  }
}
