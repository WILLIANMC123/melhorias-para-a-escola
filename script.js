// Função para abrir a aba correta
function openTab(evt, tabName) {
    // Esconde todas as abas
    const tabContents = document.querySelectorAll('.tabcontent');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove a classe "active" de todas as abas
    const tabLinks = document.querySelectorAll('.tablink');
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Exibe a aba selecionada
    document.getElementById(tabName).classList.add('active');

    // Marca a aba como ativa
    evt.currentTarget.classList.add('active');
}

// Abre a aba "Sugerir Melhorias" por padrão
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tablink').click();
});

// Escuta o evento de envio do formulário
document.getElementById('idea-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Captura os valores inseridos
    let name = document.getElementById('student-name').value.trim();
    const title = document.getElementById('idea-title').value.trim();
    const desc = document.getElementById('idea-desc').value.trim();

    // Validação simples: garante que o título e a descrição não estejam vazios
    if (title === "" || desc === "") {
        alert("Por favor, preencha todos os campos.");
        return; // Não permite o envio do formulário
    }

    // Se o nome estiver vazio, define como "Estudante Anônimo"
    if (name === "") {
        name = "Estudante Anônimo";
    }

    // Cria uma nova caixa (div) para a ideia
    const ideaCard = document.createElement('div');
    ideaCard.classList.add('idea-card');

    // Monta o conteúdo da nova ideia
    ideaCard.innerHTML = `
        <h3>${title}</h3>
        <p>${desc}</p>
        <small>💡 Sugerido por: ${name}</small>
    `;

    // Pega o contêiner de ideias e coloca a nova ideia no topo
    const container = document.getElementById('ideas-container');
    container.prepend(ideaCard);

    // Limpa o formulário para a próxima pessoa
    document.getElementById('idea-form').reset();

    // Feedback visual: mostrar que a sugestão foi enviada
    alert("Sua sugestão foi enviada com
