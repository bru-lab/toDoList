// script.js
document.getElementById('addButton').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const todoList = document.getElementById('todoList');

    const itemText = itemInput.value.trim();

    if (itemText !== "") {
        // Criar o item da lista
        const li = document.createElement('li');
        
        // Criar o texto do item
        const span = document.createElement('span');
        span.textContent = itemText;
        li.appendChild(span);

        // Criar o botão de excluir
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Excluir";
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
        });
        li.appendChild(deleteButton);

        // Adicionar o item à lista
        todoList.appendChild(li);

        // Limpar o campo de entrada
        itemInput.value = "";
    }
});
