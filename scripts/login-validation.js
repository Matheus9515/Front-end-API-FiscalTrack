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

// NÃO MOSTRA LOGIN SE O AUTHTOKEN ESTIVER PRESENTE
  document.addEventListener("DOMContentLoaded", function() {
    const authToken = localStorage.getItem("authToken");

    // Verifica se o authToken está presente
    if (authToken) {
        document.getElementById("loginBtnContainer").style.display = "none"; // Oculta o botão de login

        // Mostra os botões adicionais na navbar
        document.querySelectorAll(".btn-custom").forEach(button => {
            button.style.display = "inline-block";
        });

        // Mostra a navbar do perfil
        document.getElementById("profileLink").style.display = "inline-block";
    } else {
        document.getElementById("loginBtnContainer").style.display = "block"; // Mostra o botão de login

        // Oculta os botões adicionais na navbar
        document.querySelectorAll(".btn-custom").forEach(button => {
            button.style.display = "none";
        });

        // Oculta a navbar do perfil
        document.getElementById("profileLink").style.display = "none";
    }
});

// REDIRECIONA CASO O AUTHTOKEN NÃO ESTIVER PRESENTE
document.addEventListener("DOMContentLoaded", function() {
  const authToken = localStorage.getItem("authToken");
  const restrictedPages = ['notas_fiscais.html', 'editar_perfil.html', 'relatorios.html']; // Páginas que requerem autenticação

  // Verifica se o usuário está em uma página restrita e não possui authtoken
  if (!authToken && restrictedPages.includes(getPageNameFromUrl())) {
      // Redireciona para a página de login
      window.location.href = 'login.html';
  }
});

// Obtém o nome da página a partir da URL
function getPageNameFromUrl() {
  const url = window.location.href;
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 1];
}

// Limpa o localStorage ao fazer logout e redireciona para o index.html
function logout() {
  localStorage.removeItem("authToken");
  window.location.href = "index.html";
}


// Verifica a cada mudança de URL se o usuário tentou acessar uma página restrita
window.addEventListener('popstate', function() {
  const authToken = localStorage.getItem("authToken");
  const currentPage = getPageNameFromUrl();

  if (!authToken && restrictedPages.includes(currentPage)) {
      // Redireciona para a página de login
      window.location.href = 'login.html';
  }
});


