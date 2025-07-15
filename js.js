const submitButton = document.querySelector('.todoAdd');
const todolist = document.querySelector('.todoList');

submitButton.addEventListener('click', function () {
    const input = document.querySelector('.todoInput');
    if (input.value.trim() === '') {
        alert('no no no, you need to write something');
        return;
    }
    const li = document.createElement('li');
    li.classList.add('todoItem');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todoCheckbox';

    const text = document.createElement('span');
    text.className = 'todoText';
    text.innerText = input.value;

    const delBtn = document.createElement('button');
    delBtn.className = 'todoDelete';
    delBtn.innerText = 'X';
    delBtn.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(delBtn);

    todolist.appendChild(li);

    input.value = '';
});