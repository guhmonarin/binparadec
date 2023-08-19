const input = document.getElementById("numero");
const btn = document.getElementById("calcular");
const subTitulo = document.querySelector(".sub-titulo");

// Fazer as validações necessarias
input.addEventListener("blur", validarCampo);

// Transformar numero binario em decimal

btn.addEventListener("click", function () {
  if (btn.innerHTML == "Voltar") {
    crearElementos();
  } else {
    const numeroBin = input.value;
    let decimal = 0;
    if (validarCampo()) {
      for (let index = numeroBin.length - 1; index >= 0; index--) {
        decimal +=
          parseInt(numeroBin[index]) *
          Math.pow(2, numeroBin.length - 1 - index);
      }

      resultado(decimal);
    }
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
    mensagemErro.innerHTML = "Número inválido, digite novamente";
    input.insertAdjacentElement("afterend", mensagemErro);
  } else {
    return true;
  }
}

// resultado
function resultado(decimal) {
  input.style.display = "none";
  btn.innerHTML = "Voltar";

  subTitulo.innerHTML = "O número decimal é:";
  const resultado = document.createElement("p");
  resultado.classList = "resultado";
  resultado.innerHTML = decimal;
  subTitulo.insertAdjacentElement("afterend", resultado);
}

//crear os elementos
function crearElementos() {
  subTitulo.innerHTML = "Digite um número binário:";
  input.style.display = "block";
  input.value = "";
  const resultado = document.querySelector(".resultado");
  resultado.remove();
  btn.innerHTML = "Calcular";
}
