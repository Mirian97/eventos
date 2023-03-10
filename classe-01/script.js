const produtos = document.querySelectorAll(".produtos li");
const input = document.querySelector("input")

input.addEventListener("keydown", (event) => {
    if (event.code !== "Enter") {
        return;
    }
    console.log(event.target)
    filtrarProduto(produtos, event.target.value);

    input.value = "";
});

const filtrarProduto = (lista) => {

    lista.forEach(produto => {
        const valorInput = input.value.toUpperCase();
        const produtoFiltrado = produto.textContent.toUpperCase();
        if (produtoFiltrado.includes(valorInput)) {
            produto.style.display = "flex"
        } else {
            produto.style.display = "none"
        }
    });
}
