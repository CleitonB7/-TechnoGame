// script.js
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio real do formulário para testar a funcionalidade.
alert("Bem-vindo(a) ao TechnoGame!")
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Mensagem enviada com sucesso!\n' + 
              'Nome: ' + nome + '\n' + 
              'Email: ' + email + '\n' + 
              'Mensagem: ' + mensagem);
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
