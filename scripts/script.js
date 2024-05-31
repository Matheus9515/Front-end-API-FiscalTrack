document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('myModal');
  const addButton = document.querySelector('.btn-primary');
  const closeButton = document.querySelector('.close');

  addButton.addEventListener('click', adicionarNotaFiscal);
  closeButton.addEventListener('click', fecharModal);

  function adicionarNotaFiscal() {
    const inputFile = document.getElementById('inputFile');
    const fileName = inputFile.files[0]?.name;
    if (fileName) {
      // Exibir o nome do arquivo ao lado do botão adicionar
      const fileNameElement = document.createElement('p');
      fileNameElement.textContent = `Arquivo selecionado: ${fileName}`;
      modal.querySelector('.modal-body').appendChild(fileNameElement);
    }
  }

  function fecharModal() {
    modal.classList.remove('animate__fadeIn'); // Remover a animação de entrada se estiver ativa
    modal.classList.add('animate__fadeOut'); // Adicionar a animação de saída

    modal.addEventListener('animationend', function() {
      $('#myModal').modal('hide');
      modal.classList.remove('animate__fadeOut'); // Remover a animação de saída após o término
    }, { once: true });


  }

  // Adicionar a animação de fade-in ao abrir o modal
  $('#myModal').on('show.bs.modal', function () {
    modal.classList.add('animate__fadeIn');
    
  });
});

// script.js

function adicionarNotaFiscal() {
  const fileInput = document.getElementById('inputFile');
  const notasFiscaisList = document.getElementById('notasFiscaisList');

  if (fileInput.files.length === 0) {
      alert('Por favor, selecione um arquivo.');
  } else {
      const file = fileInput.files[0];
      const fileName = file.name;

      // Cria um elemento para exibir a nota fiscal
      const notaFiscalItem = document.createElement('div');
      notaFiscalItem.classList.add('col-12', 'col-md-4', 'mb-3');
      notaFiscalItem.innerHTML = `
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">${fileName}</h5>
                  <p class="card-text">Nota fiscal adicionada com sucesso.</p>
              </div>
          </div>
      `;

      // Adiciona o elemento à lista de notas fiscais
      notasFiscaisList.appendChild(notaFiscalItem);

      // Fecha o modal
      $('#myModal').modal('hide');
      
      // Limpa o campo de input
      fileInput.value = '';
  }
}

// script.js

function gerarRelatorio() {
  const dataInicial = document.getElementById('dataInicial').value;
  const dataFinal = document.getElementById('dataFinal').value;

  if (!dataInicial || !dataFinal) {
      alert('Por favor, selecione as datas inicial e final.');
  } else {
      // Lógica para gerar o relatório
      alert(`Relatório gerado de ${dataInicial} a ${dataFinal}!`);
  }
}
