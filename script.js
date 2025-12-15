// ===== MOSTRAR TREINOS =====
function mostrarTreino(letra) {
    const treinos = ["treinoA", "treinoB", "treinoC", "treinoD"];

    // Esconde todos os treinos (só se existirem)
    treinos.forEach(id => {
        const treino = document.getElementById(id);
        if (treino) {
            treino.style.display = "none";
        }
    });

    // Mostra o treino selecionado
    const treinoSelecionado = document.getElementById("treino" + letra);
    if (treinoSelecionado) {
        treinoSelecionado.style.display = "block";
    }
}

// ===== EDITAR EVOLUÇÃO =====
function editarValor(id) {
    const elemento = document.getElementById(id);

    if (!elemento) {
        alert("Elemento não encontrado: " + id);
        return;
    }

    const novoValor = prompt("Digite o novo valor:");

    if (novoValor !== null && novoValor !== "") {
        elemento.innerText = novoValor;
    }
}
