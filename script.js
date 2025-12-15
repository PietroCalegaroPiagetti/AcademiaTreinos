// ===== MOSTRAR TREINOS =====
function mostrarTreino(letra) {
    // Esconde todos os treinos
    document.getElementById("treinoA").style.display = "none";
    document.getElementById("treinoB").style.display = "none";
    document.getElementById("treinoC").style.display = "none";
    document.getElementById("treinoD").style.display = "none";

    // Mostra apenas o treino selecionado
    if (letra === "A") {
        document.getElementById("treinoA").style.display = "block";
    } else if (letra === "B") {
        document.getElementById("treinoB").style.display = "block";
    } else if (letra === "C") {
        document.getElementById("treinoC").style.display = "block";
    } else if (letra === "D") {
        document.getElementById("treinoD").style.display = "block";
    }
}

// ===== EDITAR EVOLUÇÃO =====
function editarValor(id) {
    let elemento = document.getElementById(id);
    let novoValor = prompt("Digite o novo valor:");

    if (novoValor !== null && novoValor !== "") {
        elemento.innerText = novoValor;
    }
}
