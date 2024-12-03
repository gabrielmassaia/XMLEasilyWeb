document.addEventListener("DOMContentLoaded", () => {
    const fileDisplayArea = document.getElementById("fileDisplayArea");
    const searchBtn = document.getElementById("searchBtn");
    const downloadBtn = document.getElementById("downloadBtn");
    const openFileBtn = document.getElementById("openFileBtn");
    const refreshBtn = document.getElementById("refreshBtn");
    const clearBtn = document.getElementById("clearBtn");

    // Mock: Dados de arquivos (simulação de retorno do backend)
    const arquivos = [
        { nome: "Cotacao_2024-12-01.xml", data: "2024-12-01" },
        { nome: "Cotacao_2024-12-02.xml", data: "2024-12-02" }
    ];

    // Função para exibir arquivos no quadro
    const carregarArquivos = () => {
        fileDisplayArea.innerHTML = "";
        arquivos.forEach((arquivo) => {
            const fileItem = document.createElement("div");
            fileItem.className = "file-item d-flex justify-content-between align-items-center p-2 mb-2";
            fileItem.style = "border: 1px solid #ddd; border-radius: 8px; background-color: #f1f1f1;";
            fileItem.innerHTML = `
                <span>${arquivo.nome}</span>
                <button class="btn btn-sm btn-outline-primary" onclick="abrirArquivo('${arquivo.nome}')">Abrir</button>
            `;
            fileDisplayArea.appendChild(fileItem);
        });
    };

    // Evento para buscar data
    searchBtn.addEventListener("click", () => {
        const dataInput = document.getElementById("dataInput").value;
        if (dataInput) {
            alert(`Buscando arquivos para a data: ${dataInput}`);
            // Lógica de filtragem por data (simulada aqui)
            const arquivosFiltrados = arquivos.filter(a => a.data === dataInput);
            if (arquivosFiltrados.length > 0) {
                fileDisplayArea.innerHTML = arquivosFiltrados.map(a => `<p>${a.nome}</p>`).join("");
            } else {
                fileDisplayArea.innerHTML = `<p class="text-muted">Nenhum arquivo encontrado.</p>`;
            }
        } else {
            alert("Por favor, selecione uma data!");
        }
    });

    // Evento para download
    downloadBtn.addEventListener("click", () => {
        alert("Download iniciado...");
        // Lógica de download
    });

    // Evento para abrir arquivo
    openFileBtn.addEventListener("click", () => {
        alert("Abrindo arquivo...");
        // Lógica de abertura
    });

    // Evento para atualizar conteúdo
    refreshBtn.addEventListener("click", () => {
        carregarArquivos();
    });

    // Evento para limpar conteúdo
    clearBtn.addEventListener("click", () => {
        fileDisplayArea.innerHTML = `<p class="text-muted text-center">Nenhum arquivo carregado.</p>`;
    });

    // Carregar arquivos inicialmente
    carregarArquivos();
});

