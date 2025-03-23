# Projeto Web - SaúdePrime

## Visão Geral
SaúdePrime é um sistema web desenvolvido para gerenciar consultas, agendas e históricos de pacientes. Este projeto inclui funcionalidades de login, dashboard, agendamento de consultas e visualização de históricos.

## Estrutura do Projeto

- **/pages**: Contém as páginas HTML do projeto.
  - `index.html`: Página inicial do sistema.
  - `login.html`: Página de login para autenticação de usuários.
  - `dashboard.html`: Página de dashboard com informações e funcionalidades principais.
  - `cadastro.html`: Página de cadastro para novos usuários.

- **/styles**: Contém os arquivos CSS para estilização do projeto.
  - `header.css`: Estilos para o cabeçalho do site.
  - `footer.css`: Estilos para o rodapé do site.
  - `dashboard.css`: Estilos específicos para a página de dashboard.
  - `index.css`: Estilos específicos para a página inicial.
  - `login.css`: Estilos específicos para a página de login.
  - `cadastro.css`: Estilos específicos para a página de cadastro.

- **/scripts**: Contém os arquivos JavaScript para funcionalidades do sistema.
  - `validationEmail.js`: Funções para validação de e-mails.
  - `auth.js`: Lógica de autenticação e redirecionamento após login.
  - `logout.js`: Gerenciamento de logout e redirecionamento para a página de login.
  - `validation.js`: Funções genéricas para validação de formulários.

- **/data**: Contém arquivos de dados para o servidor fictício.
  - `db.json`: Arquivo JSON com os dados iniciais, como usuários e informações de teste.

- **/assets**: Contém recursos estáticos como imagens e ícones.
  - `logo.png`: Logotipo do sistema.
  - `favicon.ico`: Ícone do site.

- **/docs**: Contém documentação adicional do projeto.
  - `README.md`: Arquivo de documentação principal.
  - `LICENSE`: Arquivo de licença do projeto.

## Instalação
1. Clone o repositório para o seu ambiente local:
   ```bash
   git clone https://github.com/seu-usuario/projeto-web-saudeprime.git


2. cd projeto-web-saudeprime


## Configuração do Servidor Fictício

Para rodar um servidor fictício usando JSON Server:

1. Instale o JSON Server globalmente (se ainda não estiver instalado):

npm install -g json-server

2. Crie um arquivo db.json na raiz do projeto com os dados iniciais ou na tela de cadastro, realiza um cadastro de um novo usuário

{
  "users": [
    {
      "id": 1,
      "name": "João Silva",
      "email": "joao.silva@example.com",
      "password": "123456"
    },
    {
      "id": 2,
      "name": "Maria Oliveira",
      "email": "maria.oliveira@example.com",
      "password": "senha123"
    }
  ]
   }

3. Rode o servidor com o seguinte comando

json-server --watch db.json --port 3000


## Uso

* Abra o arquivo index.html no seu navegador para acessar a página inicial.

* Navegue até a página de login (login.html) e faça login com as credenciais fornecidas no db.json.

* Após o login, você será redirecionado para o dashboard (dashboard.html), onde poderá visualizar suas consultas e histórico.

## Scripts

* **validationEmail.js**: Contém funções para validação de e-mails, garantindo que os endereços inseridos pelos usuários estejam no formato correto.
* **auth.js**: Implementa a lógica de autenticação, verificando as credenciais do usuário e redirecionando para o dashboard em caso de sucesso.
* **logout.js**: Gerencia o processo de logout, encerrando a sessão do usuário e redirecionando para a página de login.
* **validation.js**: Inclui funções genéricas para validação de formulários, como verificação de campos obrigatórios e formatos de entrada.

## Estilos

* header.css: Estilos para o cabeçalho do site.
* footer.css: Estilos para o rodapé do site.
* dashboard.css: Estilos específicos para a página de dashboard.
* index.css: Estilos específicos para a página inicial.
* login.css: Estilos específicos para a página de login.
* cadastro.css: Estilos específicos para a página de cadastro.

## Contribuição

Se você deseja contribuir para este projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch:

*git checkout -b minha-nova-feature*

3. Faça suas alterações e commit:

*git commit -m 'Adiciona nova feature'*

4.Envie para o repositório remoto:

*git push origin minha-nova-feature*

5. Abra  um Pull Request.


## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Contato

Para mais informações, entre em contato com *equipe12ads@gmail.com*.




### Resumo
- **Visão Geral**: Descrição do projeto.
- **Estrutura do Projeto**: Organização dos arquivos e diretórios.
- **Instalação**: Instruções para clonar o repositório.
- **Configuração do Servidor Fictício**: Instruções para configurar e rodar o JSON Server.
- **Uso**: Instruções para acessar e usar o sistema.
- **Scripts**: Descrição dos arquivos JavaScript.
- **Estilos**: Descrição dos arquivos CSS.
- **Contribuição**: Instruções para contribuir com o projeto.
- **Licença**: Informação sobre a licença do projeto.
- **Contato**: Informações de contato.

Se precisar de mais ajustes ou informações adicionais, é só avisar!