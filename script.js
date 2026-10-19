const botaoTema = document.getElementById("tema");
botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("escuro");
    if (document.body.classList.contains("escuro")) {
        botaoTema.textContent = "☀️ Modo claro";
    } else {
        botaoTema.textContent = "🌙 Modo escuro";
    }
});