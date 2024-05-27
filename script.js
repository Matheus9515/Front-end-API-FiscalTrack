function funcaoFutura() {
  window.location.href = 'notas_fiscais.html';
}

function outraFuncaoFutura() {
  alert("Outra função será implementada no futuro!");
}

function mostrarPopup() {
  alert("Essa função será implementada no futuro!");
}

function mostrarTelas() {
  document.querySelector('.intro-text').style.display = 'none';
  document.querySelector('.about-section').style.display = 'none';
  document.querySelector('.login-form').style.display = 'block';
  document.querySelector('.register-form').style.display = 'block';
  window.location.href = 'http://localhost/b/cadastro';
}

function mostrarPopup() {
  $('#myModal').modal('show');
}

function adicionarNotaFiscal() {
  var fileInput = document.getElementById('notaFiscalFile');
  var fileName = fileInput.files[0].name;
  alert("Nota Fiscal adicionada: " + fileName);
  $('#myModal').modal('hide');
}

$('#myModal').on('hidden.bs.modal', function () {
  var modalDialog = $(this).find('.modal-dialog');
  modalDialog.css('transform', 'translate(0, -50%)');
  modalDialog.css('opacity', '0');
  $('#notaFiscalFile').val('');
});

$('#myModal').on('show.bs.modal', function () {
  var modalDialog = $(this).find('.modal-dialog');
  setTimeout(function() {
    modalDialog.css('transform', 'translate(0, 0)');
    modalDialog.css('opacity', '1');
  }, 10); 
});
