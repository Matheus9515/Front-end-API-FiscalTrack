document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('myModal');
  const adicionarNotaButton = document.getElementById('salvarDetalhes');
  const closeButton = document.querySelector('.close');

  adicionarNotaButton.addEventListener('click', adicionarNotaFiscal);
  closeButton.addEventListener('click', fecharModal);

  function abrirModal() {
    $('#myModal').modal('show');
    $('#myModal').addClass('fade-in');
  }

  function fecharModal() {
    $('#myModal').modal('hide');
    $('#myModal').removeClass('fade-in');
    setTimeout(function() {
      $('#myModal').modal('hide');
    }, 300); // Aguarda 300ms para permitir a animação de fade-out
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
      fecharModal();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  // Exibe os campos de preenchimento após selecionar o arquivo
  document.getElementById('inputFile').addEventListener('change', function() {
    document.getElementById('camposPreenchimento').style.display = 'block';
  });
});
