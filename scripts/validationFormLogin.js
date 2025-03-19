// Objeto para manipular elementos do formulário
const form = {
    email: () => document.getElementById('email'),
    emailRequiredError: () => document.getElementById('email-requerid-error'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    password: () => document.getElementById('password'),
    passwordRequiredError: () => document.getElementById('password-requerid-error'),
    loginButton: () => document.getElementById('login-button'),
    recoverPasswordButton: () => document.getElementById('recover-password-button'),
};



// Exibe ou oculta erros relacionados ao e-mail
function toggleEmailErrors() {
    const email = form.email().value.trim();
    const isValid = validateEmail(email);

    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailInvalidError().style.display = isValid ? "none" : "block";
}

// Exibe ou oculta erros relacionados à senha
function togglePasswordErrors() {
    const password = form.password().value.trim();
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

// Habilita ou desabilita os botões com base na validação
function toggleButtonDisabled() {
    const email = form.email().value.trim();
    const password = form.password().value.trim();
    const isEmailValid = validateEmail(email);

    form.recoverPasswordButton().disabled = !isEmailValid;
    form.loginButton().disabled = !(isEmailValid && password);
}

// Função chamada ao alterar o campo de e-mail
function onchangeEmail() {
    toggleEmailErrors();
    toggleButtonDisabled();
}

// Função chamada ao alterar o campo de senha
function onchangePassword() {
    togglePasswordErrors();
    toggleButtonDisabled();
}

// Validação de senha (pode ser expandida no futuro)
function isPasswordValid() {
    const password = form.password().value.trim();
    return !!password;
}