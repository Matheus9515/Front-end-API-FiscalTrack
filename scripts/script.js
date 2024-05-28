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
