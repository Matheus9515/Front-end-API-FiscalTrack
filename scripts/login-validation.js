document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar o envio do formulário
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      const loginData = {
        email: email,
        password: password
      };
  
      fetch('https://api-for-invoices.onrender.com/login', { // URL da API de login
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) { // Assumindo que a resposta da API contém uma chave 'success'
          // Salve o token de autenticação, se houver
          localStorage.setItem('authToken', data.token);
  
          // Redirecionar para a página principal
          window.location.href = 'notas_fiscais.html';
        } else {
          // Exibir mensagem de erro
          loginError.textContent = 'Credenciais inválidas. Por favor, tente novamente.';
          loginError.style.display = 'block';
        }
      })
      .catch(error => {
        console.error('Erro:', error);
        loginError.textContent = 'Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.';
        loginError.style.display = 'block';
      });
    });
  });
  