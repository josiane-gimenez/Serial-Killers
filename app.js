function pesquisar() {
  const campoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase();
  const resultadosDiv = document.getElementById('resultados-pesquisa');

  // Limpa os resultados anteriores
  resultadosDiv.innerHTML = '';

  

  // Filtra os dados
  const resultados = dados.filter(dado => {
    return dado.titulo.toLowerCase().includes(campoPesquisa) ||
           dado.descricao.toLowerCase().includes(campoPesquisa);
  });

  // Cria os elementos HTML para cada resultado
  resultados.forEach(dado => {
    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('item-resultado');
    resultadoDiv.innerHTML = `
      <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
      <p class="descricao-meta">${dado.descricao}</p>
    `;
    resultadosDiv.appendChild(resultadoDiv);
  });

  // Se não houver resultados, exibe uma mensagem
  if (resultados.length === 0) {
    const mensagem = document.createElement('p');
    mensagem.textContent = 'Nenhum resultado encontrado.';
    resultadosDiv.appendChild(mensagem);
  }
}


 