const botaoSalva = document.querySelector('.to-do-button') as HTMLButtonElement;

botaoSalva.addEventListener('click', (e: Event) => {
    const tarefaInput = document.querySelector('.to-do-textarea') as HTMLInputElement;
    const listaTarefas = document.querySelector('.to-do-list-items') as HTMLUListElement;

    e.preventDefault();

    const tarefa = tarefaInput.value;

    listaTarefas.innerHTML += `<li class="to-do-list-item">${tarefa}</li>`;
    alert('Tarefa incluída com sucesso!');
    tarefaInput.value = '';
    tarefaInput.focus();
});