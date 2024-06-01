document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const registerError = document.getElementById('registerError');
  
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar o envio do formulário
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      const registerData = {
        name: name,
        email: email,
        password: password
      };
  
      fetch('https://api-for-invoices.onrender.com/user', { // URL da API de registro
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição de registro');
        }
        return response.json();
      })
      .then(data => {
        if (data.success) { // Assumindo que a resposta da API contém uma chave 'success'
          // Redirecionar para a página de login
          window.location.href = 'login.html';
        } else {
          // Exibir mensagem de erro
          registerError.textContent = 'Ocorreu um erro ao tentar se registrar. Por favor, tente novamente.';
          registerError.style.display = 'block';
        }
      })
      .catch(error => {
        console.error('Erro:', error);
        registerError.textContent = 'Ocorreu um erro ao tentar se registrar. Por favor, tente novamente mais tarde.';
        registerError.style.display = 'block';
      });
    });
  });
  