// Simulação de banco de dados de alunos no front-end
const alunos = [
    { nome: "Lucas Silva", status: "dormindo", label: "Dormindo" },
    { nome: "Mariana Costa", status: "animado", label: "Animada" },
    { nome: "João Pedro", status: "ansioso", label: "Ansioso" },
    { nome: "Ana Júlia", status: "preguica", label: "Preguiça" },
    { nome: "Pedro Alves", status: "triste", label: "Triste" },
    { nome: "Carla Mendes", status: "animado", label: "Focada" }
];

const grid = document.getElementById('camera-grid');

// Função para renderizar as câmeras
function renderCameras() {
    grid.innerHTML = '';
    alunos.forEach(aluno => {
        // Gera uma porcentagem de confiança da IA aleatória (80% a 99%)
        const precisao = (Math.random() * (99 - 80) + 80).toFixed(1);
        
        const card = document.createElement('div');
        card.className = 'glass-panel student-cam';
        
        card.innerHTML = `
            <div class="cam-feed">
                <div class="scan-line"></div>
                <span style="color: #444;">[ Câmera Ativa ]</span>
            </div>
            <h3 style="margin: 15px 0 5px 0;">${aluno.nome}</h3>
            <span class="status ${aluno.status}">${aluno.label} (${precisao}%)</span>
        `;
        
        grid.appendChild(card);
    });
}

// Simula a IA atualizando os estados dos alunos a cada 5 segundos
function simularIA() {
    const estados = [
        { class: 'animado', label: 'Animado/Focado' },
        { class: 'triste', label: 'Triste' },
        { class: 'ansioso', label: 'Ansioso' },
        { class: 'dormindo', label: 'Dormindo' },
        { class: 'preguica', label: 'Com Preguiça' }
    ];

    // Sorteia um aluno e muda o estado dele aleatoriamente
    setInterval(() => {
        const alunoIndex = Math.floor(Math.random() * alunos.length);
        const novoEstado = estados[Math.floor(Math.random() * estados.length)];
        
        alunos[alunoIndex].status = novoEstado.class;
        alunos[alunoIndex].label = novoEstado.label;
        
        renderCameras(); // Re-renderiza a tela
    }, 5000); // Atualiza a cada 5 segundos
}

// Inicia o sistema
renderCameras();
simularIA();
