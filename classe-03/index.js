const botaoInscrever = document.querySelector(".btn");
const botoesDoModal = document.querySelectorAll(".modal button");
const botaoConfirmar = document.querySelector(".confirmar");
const modal = document.querySelector(".modal");

botaoInscrever.addEventListener("click", inscrever);

botoesDoModal.forEach(botao => {
    botao.addEventListener("click", function () {
        modal.classList.add("escondido")
    })
});

function inscrever() {
    if (botaoInscrever.textContent === "INSCREVER-SE") {
        botaoInscrever.textContent = "INSCRITO";
        botaoInscrever.classList.remove("btn")
        botaoInscrever.classList.add("inscrito");
    } else {
        modal.classList.remove("escondido")
    }
}

botaoConfirmar.addEventListener("click", function () {

    botaoInscrever.textContent = "INSCREVER-SE"
    botaoInscrever.classList.remove("inscrito");
    botaoInscrever.classList.add("btn")

    botaoInscrever.addEventListener("click", inscrever)
})