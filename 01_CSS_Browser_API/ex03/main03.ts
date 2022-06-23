const botaoSalva = document.querySelector('.to-do-button') as HTMLButtonElement;

botaoSalva.addEventListener('click', (e: Event) => {
  const tarefaInput = document.querySelector('.to-do-textarea') as HTMLInputElement;
  const listaTarefas = document.querySelector('.to-do-list-items') as HTMLUListElement;

  e.preventDefault();

  const tarefa = tarefaInput.value;
  alert('Tarefa incluída com sucesso!');

  const liTarefa = document.createElement('li');
  liTarefa.classList.add('to-do-list-item');

  liTarefa.innerText = tarefa;
  listaTarefas?.append(liTarefa);

  tarefaInput.value = '';
  tarefaInput.focus();
});