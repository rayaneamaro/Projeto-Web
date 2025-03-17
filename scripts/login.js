// Exibe uma mensagem de alerta
function showAlert(message) {
    alert(message);
}

// Redireciona para a página de dashboard
function redirectToDashboard() {
    window.location.href = "/pages/dashboard.html"; // Ajuste o caminho, se necessário
}

// Realiza a autenticação do usuário
async function authenticateUser(email, password) {
    try {
        const response = await fetch('http://localhost:3000/users');
        if (!response.ok) {
            throw new Error('Erro ao conectar ao servidor.');
        }

        const users = await response.json();
        return users.find(user => user.email === email && user.password === password);
    } catch (error) {
        console.error('Erro na autenticação:', error);
        showAlert('Erro ao autenticar. Tente novamente mais tarde.');
        return null;
    }
}

// Lida com o processo de login
async function handleLogin() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    console.log('E-mail:', email);
    console.log('Senha:', password);

    if (!email || !password) {
        showAlert('Por favor, preencha todos os campos.');
        return;
    }

    const user = await authenticateUser(email, password);
    console.log('Usuário autenticado:', user);

    if (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        redirectToDashboard();
    } else {
        showAlert('E-mail ou senha inválidos.');
    }
}

// Lida com o processo de logout
function handleLogout() {
    // Limpa os dados de sessão/localStorage
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');

    // Redireciona para a página de login
    window.location.href = "login.html";
}