document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirmEmail');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
  
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar o envio do formulário
  
      // Verificar se os campos de email e senha correspondem aos campos de confirmação
      if (emailInput.value !== confirmEmailInput.value) {
        confirmEmailInput.classList.add('is-invalid');
        return;
      } else {
        confirmEmailInput.classList.remove('is-invalid');
      }
  
      if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.classList.add('is-invalid');
        return;
      } else {
        confirmPasswordInput.classList.remove('is-invalid');
      }
  
      // Se todos os campos estiverem corretos, enviar o formulário para a API
      const userData = {
        Nome: nameInput.value,
        Email: emailInput.value,
        Senha: passwordInput.value
      };
  
      fetch('https://api-for-invoices.onrender.com/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('authToken')
        },
        body: JSON.stringify(userData)
      })
      .then(data => {
        console.log('Registro bem-sucedido:');
        alert('Registro bem-sucedido! Faça o login para continuar.');
        // Redirecionar para a página de login
        window.location.href = 'login.html';
      })
      .catch(error => {
        console.error('Erro no registro:', error);
        alert('Erro no registro: ' + error.message);
      });
  
    });
  });
  