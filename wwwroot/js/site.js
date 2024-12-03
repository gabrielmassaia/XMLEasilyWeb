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
        { nome: "Cotacao_2024-12-02.xml", data: "2024-12-02" },
        { nome: "Cotacao_2024-12-03.xml", data: "2024-12-03" },
        { nome: "Cotacao_2024-12-04.xml", data: "2024-12-04" },
        { nome: "Cotacao_2024-12-05.xml", data: "2024-12-05" },
        { nome: "Cotacao_2024-12-06.xml", data: "2024-12-06" },
        { nome: "Cotacao_2024-12-07.xml", data: "2024-12-07" },
        { nome: "Cotacao_2024-12-08.xml", data: "2024-12-08" },
        { nome: "Cotacao_2024-12-09.xml", data: "2024-12-09" },

    ];

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

    
    downloadBtn.addEventListener("click", () => {
        alert("Download iniciado...");
        // Lógica de download
    });

    openFileBtn.addEventListener("click", () => {
        alert("Abrindo arquivo...");
        // Lógica de abertura
    });

    refreshBtn.addEventListener("click", () => {
        carregarArquivos();
    });

    clearBtn.addEventListener("click", () => {
        fileDisplayArea.innerHTML = `<p class="text-muted text-center">Nenhum arquivo carregado.</p>`;
    });

    carregarArquivos();
});

