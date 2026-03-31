// Escuta o evento de envio do formulário
document.getElementById('idea-form').addEventListener('submit', function(event) {
    // Impede a página de recarregar
    event.preventDefault(); 

    // Captura o que o usuário digitou
    let name = document.getElementById('student-name').value.trim();
    const title = document.getElementById('idea-title').value;
    const desc = document.getElementById('idea-desc').value;

    // Se o nome estiver vazio, define como "Anônimo"
    if (name === "") {
        name = "Estudante Anônimo";
    }

    // Cria uma nova caixa (div) para a ideia
    const ideaCard = document.createElement('div');
    ideaCard.classList.add('idea-card');

    // Monta o conteúdo de dentro da caixa
    ideaCard.innerHTML = `
        <h3>${title}</h3>
        <p>${desc}</p>
        <small>💡 Sugerido por: ${name}</small>
    `;

    // Pega o contêiner de ideias e coloca a nova ideia no topo
    const container = document.getElementById('ideas-container');
    container.prepend(ideaCard);

    // Limpa o formulário para a próxima pessoa usar
    document.getElementById('idea-form').reset();
});
