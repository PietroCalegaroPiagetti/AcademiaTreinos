// ===== MOSTRAR TREINOS =====
function mostrarTreino(letra) {
    const treinos = ["treinoA", "treinoB", "treinoC", "treinoD"];

    treinos.forEach(id => {
        const treino = document.getElementById(id);
        if (treino) {
            treino.style.display = "none";
        }
    });

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

// ===== CARROSSEL =====
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;

    const slidesContainer = document.querySelector(".slides");
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const btnPrev = document.querySelector(".btn-prev");
    const btnNext = document.querySelector(".btn-next");

    // Se não existir carrossel na página, não executa
    if (!slidesContainer || slides.length === 0) return;

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        const slideWidth = slides[0].clientWidth;
        slidesContainer.style.transform =
            `translateX(-${slideWidth * currentIndex}px)`;

        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[currentIndex]) {
            dots[currentIndex].classList.add("active");
        }
    }

    btnNext?.addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });

    btnPrev?.addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
        });
    });

    showSlide(currentIndex);
});
