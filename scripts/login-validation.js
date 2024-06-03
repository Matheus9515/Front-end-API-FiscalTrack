document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar o envio do formulário
  
      const Email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const loginData = {
        Email: Email,
        password: password
      };
  
      fetch('https://api-for-invoices.onrender.com/login', { // URL da API de login
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
      })
      .then(response => response.json())
      .then(data => {
        if (data.tkn) {
          localStorage.setItem('authToken', data.tkn);
          window.location.href = 'notas_fiscais.html';
        } else {
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
  