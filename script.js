let count = 0;
const counterValueDisplay = document.getElementById('counter-value')
const btnIncrement = document.getElementById('btn-increment')
const btnDecrement = document.getElementById('btn-decrement')
const btnReset = document.getElementById('btn-reset')

function updateCounterDisplay() {
    counterValueDisplay.textContent = count;
}


btnIncrement.addEventListener("click", () => {
    count++;
    updateCounterDisplay()
})

btnDecrement.addEventListener("click", () => {
    
    if (count > 0) {
        count--;
        updateCounterDisplay()
    }
   
})

btnReset.addEventListener("click", () => {
    
        count = 0;
        updateCounterDisplay()
})






// To Do List App
const todoInput = document.getElementById('todo-input')
const addTodoBtn = document.getElementById('add-todo-btn')
const todoList = document.getElementById('todo-list')

function addTodo() {
    const taskText = todoInput.value.trim()

    if (taskText === "") {
        alert('Do not Empty')
        return;
    }


    // buat elemen baru : <li></li>
    const listItem = document.createElement('li')
    listItem.className = 'todo-item'

    // buat text tugas : <span></span>
    const textSpan = document.createElement('span')
    textSpan.textContent = taskText

    // buat tombol hapus : <button></button>
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Hapus'

    // delete button listener
    deleteBtn.addEventListener("click", () => {
        todoList.removeChild(listItem)
    })

    listItem.appendChild(textSpan)
    listItem.appendChild(deleteBtn)

    todoList.appendChild(listItem)
    todoInput.value = ""
}

addTodoBtn.addEventListener("click", addTodo)

todoInput.addEventListener('keypress', (e) => {
    if (e, key === 'Enter') {
        addTodo()
    }
})




