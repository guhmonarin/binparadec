const input = document.getElementById("numero");

//Validar se contem 8 digitos
input.addEventListener("input", function () {
  const numeroBin = input.value;
  if (numeroBin.length > 8) {
    input.value = numeroBin.slice(0, 8);
  }
});

// Validar se contem apenas 0 e 1 dando uma mensagem de erro
input.addEventListener("blur", function () {
  const numeroBin = input.value;
  let regex = /^[0-1]+$/;

  const mensagemErro = input.nextElementSibling;
  if (mensagemErro.classList.contains("mensagem-erro")) {
    mensagemErro.remove();
  }

  if (!regex.test(numeroBin)) {
    const mensagemErro = document.createElement("p");
    mensagemErro.classList.add("mensagem-erro");
    mensagemErro.innerHTML =
      "Não é um número binário válido, digite novamente!";
    input.insertAdjacentElement("afterend", mensagemErro);
  }
});
