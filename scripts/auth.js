function onchangeEmail() {
    toggleButtonDisabled();
    toggleEmailErrors();
}

function onchangePassword() {
    toggleButtonDisabled();
    togglePasswordErrors();
}

function isEmailValid() {
    const email = form.email().value;

    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar e-mails
    return emailRegex.test(email);
}

function toggleEmailErrors() {
    const email = form.email().value;

    form.emailRequeredError().style.display = email ? "none" : "block";
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = form.password().value;

    form.passwordRequeredError().style.display = password ? "none" : "block";
}

function toggleButtonDisabled() {
    const emailValid = isEmailValid();
    form.recoverPassword().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}

const form = {
    email: () => document.getElementById('email'),
    emailRequeredError: () => document.getElementById('email-requerid-error'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    loginButton: () => document.getElementById('login-button'),
    password: () => document.getElementById('password'),
    passwordRequeredError: () => document.getElementById('password-requerid-error'),
    recoverPassword: () => document.getElementById('recover-password-button'),
};