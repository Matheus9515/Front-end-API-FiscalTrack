# Fiscal Track

Fiscal Track é uma plataforma dedicada a simplificar o monitoramento e a gestão de documentos fiscais eletrônicos. Nossa missão é proporcionar agilidade e segurança no controle das suas notas fiscais, garantindo uma experiência intuitiva e eficiente para nossos usuários.

## Estrutura do Projeto

### Páginas HTML

- **index.html**: Página inicial do site, apresenta uma mensagem de boas-vindas e uma descrição das vantagens de usar a plataforma Fiscal Track.

- **login.html**: Página de login onde os usuários podem entrar em suas contas.

- **cadastro.html**: Página de cadastro onde novos usuários podem criar uma conta.

- **editar_perfil.html**: Página onde os usuários podem editar suas informações de perfil, como nome completo, CPF e gênero.

- **notas_fiscais.html**: Página para visualização e gerenciamento das notas fiscais. Inclui funcionalidades para adicionar novas notas fiscais e filtrar as existentes.

### Scripts

- **scripts/editar-perfil.js**: Script responsável por gerenciar a funcionalidade de logout dos usuários, removendo o token de autorização do local storage e redirecionando para a página de login.

- **scripts/form-validation.js**: Script que realiza a validação dos campos do formulário de cadastro. Valida os campos de e-mail, confirmação de e-mail, senha e confirmação de senha, garantindo que os valores correspondam antes de permitir o envio do formulário.

- **scripts/login-validation.js**: Script para validar o formulário de login. Envia os dados de login para a API e, em caso de sucesso, armazena o token de autorização no local storage e redireciona para a página de notas fiscais. Em caso de erro, exibe mensagens de erro apropriadas.

- **scripts/modal.js**: Script para gerenciar a exibição e fechamento de modais na página de notas fiscais. Inclui a lógica para adicionar novas notas fiscais à tabela e exibir os campos adicionais após a seleção de um arquivo.

- **scripts/notas_fiscais.js**: Script que gerencia a tabela de notas fiscais, carregando dados de uma API, exibindo detalhes das notas fiscais, e validando e adicionando novas notas fiscais a partir de um modal.

- **scripts/register-validation.js**: Script que valida os campos do formulário de registro, assegurando que o e-mail e a senha correspondam às suas confirmações antes de enviar os dados para a API. Em caso de sucesso, redireciona o usuário para a página de login.

### Estilos

- **styles/styles.css**: Arquivo de estilos personalizados para a plataforma Fiscal Track. Inclui estilos para a navegação, formulários, botões e outras partes da interface do usuário.

### Pastas

- **images**: Contém imagens utilizadas no site, como imagens de background e avatar.

- **.vscode**: Contém configurações específicas do Visual Studio Code. Inclui um arquivo `launch.json` para facilitar o lançamento do projeto no navegador Chrome, configurado para rodar em `http://localhost:8080`.

### Tecnologias Utilizadas

- **HTML5**: Para a estruturação do conteúdo.
- **CSS3**: Para a estilização das páginas.
- **JavaScript**: Para a manipulação do DOM e validação de formulários.
- **Bootstrap 4.5**: Framework CSS para criação de layouts responsivos e componentes prontos para uso.
- **Font Awesome**: Biblioteca de ícones.

## Como Usar

1. Clone o repositório para a sua máquina local:
    ```bash
    git clone https://github.com/seu-usuario/fiscal-track.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd fiscal-track
    ```

3. Abra o arquivo `index.html` no seu navegador para visualizar a página inicial.