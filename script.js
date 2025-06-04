function novaRecomendacao() {
    const nova = prompt("Digite sua recomendação:");

    if (nova) {
        const lista = document.getElementById("lista-recomendacoes");
        const novaRecomendacao = document.createElement("p");
        novaRecomendacao.textContent = `"${nova}"`;
        lista.appendChild(novaRecomendacao);

        alert("Recomendação adicionada com sucesso!");
    } else {
        alert("Você não digitou nenhuma recomendação.");
    }
}
