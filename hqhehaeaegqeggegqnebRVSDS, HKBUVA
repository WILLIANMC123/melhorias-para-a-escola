// Função para navegar entre as abas
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Carregar as sugestões salvas no LocalStorage
function loadIdeas() {
    const ideas = JSON.parse(localStorage.getItem('ideas')) || [];
    const container = document.getElementById('ideas-container');
    container.innerHTML = ''; // Limpa o conteúdo existente
    ideas.forEach(idea => {
        const ideaCard = document.createElement('div');
        ideaCard.classList.add('idea-card');
        ideaCard.innerHTML = `
            <h3>${idea.title}</h3>
            <p>${idea.desc}</p>
            <small>💡 Sugerido por: ${idea.name}</small>
        `;
        container.prepend(ideaCard);
    });
}

// Enviar uma nova sugestão
document.getElementById('idea-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('student-name').value
