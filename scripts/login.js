function redirectToDashboard() {
    window.location.href = "dashboard.html";
}

function register() {
    window.location.href = "cadastro.html";
}

async function login(email, password) {
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        redirectToDashboard();
    } else {
        alert('E-mail ou senha inválidos.');
    }
}



async function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    await login(email, password);
}


function logout() {
    // Limpa os dados de sessão/localStorage (se aplicável)
    localStorage.removeItem('user'); // Exemplo: remove o usuário armazenado
    sessionStorage.removeItem('user'); // Exemplo: remove o usuário armazenado na sessão

    // Redireciona para a página de login
    window.location.href = "login.html";
}