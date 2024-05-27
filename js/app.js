document.addEventListener('DOMContentLoaded', init);

function init() {
    let saveButton = document.querySelector('#saveButton');
    saveButton.addEventListener('click', addTask);
}

function addTask() {
    let input = document.querySelector('#input');
    let taskText = input.value.trim();

    if (taskText !== '') {
        let taskHTML = createTaskHTML(taskText);
        let listContent = document.querySelector('#listContent');
        listContent.insertAdjacentHTML('beforeend', taskHTML);

        addTaskEventListeners();

        input.value = '';
    }
}

function createTaskHTML(taskText) {
    return `
        <div class="task-item">
            <span>${taskText}</span>
            <button>Delete</button>
        </div>
    `;
}

function addTaskEventListeners() {
    let tasks = document.querySelectorAll('.task-item');
    let lastTask = tasks[tasks.length - 1];

    let taskSpan = lastTask.querySelector('span');
    taskSpan.addEventListener('dblclick', toggleTaskCompletion);

    let deleteButton = lastTask.querySelector('button');
    deleteButton.addEventListener('click', deleteTask);
}

function toggleTaskCompletion(event) {
    let taskSpan = event.target;
    taskSpan.classList.toggle('completed');
}

function deleteTask(event) {
    let taskItem = event.target.parentElement;
    taskItem.remove();
}