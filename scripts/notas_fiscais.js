
$(document).ready(function() {
    // Exemplo de dados para a tabela
    const notasFiscais = [
        {
            id: 1,
            dataVenda: '2023-05-10',
            descricaoProduto: 'Produto A',
            valorRecebido: 150.00,
            pdfUrl: 'nota_fiscal_1.pdf'
        },
        {
            id: 2,
            dataVenda: '2023-06-15',
            descricaoProduto: 'Produto B',
            valorRecebido: 200.00,
            pdfUrl: 'nota_fiscal_2.pdf'
        }
    ];

    // Função para adicionar uma linha na tabela
    function adicionarLinha(nota) {
        const novaLinha = `
        <tr>
          <td class="text-center">
            <button class="btn btn-custom-color" onclick="abrirNotaFiscal('${nota.pdfUrl}')">
              <i class="fa fa-file-pdf-o"></i>
            </button>
          </td>
          <td>${nota.dataVenda}</td>
          <td>${nota.descricaoProduto}</td>
          <td>${nota.valorRecebido.toFixed(2)}</td>
        </tr>
      `;
        $('#notasFiscaisTable tbody').append(novaLinha);
    }

    // Adiciona as notas fiscais na tabela
   notasFiscais.forEach(adicionarLinha);

// Lógica para salvar uma nova nota fiscal
$('#salvarDetalhes').click(function() {
    const inputFile = $('#inputFile')[0].files[0];
    const dataVenda = $('#dataVenda').val();
    const descricaoProduto = $('#descricaoProduto').val();
    const valorRecebido = $('#valorRecebido').val();

    if (inputFile && dataVenda && descricaoProduto && valorRecebido) {
        // Verifica se o arquivo selecionado é um PDF
        if (inputFile.type === 'application/pdf') {
            const novaNota = {
                id: notasFiscais.length + 1,
                dataVenda: dataVenda,
                descricaoProduto: descricaoProduto,
                valorRecebido: parseFloat(valorRecebido),
                pdfUrl: URL.createObjectURL(inputFile) // URL temporária para exibição
            };

            adicionarLinha(novaNota);
            $('#myModal').modal();
            $('#formNotaFiscal')[0].reset();
            $('#camposPreenchimento').hide();
        } else {
            alert('Por favor, selecione um arquivo PDF válido.');
        }
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});notasFiscais.forEach(adicionarLinha);

// Lógica para salvar uma nova nota fiscal
$('#salvarDetalhes').click(function() {
    const inputFile = $('#inputFile')[0].files[0];
    const dataVenda = $('#dataVenda').val();
    const descricaoProduto = $('#descricaoProduto').val();
    const valorRecebido = $('#valorRecebido').val();

    if (inputFile && dataVenda && descricaoProduto && valorRecebido) {
        // Verifica se o arquivo selecionado é um PDF
        if (inputFile.type === 'application/pdf') {
            const novaNota = {
                id: notasFiscais.length + 1,
                dataVenda: dataVenda,
                descricaoProduto: descricaoProduto,
                valorRecebido: parseFloat(valorRecebido),
                pdfUrl: URL.createObjectURL(inputFile) // URL temporária para exibição
            };

            adicionarLinha(novaNota);
            $('#myModal').modal();
            $('#formNotaFiscal')[0].reset();
            $('#camposPreenchimento').hide();
        } else {
            alert('Por favor, selecione um arquivo PDF válido.');
        }
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});

    // Exibe os campos adicionais após selecionar o arquivo
    $('#inputFile').change(function() {
        if (this.files && this.files[0]) {
            $('#camposPreenchimento').show();
        } else {
            $('#camposPreenchimento').hide();
        }
    });
});

// Função para abrir a nota fiscal em uma nova página
function abrirNotaFiscal(url) {
    window.open(url, '_blank');
}







/*


$(document).ready(function() {
    // Exemplo de dados para a tabela
    const notasFiscais = [
        {
            id: 1,
            dataVenda: '2023-05-10',
            descricaoProduto: 'Produto A',
            valorRecebido: 150.00,
            pdfUrl: 'nota_fiscal_1.pdf'
        },
        {
            id: 2,
            dataVenda: '2023-06-15',
            descricaoProduto: 'Produto B',
            valorRecebido: 200.00,
            pdfUrl: 'nota_fiscal_2.pdf'
        }
    ];

    // Função para adicionar uma linha na tabela
    function adicionarLinha(nota) {
        const novaLinha = `
            <tr>
                <td class="text-center">
                 <button class="btn btn-custom-color" onclick="abrirNotaFiscal('${nota.pdfUrl}')">
                    <a href="${nota.pdfUrl}" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-file-pdf-o"></i> ${nota.descricaoProduto}
                    </a>
                 </button>
                </td>
                <td>${nota.dataVenda}</td>
                <td>${nota.valorRecebido.toFixed(2)}</td>
            </tr>
        `;
        $('#notasFiscaisTable tbody').append(novaLinha);
    }
    


// Adiciona as notas fiscais na tabela
notasFiscais.forEach(adicionarLinha);

// Lógica para salvar uma nova nota fiscal
$('#salvarDetalhes').click(function() {
    const inputFile = $('#inputFile')[0].files[0];
    const dataVenda = $('#dataVenda').val();
    const descricaoProduto = $('#descricaoProduto').val();
    const valorRecebido = $('#valorRecebido').val();

    if (inputFile && dataVenda && descricaoProduto && valorRecebido) {
        // Verifica se o arquivo selecionado é um PDF
        if (inputFile.type === 'application/pdf') {
            const novaNota = {
                id: notasFiscais.length + 1,
                dataVenda: dataVenda,
                descricaoProduto: descricaoProduto,
                valorRecebido: parseFloat(valorRecebido),
                pdfUrl: URL.createObjectURL(inputFile) // URL temporária para exibição
            };

            adicionarLinha(novaNota);
            $('#myModal').modal();
            $('#formNotaFiscal')[0].reset();
            $('#camposPreenchimento').hide();
        } else {
            alert('Por favor, selecione um arquivo PDF válido.');
        }
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});


// Exibe os campos adicionais após selecionar o arquivo
$('#inputFile').change(function() {
    if (this.files && this.files[0]) {
        $('#camposPreenchimento').show();
    } else {
        $('#camposPreenchimento').hide();
    }});


// Função para abrir a nota fiscal em uma nova página
function abrirNotaFiscal(url) {
    window.open(url, '_blank');
}});
*/