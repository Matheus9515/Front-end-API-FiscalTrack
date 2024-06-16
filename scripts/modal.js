document.addEventListener('DOMContentLoaded', function() {
  const myModal = document.getElementById('myModal');
  const filterModal = document.getElementById('filterModal');
  const adicionarNotaButton = document.getElementById('salvarDetalhes');
  const closeButtonMyModal = myModal.querySelector('.close');
  const closeButtonFilterModal = filterModal.querySelector('.close');

  adicionarNotaButton.addEventListener('click', adicionarNotaFiscal);
  closeButtonMyModal.addEventListener('click', () => fecharModal(myModal));
  closeButtonFilterModal.addEventListener('click', () => fecharModal(filterModal));

  function abrirModal(modal) {
    $(modal).modal('show');
  }

  function fecharModal(modal) {
    if ($(modal).hasClass('show')) { // Verifica se o modal está aberto
      modal.classList.add('animate__fadeOut'); // Adicionar a animação de saída
      modal.addEventListener('animationend', function() {
        $(modal).modal('hide');
        modal.classList.remove('animate__fadeOut'); // Remover a animação de saída após o término
      }, { once: true });
    } else {
      $(modal).modal('hide');
    }
  }

  function adicionarNotaFiscal() {
    const fileInput = document.getElementById('inputFile');
    const dataVenda = document.getElementById('dataVenda').value;
    const descricaoProduto = document.getElementById('descricaoProduto').value;
    const valorRecebido = document.getElementById('valorRecebido').value;
    const fileName = fileInput.files[0]?.name;

    if (fileName && dataVenda && descricaoProduto && valorRecebido) {
      // Adicionar a nota fiscal à tabela
      const notasFiscaisTable = document.getElementById('notasFiscaisTable').getElementsByTagName('tbody')[0];
      const newRow = notasFiscaisTable.insertRow();

      const cellFile = newRow.insertCell(0);
      const cellData = newRow.insertCell(1);
      const cellDescricao = newRow.insertCell(2);
      const cellValor = newRow.insertCell(3);

      cellFile.textContent = fileName;
      cellData.textContent = dataVenda;
      cellDescricao.textContent = descricaoProduto;
      cellValor.textContent = `R$ ${parseFloat(valorRecebido).toFixed(2)}`;

      // Limpar campos e fechar modal
      document.getElementById('formNotaFiscal').reset();
      document.getElementById('camposPreenchimento').style.display = 'none';
      fecharModal(myModal);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  // Exibe os campos de preenchimento após selecionar o arquivo
  document.getElementById('inputFile').addEventListener('change', function() {
    document.getElementById('camposPreenchimento').style.display = 'block';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('filterModal');
  const closeButton = modal.querySelector('.close');
  closeButton.addEventListener('click', fecharModalFilterModal);

  function abrirModal2() {
    $('#filterModal').modal('show');
  }

  function fecharModalFilterModal() {
    fecharModal(modal);
  }
});