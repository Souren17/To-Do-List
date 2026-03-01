const toDoInput = document.querySelector(".todo-input");
const toDoBtn = document.querySelector(".todo-btn");
const toDoList = document.querySelector(".todo-list");

// Event listeners
toDoBtn.addEventListener("click", addToDo);
toDoList.addEventListener("click", handleTodoClick);

function addToDo(e) {
    e.preventDefault();
    const text = toDoInput.value.trim();
    if (!text) return alert("Write something!");

    const todoObj = { text, completed: false };
    addTodoToDOM(todoObj);
    toDoInput.value = "";
}

function addTodoToDOM(todo) {
    const div = document.createElement("div");
    div.classList.add("todo");
    if (todo.completed) div.classList.add("completed");

    div.innerHTML = `
        <li class="todo-item">${todo.text}</li>
        <button class="check-btn"><i class="fas fa-check"></i></button>
        <button class="delete-btn"><i class="fas fa-trash"></i></button>
    `;
    toDoList.appendChild(div);
}

function handleTodoClick(e) {
    const item = e.target.closest(".todo");
    if (!item) return;

    if (e.target.closest(".delete-btn")) {
        item.remove(); // fast removal, no localStorage
    }
    if (e.target.closest(".check-btn")) {
        item.classList.toggle("completed");
    }
}

// ===== JS/time.js =====
function updateDateTime() {
    const now = new Date();

    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
    };

    const formatted = now.toLocaleDateString('en-US', options);

    const datetimeEl = document.getElementById("datetime");
    if (datetimeEl) datetimeEl.innerText = formatted;
}

setInterval(updateDateTime, 1000);
updateDateTime();