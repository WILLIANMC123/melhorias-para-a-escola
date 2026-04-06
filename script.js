// Funcionalidade para navegação entre as abas
function openTab(evt, tabName) {
    // Esconde todas as abas
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe "active" de todas as abas
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Exibe a aba selecionada e marca como "active"
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Função para enviar sugestões
document.getElementById('idea-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Captura os dados do formulário
    let name = document.getElementById('student-name').value.trim();
    const title = document.getElementById('idea-title').value;
    const desc = document.getElementById('idea-desc').value;

    // Se o nome estiver vazio, define como "Anônimo"
    if (name === "") {
        name = "Estudante Anônimo";
    }

    // Cria um novo cartão de sugestão
    const ideaCard = document.createElement('div');
    ideaCard.classList.add('idea-card');
    ideaCard.innerHTML = `
        <h3>${title}</h3>
        <p>${desc}</p>
        <small>💡 Sugerido por: ${name}</small>
    `;

    // Adiciona a nova sugestão ao container
    const container = document.getElementById('ideas-container');
    container.prepend(ideaCard); // Adiciona no topo

    // Limpa o formulário para a próxima sugestão
    document.getElementById('idea-form').reset();
});

// Função para enviar feedback
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Captura os dados do feedback
    const rating = document.getElementById('feedback-rating').value;
    const comments = document.getElementById('feedback-comments').value;

    // Cria um novo cartão de feedback
    const feedbackCard = document.createElement('div');
    feedbackCard.classList.add('feedback-card');
    feedbackCard.innerHTML = `
        <p><strong>Avaliação:</strong> ${rating} - ${rating === '5' ? 'Muito Satisfeito' : rating === '4' ? 'Satisfeito' : rating === '3' ? 'Neutro' : rating === '2' ? 'Insatisfeito' : 'Muito Insatisfeito'}</p>
        <p><strong>Comentários:</strong> ${comments}</p>
    `;

    // Adiciona o feedback ao container
    const feedbackContainer = document.getElementById('feedback-container');
    feedbackContainer.appendChild(feedbackCard);

    // Limpa o formulário de feedback
    document.getElementById('feedback-form').reset();
});

// Exibe a aba de sugestões ao carregar a página
window.onload = function() {
    document.getElementById("defaultOpen").click(); // Exibe a aba padrão ao carregar
};
