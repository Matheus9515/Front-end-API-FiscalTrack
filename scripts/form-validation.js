// scripts/form-validation.js

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    var email = document.getElementById('email');
    var confirmEmail = document.getElementById('confirmEmail');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var isValid = true;

    // Validações
    if (!email.checkValidity()) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    if (email.value !== confirmEmail.value) {
        confirmEmail.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmEmail.classList.remove('is-invalid');
    }

    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    // Se todos os campos são válidos, submete o formulário
    if (isValid) {
        this.submit();
    }
});

function mostrarPopup() {
    alert("Essa função será implementada no futuro!");
}
