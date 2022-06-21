const tarefaInput = document.querySelector('.to-do-textarea') as HTMLInputElement;
const listaTarefas = document.querySelector('.to-do-list-items') as HTMLUListElement;

const limparForm = (): void => {
    tarefaInput.value = '';
    tarefaInput.focus();
}

const adicionaItem = (): void => {
    //tarefaInput.value;

    limparForm();
}
