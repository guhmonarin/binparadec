const input = document.getElementById("numero");

input.addEventListener("blur", validarCampo());

function validarCampo() {
  const numeroBin = input.value;
  let regex = /^[0-1]+$/;

  if (!regex.test(numeroBin)) {
    const mensagemErro = document.createElement("p");
    mensagemErro.innerHTML =
      "Não é um número binário válido, digite novamente!";
    input.insertAdjacentElement(mensagemErro);
  }
}
