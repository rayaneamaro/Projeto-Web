// Exibe as informações do usuário autenticado
document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (!user) {
        alert('Você precisa estar logado para acessar o dashboard.');
        window.location.href = '/pages/login.html';
        return;
    }

    document.getElementById('user-name').textContent = user.name;
});

// Função para logout
function handleLogout() {
    sessionStorage.removeItem('user');
    window.location.href = "../index.html";
    
}