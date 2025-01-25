//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Função para adicionar o nome à lista
function adicionarAmigo() {
    // Obtém o valor do campo de entrada
    const nome = document.getElementById('amigo').value;

    // Verifica se o campo não está vazio
    if (nome.trim() !== '') {
        // Cria um novo item de lista
        const li = document.createElement('li');
        li.textContent = nome;

        // Adiciona o item à lista de amigos
        document.getElementById('listaAmigos').appendChild(li);

        // Limpa o campo de input após adicionar
        document.getElementById('amigo').value = '';
    } else {
        // Exibe um alerta caso o campo esteja vazio
        alert('Por favor, digite um nome!');
    }
}

// Função para sortear apenas um amigo secreto
function sortearAmigo() {
    // Obtém todos os nomes da lista de amigos
    const amigos = [...document.getElementById('listaAmigos').getElementsByTagName('li')];
    
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert('Adicione ao menos um amigo na lista!');
        return;
    }

    // Sorteia um amigo aleatoriamente
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o sorteio de um amigo secreto
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa qualquer sorteio anterior
    const liResultado = document.createElement('li');
    liResultado.textContent = `Amigo sorteado: ${amigoSorteado.textContent}`;
    resultado.appendChild(liResultado);

    // Desativa o botão de sorteio após o sorteio
    document.querySelector('.button-draw').disabled = true;
    document.querySelector('.background-color').
}

// Função para reiniciar o sorteio, limpar a lista de amigos e reabilitar o botão
function novoSorteio() {
    // Limpa a lista de amigos
    document.getElementById('listaAmigos').innerHTML = '';

    // Limpa o resultado do sorteio
    document.getElementById('resultado').innerHTML = '';

    // Reabilita o botão de sorteio
    document.querySelector('.button-draw').disabled = false;
}