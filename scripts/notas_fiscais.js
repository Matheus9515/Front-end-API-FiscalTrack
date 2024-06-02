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

    // Variável para armazenar o arquivo selecionado
    let inputFile;

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

    // Exibe os campos adicionais após selecionar o arquivo
    $('#inputFile').change(function() {
        inputFile = this.files[0];
        console.log("Arquivo selecionado:", inputFile);
        if (inputFile) {
            $('#camposPreenchimento').show();
        }
    });

    // Lógica para salvar uma nova nota fiscal
    $('#salvarDetalhes').click(function() {
        // Re-obtem os valores dos campos no momento do clique
        const dataVenda = $('#dataVenda').val();
        const descricaoProduto = $('#descricaoProduto').val();
        const valorRecebido = $('#valorRecebido').val();
    
        // Limpa as mensagens de erro
        $('#dataVendaError').text('');
        $('#descricaoProdutoError').text('');
        $('#valorRecebidoError').text('');
    
        // Verifica se os campos estão vazios e exibe mensagens de erro abaixo dos campos correspondentes
        if (!dataVenda) {
            $('#dataVendaError').text('Por favor, preencha este campo').addClass('error');
        }
    
        if (!descricaoProduto) {
            $('#descricaoProdutoError').text('Por favor, preencha este campo').addClass('error');
        }
    
        if (!valorRecebido) {
            $('#valorRecebidoError').text('Por favor, preencha este campo').addClass('error');
        }
    
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
                $('#myModal').modal('hide');
                limparFormulario();
            } else {
                alert('Por favor, selecione um arquivo PDF válido.');
            }
        } else {
            
        }
    });
    

    // Função para limpar o formulário e resetar as variáveis
    function limparFormulario() {
        $('#formNotaFiscal')[0].reset();
        $('#camposPreenchimento').hide();
        inputFile = null; // Resetar a variável inputFile
    }

    // Função para fechar o modal (separada para reutilização)
    function fecharModal() {
        $('#myModal').modal('hide');
        limparFormulario();
    }
});

// Função para abrir a nota fiscal em uma nova página
function abrirNotaFiscal(url) {
    window.open(url, '_blank');
}
