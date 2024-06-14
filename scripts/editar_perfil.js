function logout() {
    // Remove o token de autorização do local storage
    localStorage.removeItem('authToken');
    
    // Redireciona o usuário para a página de login
    window.location.href = 'index.html';
}
