const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password-confirmation');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkForm()
});


email.addEventListener('blur', () => {
    checkInputEmail()
})

username.addEventListener('blur', () => {
    checkInputUsername()
})

function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Nome obrigatório")
    } else {
        const formItem = username.parentElement
        formItem.className = "form-content"
    }
}

function checkInputEmail() {
    const emailValue = email.value

    if (emailValue === "") {
        errorInput(email, "E-mail obrigatório")
    } else {
        const formItem = email.parentElement
        formItem.className = "form-content"
    }
}

function checkInputPassword() {
    const passwordValue = password.value

    if (passwordValue === "") {
        errorInput(password, "Senha obrigatória")
    } else if (passwordValue.length < 8) {
        errorInput(password, "Senha deve ter no mínimo 8 caracteres")
    } else {
        const formItem = password.parentElement
        formItem.className = "form-content"
    }
}


function checkInputPasswordConfirmation() {
    const passwordValue = password.value
    const confirmationPassworValue = confirmPassword.value

    if (confirmationPassworValue === "") {
        errorInput(confirmPassword, "A confirmação de senha é obrigatória")
    } else if (confirmationPassworValue !== passwordValue) {
        errorInput(confirmPassword, "As senhas devem ser iguais")
    } else {
        const formItem = confirmPassword.parentElement
        formItem.className = "form-content"
    }
}


function checkForm() {
    checkInputUsername()
    checkInputEmail()
    checkInputPassword()
    checkInputPasswordConfirmation()

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every((item) => {
        return item.className === "form-content"
    })

    if (isValid) {
        sendData()
    } else {
        alert("Preencha os dados corretamente!")
    }


}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message

    formItem.className = "form-content error"
}


async function sendData() {
    const dados = {
        username: username.value,
        email: email.value,
        password: password.value
    };

    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });


        if (response.ok) {
            const resultado = await response.json()
            window.location.href = "/pages/login.html"
            alert('Cadastro realizado com sucesso!');

        } else {
            
            alert('Erro ao realizar o cadastro. Tente novamente.');
        }
    } catch (error) {
        alert('Erro ao conectar ao servidor. Tente novamente.');
    }
}


